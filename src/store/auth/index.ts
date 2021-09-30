import {action, makeAutoObservable} from "mobx"

class Auth {
  constructor() {
    makeAutoObservable(this)
  }

  isUserAuth = !!window.localStorage.getItem('isUserAuth');

  @action setIsUserAuth(status: boolean){
    this.isUserAuth = status;
    window.localStorage.setItem('isUserAuth', `${status || ''}`);
  }
}

export default new Auth()