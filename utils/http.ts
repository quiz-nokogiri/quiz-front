import axios from "axios";

// import { text } from "stream/consumers";
export const http = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "https://quiz-fastapi.azurewebsites.net/",
  // headers: {"Access-Control-AlloSw-Origin": "http://127.0.0.1:8000"},
  headers: {"Access-Control-AlloSw-Origin": "https://quiz-fastapi.azurewebsites.net/"},
});
