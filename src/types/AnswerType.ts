import {User} from "./User";
import {Moment} from "moment";

export interface AnswerType {
  user: User;
  id: string;
  isRightAnswer: boolean;
  message: string;
  createdAt: Moment;
  comments: CommentType[];
}

export interface CommentType {
  user: User;
  id: string;
  createdAt: Moment;
  message: string;
}