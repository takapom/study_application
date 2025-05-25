import styles from "./page.module.css"
import AuthModals from "@/components/AuthModals"

export default function LandingPage() {
  return (
    <div className={styles.container}>
      {/* Background Elements */}
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
        <div className={styles.shape4}></div>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>📚</span>
            <span className={styles.logoText}>StudyTime</span>
          </div>
          <AuthModals />
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            勉強時間を<span className={styles.highlight}>スマートに</span>管理
          </h1>
          <p className={styles.heroSubtitle}>
            効率的な学習習慣を身につけて、目標達成をサポートします。
            <br />
            あなたの学習進捗を可視化し、モチベーションを維持しましょう。
          </p>
          <div className={styles.heroButtons}>
            <AuthModals variant="hero" />
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.mockupCard}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.mockupStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>2.5h</span>
                  <span className={styles.statLabel}>今日の勉強時間</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15</span>
                  <span className={styles.statLabel}>連続学習日数</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresContent}>
          <h2 className={styles.sectionTitle}>主な機能</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⏱️</div>
              <h3 className={styles.featureTitle}>時間記録</h3>
              <p className={styles.featureDescription}>科目別に勉強時間を簡単に記録。 日々の学習習慣を可視化します。</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3 className={styles.featureTitle}>進捗分析</h3>
              <p className={styles.featureDescription}>
                グラフやチャートで学習進捗を分析。 効果的な学習パターンを発見できます。
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3 className={styles.featureTitle}>目標設定</h3>
              <p className={styles.featureDescription}>
                学習目標を設定して達成度を追跡。 モチベーション維持をサポートします。
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3 className={styles.featureTitle}>レスポンシブ</h3>
              <p className={styles.featureDescription}>
                スマホ、タブレット、PCで利用可能。 いつでもどこでも学習記録ができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.benefitsContent}>
          <h2 className={styles.sectionTitle}>なぜStudyTimeを選ぶのか</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✨</div>
              <div className={styles.benefitText}>
                <h3>シンプルで直感的</h3>
                <p>複雑な操作は不要。誰でも簡単に使い始められます。</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🔒</div>
              <div className={styles.benefitText}>
                <h3>安全・安心</h3>
                <p>あなたの学習データは安全に保護されています。</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🚀</div>
              <div className={styles.benefitText}>
                <h3>継続的な改善</h3>
                <p>ユーザーフィードバックを基に機能を継続的に改善しています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>今すぐ学習管理を始めましょう</h2>
          <p className={styles.ctaSubtitle}>無料で始められます。効率的な学習習慣を身につけて、目標を達成しましょう。</p>
          <AuthModals variant="cta" />
        </div>
      </section>
    </div>
  )
}
