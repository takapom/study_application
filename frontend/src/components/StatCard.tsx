// frontend/src/components/dashboard/StatCard.tsx
import styles from '@/styles/StatCard.module.css'

interface StatCardProps {
  icon: React.ReactNode
  number: string
  label: string
}

export default function StatCard({ icon, number, label }: StatCardProps) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statIcon}>
        {icon}
      </div>
      <div className={styles.statContent}>
        <h3 className={styles.statNumber}>{number}</h3>
        <p className={styles.statLabel}>{label}</p>
      </div>
    </div>
  )
}