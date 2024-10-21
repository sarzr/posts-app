import React from "react";
import { IUsersPosts } from "../types/global.type";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";

export const PostsCard: React.FC<IUsersPosts> = ({
  user,
  post,
  inOneLine = true,
  hasComment = false,
}) => {
  const location = useLocation();

  return (
    <>
      <div className="shadow-md bg-white rounded-xl w-full lg:w-90 py-3 px-4 mb-6">
        <div className="flex items-center gap-3">
          <img
            src={user.image}
            alt={user.username}
            className="w-12 h-12 rounded-full"
          />
          <div className="overflow-hidden">
            <p className="text-lg font-semibold text-gray-700 capitalize truncate">
              {user.username}
            </p>
            <p className="text-xs font-semibold text-gray-500 truncate">
              {user.email}
            </p>
          </div>
        </div>
        <p className="truncate text-gray-700 capitalize text-lg font-semibold pt-3 pb-1">
          {post.title}
        </p>
        <p
          className={`text-justify text-sm font-medium text-gray-500 ${
            !inOneLine ? "" : "line-clamp-1"
          }`}
        >
          {!inOneLine ? post.body : post.body?.slice(0, 90)}
        </p>
        <div className="flex flex-wrap pt-4 gap-2">
          {post.tags?.map((tag, index) => {
            return (
              <Link key={index} to={`/posts?tag=${tag}`}>
                <div className="bg-slate-200 px-2 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
                  {tag}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-between items-end mb-2">
          <div className="flex pt-4 gap-x-4">
            <div className="flex items-center gap-x-1 text-gray-600">
              <BiLike className="w-5 h-5" />
              <span className="text-xs">{post.reactions?.likes}</span>
            </div>
            <div className="flex items-center gap-x-1 text-gray-600">
              <BiDislike className="w-5 h-5" />
              <span className="text-xs">{post.reactions?.dislikes}</span>
            </div>
            <div className="flex items-center gap-x-1 text-gray-600">
              <IoMdEye className="w-5 h-5" />
              <span className="text-xs">{post.views}</span>
            </div>
          </div>
          <div className="flex gap-3 items-center relative top-1">
            {!location.pathname.includes("comments") && hasComment && (
              <Link to={`comments`}>
                <div className="text-gray-600 flex gap-x-2">
                  <span className="text-xs text-gray-800">comments</span>
                  <FaRegComment />
                </div>
              </Link>
            )}
            <FiBookmark className="text-gray-600" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </>
  );
};

export const UsersPostsCardSkeleton: React.FC = () => {
  return (
    <div className="shadow-md bg-white rounded-xl w-full py-4 px-6 mb-6">
      <div className="flex items-center gap-x-4">
        <div className="h-11 w-11 rounded-full bg-gray-300"></div>
        <div>
          <div className="bg-gray-300 rounded-lg w-28 h-3"></div>
          <div className="bg-gray-300 rounded-lg w-44 h-3 mt-3"></div>
        </div>
      </div>
      <div className="truncate bg-gray-300 h-3 w-72 rounded-full mt-5"></div>
      <div className="text-justify bg-gray-300 line-clamp-1 h-3 w-full rounded-full mt-3"></div>
      <div className="flex flex-wrap pt-5 gap-2">
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-gray-300 h-3 w-14 rounded-xl"></div>
        ))}
      </div>
      <div className="flex items-end justify-between">
        <div className="flex items-center pt-5 gap-x-4">
          <div className="flex items-center gap-x-1 text-gray-600">
            <BiLike className="w-5 h-5" />
            <span className="bg-gray-300 h-3 w-8 rounded-xl"></span>
          </div>
          <div className="flex items-center gap-x-1 text-gray-600">
            <BiDislike className="w-5 h-5" />
            <span className="bg-gray-300 h-3 w-8 rounded-xl"></span>
          </div>
          <div className="flex items-center gap-x-1 text-gray-600">
            <IoMdEye className="w-5 h-5 text-gray-500" />
            <span className="bg-gray-300 h-3 w-8 rounded-xl"></span>
          </div>
        </div>
        <div className="flex gap-3 items-center relative top-1">
          <FiBookmark className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};
