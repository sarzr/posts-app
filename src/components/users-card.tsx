import React from "react";
import { IUser } from "../types/users.type";

export const UsersCard: React.FC<IUser> = ({
  image,
  firstName,
  lastName,
  email,
  username,
  role,
}) => {
  return (
    <div className="flex items-center justify-between py-5 last:pb-0">
      <div className="flex items-center gap-x-5">
        <img
          src={image}
          alt={username}
          className="relative inline-block h-11 w-11 rounded-full object-cover object-center"
        />
        <div>
          <h6 className="text-slate-800 font-semibold text-lg">
            {firstName} {lastName}
          </h6>
          <p className="text-slate-600 text-sm mt-1">{email}</p>
        </div>
      </div>
      <h6 className="text-slate-600 text-sm">{role}</h6>
    </div>
  );
};
