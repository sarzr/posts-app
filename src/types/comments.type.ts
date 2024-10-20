import { IPagination } from "./global.type";

export interface IComments {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}

export interface IFetchCommentsResDto {
  comments: IComments[];
}

export interface IFetchCommentsReqDto extends IPagination {
  postId: number;
}
