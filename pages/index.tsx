import { useSwipeable } from "react-swipeable";
import Link from 'next/link'
import styles from "../styles/index.module.css"

export default function RootPage() {
  const handlers = useSwipeable({
    onSwiped: (event) => {
        console.log(event);
        if (event.dir == "Up") {
          window.location.href = "/quizzes"
        }
    },
    trackMouse: true, //マウス操作でのスワイプを許可する場合はtrue
  });

  return (
    <>
      <div {...handlers} className={styles.entire}>
        <h1 className={styles.title}>
          UnlimitedQuiz
        </h1>
        <div className={styles.whole}>
          <div className={styles.start}>
            <div className={styles.bo}>
              <h3>
                問題は無限に続きます。<br/>
                全ての操作がスワイプで行えます。<br />
                上にスワイプしてクイズSTART！
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fixed_footer_menu}>
        <ul>
          <li>
            <Link href="./">
              <div className={styles.footer_icon}>
                <i className="fa-solid fa-house" />
              </div>
              <p>Home</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
