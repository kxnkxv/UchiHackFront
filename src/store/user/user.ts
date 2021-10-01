import {makeAutoObservable} from "mobx"

class User {
  user = {
    id: 1,
    firstName: "Артем",
    lastName: "Коньков",
    patronymic: "Вадимович",
    email: "kxnkxv@yandex.ru",
    avatar: "https://sun9-7.userapi.com/impg/PoU3dI-7_5Z_xnTP8de29q0TPoKXzkuF_DE6LQ/_FxvOjcO_Mg.jpg?size=1575x2160&quality=96&sign=dc84797b4baa0ea0ac05e419f3fd6084&type=album",
    phone: '',
    answers: 0,
    questions: 0,
    role: '',
    class: "uni",
    emailNotify: true,
  }

  constructor() {
    makeAutoObservable(this)
  }
}

export default new User()