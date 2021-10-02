import axios from "axios";
import { URL } from "../../index";
import Auth from "../../../store/auth";

export const authLogin = (email: string, password: string) => {
  axios
    .post(`${URL}/auth/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      Auth.setIsUserAuth(true);
      // User.setUser(response)
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
