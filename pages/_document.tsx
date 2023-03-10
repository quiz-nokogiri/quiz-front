import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
    <Html>
        <Head>
            <title>UnlimitedQuiz</title>
            <meta property="og:site_name" content="UnlimitedQuiz" />
            <meta name="keywords" content="クイズ,無限,暇つぶし,スマートフォン,スマホ,UnlimitedQuiz,無限クイズ" />
            <meta name="description" content="UnlimitedQuiz　無限クイズ 　- ワクワクする人生に。クイズを楽しみ、暇つぶししながら知識、好奇心を手に入れましょう。" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="UTF-8" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
    );
  }
}
