import { UserType } from "./UserType";
import { Moment } from "moment";

export interface QuestionType {
  id: string;
  title: string;
  description: string;
  theme: string;
  subTheme: string;
  createdAt: Moment;
  user: UserType;
  coast: number;
  status: string;
  time: number;
  urgently: boolean;
}
