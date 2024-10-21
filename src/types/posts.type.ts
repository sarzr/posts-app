import { IPagination } from "./global.type";

export interface IPosts {
  id?: number;
  title?: string;
  body?: string;
  tags?: string[];
  reactions?: {
    likes: number;
    dislikes: number;
  };
  views?: number;
  userId?: number;
  inOneLine?: boolean;
}
export interface IUserPostsList {
  posts: IPosts[];
}

export interface IFetchPostsList extends IPagination {
  params?: string;
  tag?: string;
  q?: string;
}
