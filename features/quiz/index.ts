import axios from "axios";

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