import axios from "axios";

const token = localStorage.getItem("token:KenzieHub");

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 1000,
});

export const apiHeader = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 1000,
  headers: { Authorization: `Bearer ${token}` },
});
