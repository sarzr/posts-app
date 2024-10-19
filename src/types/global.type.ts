import { IPosts } from "./posts.type";
import { IUser } from "./users.type";

export interface IPagination {
  total?: number;
  skip?: number;
  limit?: number;
}

export interface IUsersPosts {
  post: IPosts;
  user: IUser;
  inOneLine?: boolean;
}
