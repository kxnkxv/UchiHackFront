import { action, makeAutoObservable } from "mobx";

class Auth {
  isUserAuth = !!window.localStorage.getItem("isUserAuth");

  constructor() {
    makeAutoObservable(this);
  }

  @action setIsUserAuth(status: boolean) {
    this.isUserAuth = status;
    window.localStorage.setItem("isUserAuth", `${status || ""}`);
  }
}

export default new Auth();
