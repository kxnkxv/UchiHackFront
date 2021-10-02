import { action, makeAutoObservable } from "mobx";
import axios from "axios";
import { URL } from "../../API";

class Auth {
  isUserAuth = !!window.localStorage.getItem("isUserAuth");
  token = {};

  constructor() {
    makeAutoObservable(this);
  }

  @action setIsUserAuth(status: boolean) {
    this.isUserAuth = status;
    window.localStorage.setItem("isUserAuth", `${status || ""}`);
  }

  @action setToken = (token: {}) => {
    this.token = token;
  };

  @action authLogin = (email: string, password: string) => {
    axios
      .post(`${URL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        // User.setUser(response.data.user)
        // this.setToken(response.data.user)
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
        this.setIsUserAuth(true);
        // User.setUser(response.data)
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default new Auth();
