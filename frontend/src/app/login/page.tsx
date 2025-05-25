import { Metadata } from 'next'
import LoginForm from '@/components/LoginForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'ログイン | Study App',
  description: 'Study Appにログインして、あなたの勉強を記録しましょう。',
  keywords: '勉強記録, ログイン, 学習管理',
}

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>サインインしてアカウントにアクセス</p>
        </div>
        <LoginForm />
        <div className={styles.footer}>
          <p>アカウントをお持ちでない方は <a href="/register" className={styles.link}>新規登録</a></p>
        </div>
      </div>
    </div>
  )
}