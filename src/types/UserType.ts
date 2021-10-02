export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  patronymic?: string;
  email: string;
  avatar?: string;
  phone?: string;
  answers?: number;
  questions?: number;
  role?: string;
  education?: string;
  emailNotify?: boolean;
  balance?: number;
}
