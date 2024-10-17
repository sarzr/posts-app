import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsersList } from "../apis/user";
import { UsersCard } from "../components/users-card";

export const UsersList: React.FC = () => {
  const getUsers = useQuery({ queryKey: ["get-users-list"], queryFn: getUsersList });

  return (
    <div className="flex justify-center mt-10">
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg mx-3 w-full sm:w-2/3">
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-slate-800 text-2xl font-semibold mt-2">Users List</h5>
          </div>
          <div className="divide-y divide-slate-200">
            {getUsers.data?.users.map((el) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};
