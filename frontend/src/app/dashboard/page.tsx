// "use client"

// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
// import StatCard from '@/components/StatCard'
// import styles from "./page.module.css"
// import Header from "@/components/Header"

// export default function DashboardPage() {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(true)
//   const [userEmail, setUserEmail] = useState("")

//   useEffect(() => {
//     const token = localStorage.getItem("token")
//     if (!token) {
//       router.push("/")
//     } else {
//       setUserEmail("user@example.com")
//       setIsLoading(false)
//     }
//   }, [router])

//   const handleLogout = () => {
//     localStorage.removeItem("token")
//     router.push("/")
//   }

//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.spinner}></div>
//       </div>
//     )
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.background}>
//         <div className={styles.shape}></div>
//         <div className={styles.shape}></div>
//         <div className={styles.shape}></div>
//       </div>

//       <Header />

//       <main className={styles.main}>
//         <div className={styles.welcomeSection}>
//           <div className={styles.welcomeCard}>
//             <div className={styles.successIcon}>
//               <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
//                 <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
//                 <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" />
//               </svg>
//             </div>
//             <h2 className={styles.welcomeTitle}>ログイン成功！</h2>
//             <p className={styles.welcomeMessage}>
//               おかえりなさい！ダッシュボードへようこそ。
//             </p>
//           </div>
//         </div>

//         <div className={styles.statsGrid}>
//           <StatCard
//             icon={
//               <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 />
//                 <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
//                 <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z" stroke="currentColor" strokeWidth="2" />
//               </svg>
//             }
//             number="1,234"
//             label="総ユーザー数"
//           />

//           <StatCard
//             icon={
//               <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M3 3v18h18"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 />
//                 <path
//                   d="m19 9-5 5-4-4-3 3"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 />
//               </svg>
//             }
//             number="89.2%"
//             label="成長率"
//           />

//           <StatCard
//             icon={
//               <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
//                 <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
//                 <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" />
//                 <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
//               </svg>
//             }
//             number="567"
//             label="アクティブセッション"
//           />

//           <StatCard
//             icon={
//               <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
//                 <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
//                 <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
//               </svg>
//             }
//             number="24h"
//             label="稼働時間"
//           />
//         </div>

//         <div className={styles.actionsSection}>
//           <h3 className={styles.sectionTitle}>クイックアクション</h3>
//           <div className={styles.actionGrid}>
//             <button 
//               className={styles.actionCard}
//               onClick={() => router.push("/create")}
//             >
//               <div className={styles.actionIcon}>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" stroke="currentColor" strokeWidth="2" />
//                   <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" />
//                 </svg>
//               </div>
//               <span>記録作成</span>
//             </button>
//             <button 
//               className={styles.actionCard}
//               onClick={() => router.push("/studypage")}
//             >
//               <div className={styles.actionIcon}>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" />
//                 </svg>
//               </div>
//               <span>勉強記録</span>
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import StatCard from "@/components/StatCard"
import styles from "./page.module.css"
import Header from "@/components/Header"

export default function DashboardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/")
    } else {
      setUserEmail("user@example.com")
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>

      <Header />

      <main className={styles.main}>
        <div className={styles.welcomeSection}>
          <div className={styles.welcomeCard}>
            <div className={styles.successIcon}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h2 className={styles.welcomeTitle}>ログイン成功！</h2>
            <p className={styles.welcomeMessage}>おかえりなさい！ダッシュボードへようこそ。</p>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <StatCard
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                <path
                  d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            }
            number="1,234"
            label="総ユーザー数"
          />

          <StatCard
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
                <path d="m19 9-5 5-4-4-3 3" stroke="currentColor" strokeWidth="2" />
              </svg>
            }
            number="89.2%"
            label="成長率"
          />

          <StatCard
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" />
                <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
              </svg>
            }
            number="567"
            label="アクティブセッション"
          />

          <StatCard
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
              </svg>
            }
            number="24h"
            label="稼働時間"
          />


        </div>

        <div className={styles.actionsSection}>
          <h3 className={styles.sectionTitle}>クイックアクション</h3>
          <div className={styles.actionGrid}>
            <button className={styles.actionCard} onClick={() => router.push("/create")}>
              <div className={styles.actionIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span>記録作成</span>
            </button>

            <button className={styles.actionCard} onClick={() => router.push("/studypage")}>
              <div className={styles.actionIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span>勉強記録</span>
            </button>

            <button className={styles.actionCard} onClick={() => router.push("/community")}>
              <div className={styles.actionIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span>みんなの記録</span>
            </button>

            <button className={styles.actionCard} onClick={() => router.push("/settings")}>
              <div className={styles.actionIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span>設定</span>
            </button>

          </div>
        </div>
      </main>
    </div>
  )
}
