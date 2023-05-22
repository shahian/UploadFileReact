import axios from "axios";
import { getFromLocalStorage } from "./ManageLocalStorage";
const env = process.env.NODE_ENV
if (env==="production"){
// server :
axios.defaults.baseURL = "/api/route";
}
if (env==="development"){
// local :
axios.defaults.baseURL = "http://localhost:8089/";
}

console.log("env",env)


const makeRequest = async (method, url, data = null, responseType = null) => {
  const token = getFromLocalStorage("token");
  const res = await axios({
    method,
    url,
    data,
    responseType,
    headers: !!token
      ? {
          "Content-type": "application/json; charset=UTF-8",
          Channel: "GODAR",
          Token: token,
        }
      : {
          "Content-type": "application/json; charset=UTF-8",
          Channel: "GODAR",
        },
  });
  return res;
};

export default makeRequest;
