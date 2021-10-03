import { makeAutoObservable } from "mobx";
import { UserType } from "../../types/UserType";
import { getStorageItem, setStorageItem } from "../../utils/localStorage";

class User {
  // @ts-ignore
  user: UserType = getStorageItem("user") || "";

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: UserType) => {
    this.user = user;
    setStorageItem("user", user);
  };
}

export default new User();
