import axios from "axios";
import styles from "../styles/Home.module.css";
// import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
// import { text } from "stream/consumers";
const http = axios.create({
  // baseURL: "https://quiz-flask.azurewebsites.net/",
  baseURL: "http://127.0.0.1:5000/",
  // baseURL: "http://127.0.0.1:8080/",
  headers: {
    // 'Access-Control-Allow-Origin': 'https://quiz-flask.azurewebsites.net/',
    "Access-Control-AlloSw-Origin": "http://127.0.0.1:5000/",
    // 'Access-Control-Allow-Origin': '*' //'http://127.0.0.1:8080/',
    // 'Content-Type': 'text/plain'
  },
});
var place = -1;
const back_num = new Array();

type Quiz = {
  question: string;
  answer1: string;
  answer2: string;
  correct_answer: string;
};

export default function Home() {
  // 問題、選択肢1、選択肢2, 答え
  const [fetchedMessage, setFetchedMessage] = useState<Quiz>();

  let get_quiz = async () => {
    // const res = await http.get("/user/1");
    const res = await http.get("/quiz");
    const data = JSON.parse(JSON.stringify(res.data));

    setFetchedMessage({
      question: data.quiz,
      answer1: data.answer1,
      answer2: data.answer2,
      correct_answer: data.correct_answer,
    });

    back_num.push(text);
    place += 1;
    setFetchedMessage(text);
    if (typeof document === "undefined") {
      return;
    }

    document.getElementById("answer_T")!.style.display = "none";
    document.getElementById("answer_F")!.style.display = "none";
    document.getElementById("reload")!.style.display = "none";

    const choice_1 = document.getElementById("choice_1")!;
    const choice_2 = document.getElementById("choice_2")!;

    choice_1.style.display = "inline";
    choice_2.style.display = "inline";
  };
  console.log(place);
  console.log(back_num);
  let past_quiz = () => {
    const shown_quiz = new Array(4);
    shown_quiz[0] = back_num[place - 1][0];
    shown_quiz[1] = back_num[place - 1][1];
    shown_quiz[2] = back_num[place - 1][2];
    shown_quiz[3] = back_num[place - 1][3];
    console.log(fetchedMessage);
    setFetchedMessage(shown_quiz);
  };

  // Note: DOM を参照して、直接いじりたいときは、useRef を使う
  const choiceElm1 = useRef<HTMLHeadingElement>(null);
  const choiceElm2 = useRef<HTMLHeadingElement>(null);
  const reloadElm = useRef<HTMLHeadingElement>(null);
  const answerTrueElm = useRef<HTMLParagraphElement>(null);
  const answerFalseElm = useRef<HTMLParagraphElement>(null);

  let judg_answer = async (e: any) => {
    if (
      !choiceElm1.current ||
      !choiceElm2.current ||
      !reloadElm.current ||
      !answerTrueElm.current ||
      !answerFalseElm.current
    ) {
      return;
    }
    if (e == fetchedMessage[3]) {
      answerTrueElm.current.style.display = "block";
      answerFalseElm.current.style.display = "none";
      choiceElm1.current.style.display = "none";
      choiceElm2.current.style.display = "none";
      reloadElm.current.style.display = "block";
    } else {
      answerTrueElm.current.style.display = "none";
      answerFalseElm.current.style.display = "block";
      choiceElm1.current.style.display = "none";
      choiceElm2.current.style.display = "none";
      reloadElm.current.style.display = "block";
    }
  };
  const handlers = useSwipeable({
    onSwiped: (event) => {
      // document.addEventListener("keydown",p=> {
      console.log(event);
      if (
        document.getElementById("answer_T")!.style.display == "block" ||
        document.getElementById("answer_F")!.style.display == "block"
      ) {
        if (event.dir == "Left") {
          // 正解表示後の左スワイプイベント
        }
        if (event.dir == "Right") {
          // 正解表示後の右スワイプイベント
        }
        if (event.dir == "Up") {
          get_quiz();
        }
      } else {
        // if (p.code =="ArrowLeft" || event.dir=="Left"){
        if (event.dir == "Left") {
          // 左にスワイプしたときに発火するイベント
          judg_answer(fetchedMessage[1]);
          // hogehoge()
        }
        // if (event.dir == "Right" || p.code =="ArrowRight"){
        if (event.dir == "Right") {
          // 右にスワイプしたときに発火するイベント
          judg_answer(fetchedMessage[2]);
          // hogehoge()
        }
        // if (event.dir == "Up" || p.code =="ArrowDown"){
        if (event.dir == "Up") {
          // past_quiz()
          get_quiz();
          // })
        }
        if (event.dir == "Down") {
          past_quiz();
        }
      }
    },
    trackMouse: true,
  });

  useEffect(() => {
    get_quiz();
  }, []);

  return (
    <>
      <div {...handlers} className={styles.entire}>
        <div className={styles.container}>
          {/* <Head>
          <title>サバ塩</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
          <main className={styles.main}>
            <h1 className={styles.title}>
              サバ<span>塩</span>
            </h1>
            <h1>問題</h1>
            <div id="wrap">
              <div className={styles.box}>
                <h1>
                  {fetchedMessage[0]}
                  <p ref={answerTrueElm}>正解!!</p>
                  <p ref={answerFalseElm}>不正解</p>
                </h1>
                <h2 ref={choiceElm1} onClick={(e) => judg_answer(e)}>
                  ←{fetchedMessage[1]}
                </h2>
                <h2 ref={choiceElm2} onClick={(e) => judg_answer(e)}>
                  {fetchedMessage[2]}→
                </h2>
                <h2 ref={reloadElm} onClick={() => get_quiz()}>
                  next Quiz ↓
                </h2>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
