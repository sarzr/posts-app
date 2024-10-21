import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp, IoNotifications } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaRegComments } from "react-icons/fa6";

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const onClickMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-white p-4 border-r min-h-screen shadow-sm z-10 transition-all duration-300 hidden sm:block overflow-hidden h-full ${
        isOpen ? "w-full sm:w-1/4 lg:w-20 xl:w-15" : "w-16"
      }`}
    >
      <div className="flex flex-col items-baseline justify-start gap-5">
        <div className="font-semibold text-lg text-gray-700 my-2 ml-2 w-full flex justify-between">
          {isOpen && "Logo"}
          <div onClick={onClickMenu}>
            <HiMiniBars3BottomRight className="mr-2 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Link
            to={"/"}
            className="flex items-center gap-x-2 font-semibold leading-6 text-gray-600"
            aria-expanded="false"
          >
            <IoHomeSharp />
            {isOpen && "Home"}
          </Link>
          <button
            type="button"
            className="flex items-center gap-x-2 font-semibold leading-6 text-gray-600"
            aria-expanded="false"
          >
            <FaUserCircle />
            {isOpen && "Dashboard"}
          </button>
          <Link
            to={"/users"}
            className="font-semibold leading-6 text-gray-600 flex items-center gap-x-2"
          >
            <FaUsers className="w-5 h-5" />
            {isOpen && "Users"}
          </Link>
          <Link
            to={"/posts"}
            className="font-semibold leading-6 text-gray-600 flex items-center gap-x-2"
          >
            <BsPostcard className="w-4 h-4" />
            {isOpen && "Posts"}
          </Link>
          <button
            type="button"
            className="flex items-center gap-x-2 font-semibold leading-6 text-gray-600"
          >
            <IoNotifications />
            {isOpen && "Notification"}
          </button>
          <button
            type="button"
            className="flex items-center gap-x-2 font-semibold leading-6 text-gray-600"
          >
            <FaRegComments className="w-5 h-5" />
            {isOpen && "Comments"}
          </button>
        </div>
      </div>
    </nav>
  );
};
