import styles from "../styles/Home.module.css";
import { useEffect, useMemo, useReducer, useState } from "react";
import { useSwipeable, LEFT, RIGHT, UP, DOWN } from "react-swipeable";
import { fetchQuiz, judgeAnswer, Quiz } from "../features/quiz";

const SWIPE_DIRECTION = {
  LEFT,
  RIGHT,
  UP,
  DOWN,
};

enum DisplayState {
  THINKING,
  SUCCESS,
  MISSING,
}

export default function Home() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const addQuizzesByFetching = async () => {
    const quiz = await fetchQuiz();
    setQuizzes((prev) => [...prev, quiz]);
  };

  const [currentQuizNumber, dispatchCurrentQuizNumber] = useReducer(
    (prev: number, action: { type: "increment" | "decrement" }) => {
      switch (action.type) {
        case "increment":
          return Math.min(prev + 1, quizzes.length - 1);
        case "decrement":
          return Math.max(prev - 1, 0);
      }
    },
    0
  );

  const [displayState, setDisplayState] = useState<DisplayState>(
    DisplayState.THINKING
  );

  const goNext = () => {
    dispatchCurrentQuizNumber({ type: "increment" });
    setDisplayState(DisplayState.THINKING);
    addQuizzesByFetching();
  };

  const goPrev = () => {
    dispatchCurrentQuizNumber({ type: "decrement" });
    setDisplayState(DisplayState.THINKING);
  };

  const displayQuiz = useMemo(
    () => quizzes[currentQuizNumber],
    [quizzes, currentQuizNumber]
  );

  const handlers = useSwipeable({
    onSwiped: (event) => {
      if ([DisplayState.SUCCESS, DisplayState.MISSING].includes(displayState)) {
        if (event.dir == SWIPE_DIRECTION.UP) {
          goNext();
        }
      }
      if (displayState === DisplayState.THINKING) {
        if (event.dir == SWIPE_DIRECTION.LEFT) {
          const result = judgeAnswer(displayQuiz, 1);
          setDisplayState(result ? DisplayState.SUCCESS : DisplayState.MISSING);
        }
        if (event.dir == SWIPE_DIRECTION.RIGHT) {
          const result = judgeAnswer(displayQuiz, 2);
          setDisplayState(result ? DisplayState.SUCCESS : DisplayState.MISSING);
        }
        if (event.dir == SWIPE_DIRECTION.UP) {
          goNext();
        }
        if (event.dir == SWIPE_DIRECTION.DOWN) {
          goPrev();
        }
      }
    },
    trackMouse: true,
  });

  useEffect(() => {
    // NOTE: 次の問題を表示する時のローディング時間を短縮するために, 一つ先の問題を取得しておく
    addQuizzesByFetching();
    addQuizzesByFetching();
  }, []);

  const handleAnswer1Click = () => {
    const result = judgeAnswer(displayQuiz, 1);
    setDisplayState(result ? DisplayState.SUCCESS : DisplayState.MISSING);
  };

  const handleAnswer2Click = () => {
    const result = judgeAnswer(displayQuiz, 2);
    setDisplayState(result ? DisplayState.SUCCESS : DisplayState.MISSING);
  };

  const handleNextClick = () => {
    goNext();
  };

  return (
    <>
      <div {...handlers} className={styles.entire}>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>
              サバ<span>塩</span>
            </h1>
            <h1>問題</h1>
            <div id="wrap">
              <div className={styles.box}>
                <h1>
                  {displayQuiz.question}
                  {displayState === DisplayState.SUCCESS && <p>正解!!</p>}
                  {displayState === DisplayState.MISSING && <p>不正解</p>}
                </h1>
                {displayState === DisplayState.THINKING ? (
                  <>
                    <h2 onClick={handleAnswer1Click}>←{displayQuiz.answer1}</h2>
                    <h2 onClick={handleAnswer2Click}>{displayQuiz.answer2}→</h2>
                  </>
                ) : (
                  <h2 onClick={handleNextClick}>next Quiz ↓</h2>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
