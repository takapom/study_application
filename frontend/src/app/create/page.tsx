"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./page.module.css"

export default function CreatePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    subject: "",
    studyTime: "",
    studyContent: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: APIを呼び出してデータを保存
    router.push("/dashboard")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>新規勉強記録</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="subject">科目</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="studyTime">勉強時間（分）</label>
            <input
              type="number"
              id="studyTime"
              name="studyTime"
              value={formData.studyTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="studyContent">勉強内容</label>
            <textarea
              id="studyContent"
              name="studyContent"
              value={formData.studyContent}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>
              保存
            </button>
            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className={styles.cancelButton}
            >
              キャンセル
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 