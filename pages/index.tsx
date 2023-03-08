import Link from 'next/link'
import Head from 'next/head'
import styles from "../styles/index.module.css"

export default function RootPage() {
  return (
    <>
      <Head>
        <title>UnlimitedQuiz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="UnlimitedQuiz　無限クイズ 　- ワクワクする人生に。クイズを楽しみ、暇つぶししながら知識、好奇心を手に入れましょう。" />
        <meta name="keywords" content="クイズ,無限,暇つぶし,スマートフォン,スマホ,UnlimitedQuiz,無限クイズ" />
        <title>UnlimitedQuiz</title>
      </Head>
      <h1 className={styles.theme}>
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
    </>
  );
};
