import { IUserPostsList } from "../types/posts";
import { httpClient } from "./client";
import { urls } from "./urls";

type getUserPostsType = (_: number) => Promise<IUserPostsList>;
export const getUserPosts: getUserPostsType = async (id) => {
  const client = httpClient();
  const response = await client.get<IUserPostsList>(urls.users.postListId(id));
  return response.data;
};
