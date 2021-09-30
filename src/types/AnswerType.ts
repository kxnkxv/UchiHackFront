import {User} from "./User";

export interface AnswerType {
  user: User;
  id: string;
  isRightAnswer: boolean;
  message: string;
  createdAt: number;
  comments: CommentType[];
}

export interface CommentType {
  user: User;
  id: string;
  createdAt: number;
  message: string;
}