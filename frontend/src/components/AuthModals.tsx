"use client"

import { useRouter } from "next/navigation"
import styles from "@/styles/AuthModals.module.css"

interface AuthModalsProps {
  variant?: "header" | "hero" | "cta"
}

export default function AuthModals({ variant = "header" }: AuthModalsProps) {
  const router = useRouter()

  const renderHeaderButtons = () => (
    <nav className={styles.nav}>
      <button className={styles.loginBtn} onClick={() => router.push("/login")}>
        ログイン
      </button>
      <button className={styles.signupBtn} onClick={() => router.push("/login")}>
        新規登録
      </button>
    </nav>
  )

  const renderHeroButtons = () => (
    <>
      <button className={styles.primaryBtn} onClick={() => router.push("/signup")}>
        今すぐ始める
      </button>
      <button className={styles.secondaryBtn} onClick={() => router.push("/login")}>
        ログイン
      </button>
    </>
  )

  const renderCtaButton = () => (
    <button className={styles.ctaButton} onClick={() => router.push("/signup")}>
      無料で始める
    </button>
  )

  return (
    <>
      {variant === "header" && renderHeaderButtons()}
      {variant === "hero" && renderHeroButtons()}
      {variant === "cta" && renderCtaButton()}
    </>
  )
}
