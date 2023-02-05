import axios from "axios";

// import { text } from "stream/consumers";
export const http = axios.create({
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
