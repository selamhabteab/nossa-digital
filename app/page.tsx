import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1 className="text-4xl font-bold text-blue-600">Hello, Nossa Digital</h1>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
