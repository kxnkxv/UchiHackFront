import {makeAutoObservable} from "mobx"

class User {
  user = {
    name: "Артем Коньков",
    email: "kxnkxv@yandex.ru",
    phone: "89268448038",
    avatar: "https://sun9-7.userapi.com/impg/PoU3dI-7_5Z_xnTP8de29q0TPoKXzkuF_DE6LQ/_FxvOjcO_Mg.jpg?size=1575x2160&quality=96&sign=dc84797b4baa0ea0ac05e419f3fd6084&type=album"
  }

  constructor() {
    makeAutoObservable(this)
  }
}

export default new User()