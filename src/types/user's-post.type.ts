export interface IUserPosts {
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
  posts: IUserPosts[];
}
