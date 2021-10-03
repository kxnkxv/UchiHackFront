import { makeAutoObservable } from "mobx";
import axios from "axios";
import { URL } from "../../constants/API";
import { UserType } from "../../types/UserType";

interface AuthServer {
  data: {
    user: UserType;
    token: object;
  };
}

class Auth {
  isUserAuth = !!window.localStorage.getItem("isUserAuth");
  token = {};

  constructor() {
    makeAutoObservable(this);
  }

  setIsUserAuth(status: boolean) {
    this.isUserAuth = status;
    window.localStorage.setItem("isUserAuth", `${status || ""}`);
  }

  setToken = (token: {}) => {
    this.token = token;
  };

  authLogin = (email: string, password: string) =>
    axios.request<UserType>({
      method: "post",
      url: `${URL}/auth/login`,
      data: {
        email,
        password,
      },
      headers: {},
    });

  authRegister = (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) =>
    axios.request<UserType>({
      method: "post",
      url: `${URL}/auth/register`,
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });
}

export default new Auth();
