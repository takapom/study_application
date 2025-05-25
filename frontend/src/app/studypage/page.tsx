// "use client"

// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
// import styles from "./page.module.css"
// import Header from "@/components/Header"

// //データベースから受け取る型定義
// interface SubjectStudy {
//     id: number;
//     subject: string;
//     study_time: number;
//     study_content: string;
//     study_date: string;
//     created_at: string;
//     updated_at: string;
// }

// export default function StudyPage() {
//     const router = useRouter()
//     //取得したユーザーの情報をstateに格納、初期値は一旦null
//     const [isLoading, setIsLoading] = useState(false);
//     const [studyRecords, setStudyRecords] = useState<SubjectStudy[]>([]);

//     useEffect(() => {
//         const fetchStudyRecords = async () => {
//             try {
//                 setIsLoading(true);
//                 //token情報がない場合はトップページにリダイレクト
//                 const token = localStorage.getItem('token');
//                 if (!token) {
//                     router.push('/');
//                     return;
//                 }
    
//                 // ユーザーIDを取得（例：トークンからデコードするか、別のAPIで取得）
//                 const userId = localStorage.getItem('userId'); // または適切な方法でユーザーIDを取得
    
//                 const res = await fetch(`http://localhost:8000/api/study-records/?user_id=${userId}`, {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 });
    
//                 if (!res.ok) {
//                     throw new Error('データの取得に失敗しました');
//                 }
//                 const data = await res.json();
//                 setStudyRecords(data.study_records);
//             } catch (error) {
//                 console.error('Error fetching study records:', error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         fetchStudyRecords();
//     }, [router]);


//     return (
//         <div className={styles.container}>
//         <div className={styles.background}>
//         <div className={styles.shape}></div>
//         <div className={styles.shape}></div>
//         <div className={styles.shape}></div>
//         <Header />
//       </div>
//             <h1>勉強記録</h1>
//             {isLoading ? (
//                 <p>読み込み中...</p>
//             ) : (
//                 <div className={styles.records}>
//                     {studyRecords.map((record) => (
//                         <div key={record.id} className={styles.record}>
//                             <h2>{record.subject}</h2>
//                             <p>勉強時間: {record.study_time}分</p>
//                             <p>勉強内容: {record.study_content}</p>
//                             <p>日付: {new Date(record.study_date).toLocaleDateString('ja-JP')}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./page.module.css"
import Header from "@/components/Header"

//データベースから受け取る型定義
interface SubjectStudy {
  id: number
  subject: string
  study_time: number
  study_content: string
  study_date: string
  created_at: string
  updated_at: string
}

export default function StudyPage() {
  const router = useRouter()
  //取得したユーザーの情報をstateに格納、初期値は一旦null
  const [isLoading, setIsLoading] = useState(false)
  const [studyRecords, setStudyRecords] = useState<SubjectStudy[]>([])

  useEffect(() => {
    const fetchStudyRecords = async () => {
      try {
        setIsLoading(true)
        //token情報がない場合はトップページにリダイレクト
        const token = localStorage.getItem("token")
        if (!token) {
          router.push("/")
          return
        }

        // ユーザーIDを取得（例：トークンからデコードするか、別のAPIで取得）
        const userId = localStorage.getItem("userId") // または適切な方法でユーザーIDを取得

        const res = await fetch(`http://localhost:8000/api/study-records/?user_id=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })

        if (!res.ok) {
          throw new Error("データの取得に失敗しました")
        }
        const data = await res.json()
        setStudyRecords(data.study_records)
      } catch (error) {
        console.error("Error fetching study records:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchStudyRecords()
  }, [router])

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <Header />
      </div>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>勉強記録</h1>

          {isLoading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <p className={styles.loadingText}>読み込み中...</p>
            </div>
          ) : studyRecords.length === 0 ? (
            <div className={styles.emptyState}>
              <p className={styles.emptyText}>まだ勉強記録がありません</p>
              <p className={styles.emptySubtext}>勉強を記録して、学習の進捗を確認しましょう！</p>
            </div>
          ) : (
            <div className={styles.records}>
              {studyRecords.map((record) => (
                <div key={record.id} className={styles.record}>
                  <div className={styles.recordHeader}>
                    <h2 className={styles.recordSubject}>{record.subject}</h2>
                    <span className={styles.recordDate}>{new Date(record.study_date).toLocaleDateString("ja-JP")}</span>
                  </div>
                  <div className={styles.recordBody}>
                    <div className={styles.studyTime}>
                      <span className={styles.timeIcon}>⏱️</span>
                      <span className={styles.timeText}>{record.study_time}分</span>
                    </div>
                    <div className={styles.studyContent}>
                      <h3 className={styles.contentLabel}>勉強内容</h3>
                      <p className={styles.contentText}>{record.study_content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}