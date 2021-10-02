import axios from "axios";
import { URL } from "../../index";

export const authMe = () => {
  axios
    .get(`${URL}/auth/me`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
