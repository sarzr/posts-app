import { IFetchPostsList, IPosts, IUserPostsList } from "../types/posts.type";
import { postsListsLimit } from "../utils/config";
import { httpClient } from "./client";
import { urls } from "./urls";

type getPostsListType = (_: IFetchPostsList) => Promise<IUserPostsList>;
export const getPostsList: getPostsListType = async (params) => {
  const client = httpClient();
  const url = params.tag
    ? urls.posts.postsListTags(params.tag)
    : urls.posts.list;
  const response = await client.get<IUserPostsList>(url, {
    params: { limit: params.limit || postsListsLimit, skip: params.skip || 0 },
  });
  return response.data;
};

type getPostByIdType = (_: number) => Promise<IPosts>;
export const getPostById: getPostByIdType = async (id) => {
  const client = httpClient();
  const response = await client.get<IPosts>(urls.posts.listId(id));
  return response.data;
};
