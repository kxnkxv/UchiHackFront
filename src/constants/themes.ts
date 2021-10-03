import axios from "axios";
import { URL } from "./API";
import Auth from "../store/auth";

export let themes = axios.request({
  method: "get",
  url: `${URL}/themes/`,
  headers: {
    Authorization: `Bearer ${Auth.token.accessToken}`,
  },
});
