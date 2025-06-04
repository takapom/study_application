'use client';

import { Inter } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import styles from "@/styles/CommunityCard.module.css"
import Header from './Header';

const inter = Inter({ subsets: ['latin'] });

type DashboardRecord = {
  id: number;
  subject: string;
  study_time: number;
  study_content: string;
  study_date: string;
  created_at: string;
  updated_at: string;
  username: string | number;
};

export default function DashboardRecordsPage() {
  const [records, setRecords] = useState<DashboardRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 非同期にデータを取得する関数
    async function fetchDashboardRecords() {
      try {
        const res = await fetch('http://localhost:8000/api/dashboard-records/');
        if (!res.ok) {
          throw new Error(`ステータス ${res.status} で取得に失敗しました`);
        }
        const json = await res.json();
        // レスポンスボディの "record" 配列をステートにセット
        setRecords(json.record);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardRecords();
  }, []);

  const getSubjectIcon = (subject: string) => {
    const subjectLower = subject.toLowerCase();
    if (subjectLower.includes('数学') || subjectLower.includes('math')) return '📐';
    if (subjectLower.includes('英語') || subjectLower.includes('english')) return '🌍';
    if (subjectLower.includes('科学') || subjectLower.includes('science')) return '🔬';
    if (subjectLower.includes('歴史') || subjectLower.includes('history')) return '📚';
    if (subjectLower.includes('プログラミング') || subjectLower.includes('programming')) return '💻';
    return '📖';
  };

  const getStudyTimeColor = (time: number) => {
    if (time >= 5) return styles.timeHigh;
    if (time >= 3) return styles.timeMedium;
    return styles.timeLow;
  };

  if (loading) {
    return (
      <div className={`${styles.container} ${inter.className}`}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>学習記録を読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.container} ${inter.className}`}>
        <div className={styles.errorContainer}>
          <div className={styles.errorIcon}>⚠️</div>
          <p className={styles.errorText}>エラーが発生しました: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${inter.className}`}>
      <header className={styles.header}>
        <Header />
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            <span className={styles.titleIcon}>🎓</span>
            学習記録ダッシュボード
          </h1>
          <p className={styles.subtitle}>みんなの頑張りを共有しよう！</p>
        </div>
      </header>

      <main className={styles.main}>
        {records.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📝</div>
            <h2 className={styles.emptyTitle}>まだ記録がありません</h2>
            <p className={styles.emptyText}>最初の学習記録を投稿してみましょう！</p>
          </div>
        ) : (
          <>
            <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{records.length}</span>
                <span className={styles.statLabel}>投稿数</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {records.reduce((sum, rec) => sum + rec.study_time, 0)}
                </span>
                <span className={styles.statLabel}>みんなの総学習時間</span>
              </div>
            </div>

            <div className={styles.recordsGrid}>
              {records.map((rec) => (
                <article key={rec.id} className={styles.recordCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.userInfo}>
                      <div className={styles.avatar}>
                        {String(rec.username).charAt(0).toUpperCase()}
                      </div>
                      <span className={styles.username}>{rec.username}</span>
                    </div>
                    <div className={styles.date}>
                      {new Date(rec.study_date).toLocaleDateString('ja-JP')}
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.subjectRow}>
                      <span className={styles.subjectIcon}>
                        {getSubjectIcon(rec.subject)}
                      </span>
                      <h3 className={styles.subject}>{rec.subject}</h3>
                    </div>

                    <div className={styles.studyTime}>
                      <div className={`${styles.timeDisplay} ${getStudyTimeColor(rec.study_time)}`}>
                        <span className={styles.timeIcon}>⏱️</span>
                        <span className={styles.timeValue}>{rec.study_time}</span>
                        <span className={styles.timeUnit}>時間</span>
                      </div>
                    </div>

                    <div className={styles.content}>
                      <p className={styles.contentText}>{rec.study_content}</p>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.tags}>
                      <span className={styles.tag}>#{rec.subject}</span>
                      <span className={styles.tag}>#{rec.study_time}h</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
