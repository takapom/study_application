// frontend/src/components/LoginForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/LoginForm.module.css'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      console.log('レスポンスデータ:', data)

      if (res.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.user_id);
        console.log('ログイン成功')
        router.push('/dashboard')
      } else {
        console.error('ログイン失敗:', data.message || 'エラーが発生しました')
        alert(data.message || 'ログインに失敗しました')
      }
    } catch (error) {
      console.error('エラーが発生しました:', error)
      alert('ログイン処理中にエラーが発生しました')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
      <div className={styles.formGroup}>
        <label className={styles.label}>メールアドレス</label>
        <input
          type="email"
          className={styles.input}
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>パスワード</label>
        <input
          type="password"
          className={styles.input}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={styles.options}>
        <label className={styles.checkbox}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
          ログイン状態を保持
        </label>
        <a href="#" className={styles.forgotPassword}>パスワードを忘れた方</a>
      </div>
      <button 
        type="submit" 
        className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className={styles.spinner}></span>
        ) : (
          'ログイン'
        )}
      </button>
    </form>
  )
}