"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./page.module.css"

// 型定義
interface StudyRecord {
  subject: string;
  study_time: number;
  study_content: string;
  study_date: string | number;
  user: string | number;
}

export default function CreatePage() {
  const router = useRouter()
  // fetch結果を格納
  const [formData, setFormData] = useState<StudyRecord>({
    subject: "",
    study_time: 0,
    study_content: "",
    study_date: "",
    user: 1,
  });

  // fetchして勉強記録を追加できるようにする
  const createStudy = async () => {
    const res = await fetch("http://localhost:8000/api/create-records/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    if (!res.ok) {
      throw new Error("保存に失敗しました！")
    }
    const data = await res.json()
    console.log(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createStudy()
    router.push("/dashboard")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === "study_time" ? Number(value) : value
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
              name="study_time"
              value={formData.study_time}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="studyContent">勉強内容</label>
            <textarea
              id="studyContent"
              name="study_content"
              value={formData.study_content}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="studyDate">勉強日</label>
            <input
              type="date"
              id="studyDate"
              name="study_date"
              value={formData.study_date}
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