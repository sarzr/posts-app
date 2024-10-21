import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCommentsList } from "../apis/comments";
import { useParams } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export const PostComments: React.FC = () => {
  const { id } = useParams();

  const getComments = useQuery({
    queryKey: ["get-comments", id],
    queryFn: () => getCommentsList({ postId: Number(id) }),
  });

  return (
    <>
      <p className="text-xl text-gray-800 font-medium mb-3">Comments</p>
      {getComments.data?.comments.map((el) => (
        <div
          key={el.id}
          className="flex justify-between bg-white rounded-xl px-4 py-3 mb-4 shadow-md"
        >
          <div className="flex gap-3">
            <FaUserCircle className="w-7 h-7 text-gray-500 relative top-1" />
            <div>
              <h4 className="text-md text-gray-700 font-medium">
                {el.user.username}
              </h4>
              <p className="text-sm font-semibold text-gray-500 mt-1">
                {el.body}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-1 text-gray-600">
            <IoIosHeartEmpty className="w-4 h-5 text-gray-500" />
            <span className="text-xs">{el.likes}</span>
          </div>
        </div>
      ))}
    </>
  );
};
