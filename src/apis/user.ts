import { IUsersList } from "../types/users.type";
import { httpClient } from "./client";
import { urls } from "./urls";

type getUsersListType = () => Promise<IUsersList>;
export const getUsersList: getUsersListType = async () => {
  const client = httpClient();
  const response = await client.get<IUsersList>(urls.users.list);
  return response.data;
};
