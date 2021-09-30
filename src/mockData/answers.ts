import {AnswerType} from "../types/AnswerType";
import {users} from "./users";
import {User} from "../types/User";

export const answers: AnswerType[] = [
  {
    id: '111',
    user: users.find(({id}) => id === '111') as User,
    isRightAnswer: false,
    message: 'Это же гуглится по первой ссылке :/',
    createdAt: Date.now(),
    comments: []
  },
  {
    id: '222',
    user: users.find(({id}) => id === '222') as User,
    isRightAnswer: true,
    message: 'Это же гуглится по первой ссылке :/',
    createdAt: Date.now(),
    comments: [{
      user: users.find(({id}) => id === '555') as User,
      id: '555',
      createdAt: Date.now(),
      message: 'Плохой ответ'
    }]
  },
  {
    id: '333',
    user: users.find(({id}) => id === '333') as User,
    isRightAnswer: false,
    message: 'Это же гуглится по первой ссылке :/',
    createdAt: Date.now(),
    comments: []
  },
  {
    id: '444',
    user: users.find(({id}) => id === '444') as User,
    isRightAnswer: false,
    message: 'Это же гуглится по первой ссылке :/',
    createdAt: Date.now(),
    comments: []
  },
]