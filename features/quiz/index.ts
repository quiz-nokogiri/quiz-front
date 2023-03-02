import { http } from "../../utils/http";

export type Quiz = {
  question: string;
  answer1: string;
  answer2: string;
  correct: string;
};

export const fetchQuiz = async (): Promise<Quiz> => {
  const { data } = await http.get("/quiz");
  return data as Quiz;
};

export const judgeAnswer = (quiz: Quiz, answer: 1 | 2) => {
  if (answer === 1) {
    return quiz.correct === quiz.answer1;
  } else {
    return quiz.correct === quiz.answer2;
  }
};