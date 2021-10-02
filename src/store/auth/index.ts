import { action, makeAutoObservable } from "mobx";
import axios from "axios";
import { URL } from "../../constants/API";
import { UserType } from "../../types/UserType";

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

  @action authLogin = (email: string, password: string) =>
    axios.request<UserType>({
      method: "post",
      url: `${URL}/auth/login`,
      data: {
        email: email,
        password: password,
      },
    });

  @action authRegister = (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) =>
    axios.request<UserType>({
      method: "post",
      url: `${URL}/auth/register`,
      data: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      },
    });
}

export default new Auth();
