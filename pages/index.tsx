import Link from 'next/link'
import styles from "../styles/Home.module.css";

export default function RootPage() {
  return (
    <div className={styles.whole}>
      <h1 className={styles.theme}>
        無限クイズ
      </h1>
      <div className={styles.start}>
        <Link href="/questions">START</Link>
      </div>
    </div>
  );
};
