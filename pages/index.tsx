import Link from 'next/link'
import styles from "../styles/Home.module.css";

export default function RootPage() {
  return (
    <div>
      <h1 className={styles.theme}>
        無限クイズ
      </h1>
      <div className={styles.whole}>
        <div className={styles.start}>
          <Link href="/questions" className={styles.bo}>START</Link>
        </div>
      </div>
    </div>
  );
};
