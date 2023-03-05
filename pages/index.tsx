import Link from 'next/link'
import Head from 'next/head'
import styles from "../styles/Home.module.css";

export default function RootPage() {
  return (
    <>
      <Head>
        <title>UnlimitedQuiz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="UnlimitedQuiz　無限クイズ 　- ワクワクする人生に。クイズを楽しみ、暇つぶししながら知識、好奇心を手に入れましょう。" />
        <meta name="keywords" content="クイズ,無限,暇つぶし,スマートフォン,スマホ,UnlimitedQuiz,無限クイズ" />
        <title>UnlimitedQuiz</title>
      </Head><div className={styles.whole}>
        <h1 className={styles.theme}>
          無限クイズ
        </h1>
        <div className={styles.start}>
          <Link href="/questions">START</Link>
        </div>
      </div>
    </>
  );
};
