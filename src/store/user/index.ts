import { action, makeAutoObservable } from "mobx";
import axios from "axios";
import { URL } from "../../API";
import Auth from "../auth";

class User {
  user = {
    id: "1",
    firstName: "Артем",
    lastName: "Коньков",
    patronymic: "Вадимович",
    email: "kxnkxv@yandex.ru",
    avatar:
      "https://sun9-7.userapi.com/impg/PoU3dI-7_5Z_xnTP8de29q0TPoKXzkuF_DE6LQ/_FxvOjcO_Mg.jpg?size=1575x2160&quality=96&sign=dc84797b4baa0ea0ac05e419f3fd6084&type=album",
    phone: "",
    answers: 0,
    questions: 0,
    role: "",
    education: "Я учусь в ВУЗе",
    emailNotify: true,
    balance: 1000,
  };

  constructor() {
    makeAutoObservable(this);
  }

  @action authLogin = (email: string, password: string) => {
    axios
      .post(`${URL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        Auth.setIsUserAuth(true);
        // this.user = response.data
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  @action authRegister = (
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
        // this.user = response.data
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default new User();
