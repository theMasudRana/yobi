import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${import.meta.env.VITE_API_KEY}`,
  },
});

export default API;
