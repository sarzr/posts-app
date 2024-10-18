import { IPagination } from "./global.type";

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  birthDate?: string;
  image: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  hair?: {
    color: string;
    type: string;
  };
  country?: string;
  role?: string;
}
export interface IUsersList {
  users: IUser[];
}
export interface IFetchUsersList extends IPagination {
  page?: string;
  params?: string;
}
