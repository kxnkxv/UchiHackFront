import {User} from "./User";
import {Moment} from "moment";

export interface Question {
  id: string;
  title: string;
  description: string;
  theme: string;
  subTheme: string;
  createdAt: Moment;
  user: User;
  coast: number;
  status: string;
  time: number;
  urgently: boolean;
}