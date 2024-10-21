import { IFetchUsersList, IUser, IUsersList } from "../types/users.type";
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

type getUsersListByIdsType = (_: number[]) => Promise<IUser[]>;
export const getUsersListByIds: getUsersListByIdsType = async (ids) => {
  const client = httpClient();
  const response = await Promise.all(
    ids.map((id) => {
      return client.get(urls.users.listId(id));
    })
  );
  const data: IUser[] = [];
  for (let res of response) {
    data.push(res.data);
  }
  return data;
};

type getUserByIdType = (_: number) => Promise<IUser>;
export const getUserById: getUserByIdType = async (id) => {
  const client = httpClient();
  const response = await client.get<IUser>(urls.users.listId(id));
  return response.data;
};
