import {User} from "./User";

export interface Question {
  id: string;
  title: string;
  description: string;
  theme: string;
  subTheme: string;
  createdAt: number;
  user: User;
  coast: number;
  status: string;
  time: number;
  urgently: boolean;
}