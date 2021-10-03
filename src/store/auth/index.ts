import { makeAutoObservable } from "mobx";
import axios from "axios";
import { URL } from "../../constants/API";
import { UserType } from "../../types/UserType";
import { getStorageItem, setStorageItem } from "../../utils/localStorage";

interface AuthServer {
  data: {
    user: UserType;
    token: object;
  };
}

class Auth {
  isUserAuth = !!getStorageItem("isUserAuth");
  token: { expiresIn: number; accessToken: string } = getStorageItem(
    "token"
  ) || { expiresIn: 0, accessToken: "" };

  constructor() {
    makeAutoObservable(this);
  }

  setIsUserAuth(status: boolean) {
    this.isUserAuth = status;
    setStorageItem("isUserAuth", status);
  }

  setToken = (token: { expiresIn: number; accessToken: string }) => {
    this.token = token;
    setStorageItem("token", token);
  };

  authLogin = (email: string, password: string) =>
    axios.request<UserType>({
      method: "post",
      url: `${URL}/auth/login`,
      data: {
        email,
        password,
      },
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
