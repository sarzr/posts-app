import { IUserPosts } from "./posts";
import { IUser } from "./users.type";

export interface IPagination {
  total?: number;
  skip?: number;
  limit?: number;
}

export interface IUsersPosts {
  post: IUserPosts;
  user: IUser;
  inOneLine?: boolean,
}
