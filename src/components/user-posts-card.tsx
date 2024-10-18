import React from "react";
import { IUserPosts } from "../types/user's-post.type";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";

export const UserPostsCard: React.FC<IUserPosts> = ({
  title,
  body,
  reactions,
  views,
  tags,
  inOneLine = false,
}) => {
  return (
    <div className="shadow-md bg-white rounded-xl w-full sm:w-1/2 py-4 px-6">
      <p className="truncate text-gray-700 capitalize text-xl font-semibold pt-3 pb-3">
        {title}
      </p>
      <p className={`text-justify text-sm font-medium text-gray-500 ${inOneLine ? "" : "line-clamp-1"}`}>
        {inOneLine ? body : body?.slice(0, 300)}
      </p>
      <div className="flex flex-wrap pt-4 gap-2">
        {tags?.map((tag, index) => (
          <div
            key={index}
            className="bg-slate-200 px-3 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="flex items-center pt-5 gap-x-4">
        <div className="flex items-center gap-x-1 text-gray-600">
          <BiLike className="w-5 h-5" />
          <span className="text-xs">{reactions?.likes}</span>
        </div>
        <div className="flex items-center gap-x-1 text-gray-600">
          <BiDislike className="w-5 h-5" />
          <span className="text-xs">{reactions?.dislikes}</span>
        </div>
        <div className="flex items-center gap-x-1 text-gray-600">
          <IoMdEye className="w-5 h-5 text-gray-500" />
          <span className="text-xs">{views}</span>
        </div>
      </div>
    </div>
  );
};
