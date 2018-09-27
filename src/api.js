import axios from "axios";

//Create an axios object with the common settings we need for all requests
const api = axios.create({
  baseURL: "http://localhost:4000/api",
  //allows axios to send cookies to the backend
  withCredentials: true
});

export default api;
