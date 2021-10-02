import { action, makeAutoObservable } from "mobx";
import { UserType } from "../../types/UserType";

class User {
  // @ts-ignore
  user: UserType = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action setUser = (user: UserType) => {
    this.user = user;
  };
}

export default new User();
