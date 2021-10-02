import axios from "axios";
import { URL } from "../../index";

export const getUserById = (id: string) =>
  axios
    .get(`${URL}/users/${id}`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch(() => {
      return null;
    });
