import axios from "axios";
import { URL } from "../../index";
import Auth from "../../../store/auth";

export const authRegister = (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  axios
    .post(`${URL}/auth/register`, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
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
