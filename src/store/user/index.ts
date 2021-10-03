import { makeAutoObservable } from "mobx";
import { UserType } from "../../types/UserType";

class User {
  // @ts-ignore
  user: UserType = null;

  constructor() {
    makeAutoObservable(this);
  }

  getLocaleUserId = () => {
    return this.user.id;
  };

  setUser = (user: UserType) => {
    this.user = user;
  };
}

export default new User();
