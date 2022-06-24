import axios from "axios";

const BASE_URL = "https://makeyouup.herokuapp.com/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
