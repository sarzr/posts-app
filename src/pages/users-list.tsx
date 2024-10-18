import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsersList } from "../apis/user";
import { UserCardSkeleton, UsersCard } from "../components/users-card";
import { usersListsLimit } from "../utils/config";
import { IUser } from "../types/users.type";

export const UsersList: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  const [users, setUsers] = React.useState<IUser[]>([]);

  const getUsers = useQuery({
    queryKey: ["get-users-list", page],
    queryFn: () =>
      getUsersList({
        limit: usersListsLimit,
        skip: page * usersListsLimit - usersListsLimit,
      }),
    retry: 1,
  });
  React.useEffect(() => {
    if (getUsers.isSuccess && getUsers.data) {
      setUsers((prevUsers) => [...prevUsers, ...getUsers.data.users]);
    }
  }, [getUsers.isSuccess, getUsers.data]);

  return (
    <div className="flex justify-center mt-10">
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg mx-3 w-full sm:w-2/3">
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-slate-800 text-2xl font-semibold mt-2">
              Users List
            </h5>
          </div>
          <div className="divide-y divide-slate-200">
            {users.map((el) => (
              <UsersCard
                key={el.id}
                image={el.image}
                username={el.username}
                lastName={el.lastName}
                firstName={el.firstName}
                email={el.email}
                role={el.role}
              />
            ))}
            {getUsers.isLoading &&
              [1, 2, 3, 4, 5].map((index) => <UserCardSkeleton key={index} />)}
            <button
              className="border-none flex justify-center w-full text-gray-600 font-semibold text-sm mt-3 mb-1 cursor-pointer disabled:cursor-auto"
              onClick={() => setPage((prevPage) => prevPage + 1)}
              disabled={getUsers.isError || getUsers.isFetching}
            >
              {getUsers.isPending ? "Loading..." : "Load More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
