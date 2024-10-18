import { IUserPostsList } from "../types/user's-post.type";
import { httpClient } from "./client";
import { urls } from "./urls";

type getUserPostsType = (_: number) => Promise<IUserPostsList>;
export const getUserPosts: getUserPostsType = async (id) => {
  const client = httpClient();
  const response = await client.get<IUserPostsList>(urls.users.postList(id));
  return response.data;
};
