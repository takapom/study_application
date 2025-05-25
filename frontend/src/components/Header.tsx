import styles from "@/styles/Header.module.css"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function Header() {
    const router = useRouter()
    const [userEmail, setUserEmail] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    //ログインするためのの処理
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            router.push("/")
        } else{
            setUserEmail("user@example.com")
            setIsLoading(false)
        }
    }, [router])//routerが変更されるということはログイグアウトしかないのでその時に再度ログインするための処理を行う

    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push("/login")
    }

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
            </div>
        )
    }


    return(
        <header className={styles.header}>
        <div className={styles.headerContent}>
        <h1 className={styles.logo}>Study App</h1>
        <div className={styles.userInfo}>
            <span className={styles.userEmail}>{userEmail}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
            ログアウト
            </button>
        </div>
        </div>
        </header>
    )
}
