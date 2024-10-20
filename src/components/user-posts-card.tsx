import React from "react";
import { IPosts } from "../types/posts.type";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";

export const UsersPostsCard: React.FC<IPosts> = ({
  title,
  body,
  reactions,
  views,
  tags,
  inOneLine = true,
}) => {
  return (
    <div className="shadow-md bg-white rounded-xl w-full sm:w-1/2 py-4 px-6">
      <p className="truncate text-gray-700 capitalize text-lg font-semibold py-2">
        {title}
      </p>
      <p
        className={`text-justify text-sm font-medium text-gray-500 ${
          !inOneLine ? "" : "line-clamp-1"
        }`}
      >
        {!inOneLine ? body : body?.slice(0, 300)}
      </p>
      <div className="flex flex-wrap pt-4 gap-2">
        {tags?.map((tag, index) => (
          <Link key={index} to={`/posts?tag=${tag}`}>
            <div className="bg-slate-200 px-3 py-1 rounded-xl hover:bg-slate-300 cursor-pointer text-xs font-medium">
              {tag}
            </div>
          </Link>
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

export const UserPostsCardSkeleton: React.FC = () => {
  return (
    <div className="shadow-md bg-white rounded-xl w-full sm:w-1/2 py-4 px-6">
      <div className="truncate bg-gray-300 h-3 w-44 rounded-full mt-5"></div>
      <div className="text-justify bg-gray-300 line-clamp-1 h-3 w-full rounded-full mt-4"></div>
      <div className="flex flex-wrap pt-5 gap-2">
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-gray-300 h-3 w-14 rounded-xl"></div>
        ))}
      </div>
      <div className="flex items-center pt-6 gap-x-4">
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
    </div>
  );
};
