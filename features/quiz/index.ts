import { http } from "../../utils/http";

export type Quiz = {
  question: string;
  answer1: string;
  answer2: string;
  correct: string;
};

export const fetchQuiz = async (): Promise<Quiz> => {
  const { data } = await http.get("/quiz");
  return {
    question: data.quiz,
    answer1: data.answer1,
    answer2: data.answer2,
    correct: data.correct_answer,
  };
};

export const judgeAnswer = (quiz: Quiz, answer: 1 | 2) => {
  if (answer === 1) {
    return quiz.correct === quiz.answer1;
  } else {
    return quiz.correct === quiz.answer2;
  }
};