import { IFetchUsersList, IUsersList } from "../types/users.type";
import { httpClient } from "./client";
import { urls } from "./urls";

type getUsersListType = (_: IFetchUsersList) => Promise<IUsersList>;
export const getUsersList: getUsersListType = async (params) => {
  const client = httpClient();
  const response = await client.get<IUsersList>(urls.users.list, {
    params: { limit: params.limit, skip: params.skip },
  });
  return response.data;
};
