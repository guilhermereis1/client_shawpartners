import axios from "axios";

let BASE_URL = undefined;

process.env.NODE_ENV === "development"
  ? (BASE_URL = "http://localhost:3333")
  : (BASE_URL = process.env.REACT_APP_API_BASE_URL);

const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default Api;
