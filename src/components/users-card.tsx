import React from "react";
import { IUser } from "../types/users.type";
import { Link } from "react-router-dom";

export const UsersCard: React.FC<IUser> = ({
  id,
  image,
  firstName,
  lastName,
  email,
  username,
  role,
}) => {
  return (
    <Link to={`/users/${id}/posts`}>
      <div className="flex items-center justify-between py-5 border-b border-slate-200">
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
    </Link>
  );
};

export const UserCardSkeleton: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-5 last:pb-0">
      <div className="flex items-center gap-x-5">
        <div className="h-11 w-11 rounded-full bg-gray-300"></div>
        <div>
          <div className="bg-gray-300 rounded-lg w-36 h-3"></div>
          <div className="bg-gray-300 rounded-lg w-64 h-3 mt-3"></div>
        </div>
      </div>
      <div className="bg-gray-300 rounded-lg w-12 h-3"></div>
    </div>
  );
};
