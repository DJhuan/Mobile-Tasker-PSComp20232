import axios from "axios";

export default axios.create({
  method: "get",
  baseURL: "https://zenquotes.io/api/quotes/today",
});
