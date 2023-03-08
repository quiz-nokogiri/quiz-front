import { useSwipeable } from "react-swipeable";
import Link from 'next/link'
import Head from 'next/head'
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
      <Head>
        <title>UnlimitedQuiz</title>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="UnlimitedQuiz" />
        <meta name="description" content="UnlimitedQuiz　無限クイズ 　- ワクワクする人生に。クイズを楽しみ、暇つぶししながら知識、好奇心を手に入れましょう。" />
        <meta name="keywords" content="クイズ,無限,暇つぶし,スマートフォン,スマホ,UnlimitedQuiz,無限クイズ" />
      </Head>
      <div {...handlers} className={styles.entire}>
        <h1 className={styles.title}>
          UnlimitedQuiz
        </h1>
        <h2>
          全ての操作がスワイプで操作が行えます。<br />
          上にスワイプしてクイズSTART！
        </h2>
        <div className={styles.whole}>
          <div className={styles.start}>
            <Link href="/quizzes" className={styles.bo}>START</Link>
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
