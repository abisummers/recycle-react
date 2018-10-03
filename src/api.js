import axios from "axios";

console.log(process.env)

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  withCredentials: true
});

export default api;
