import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { getPostById } from "../apis/posts";
import { getUserById } from "../apis/user";
import { PostsCard, UsersPostsCardSkeleton } from "../components/posts-card";
import { Spinner } from "../components/spinner";
import { AxiosError } from "axios";

export const PostsInfo: React.FC = () => {
  const { id } = useParams();
  const validId = !isNaN(Number(id));

  const postsById = useQuery({
    queryKey: ["get-post-byId", id],
    queryFn: () => getPostById(Number(id)),
    enabled: validId,
  });

  const usersById = useQuery({
    queryKey: ["get-user-byId", postsById.data?.userId],
    queryFn: () => getUserById(Number(postsById.data?.userId)),
    enabled: postsById.isSuccess,
  });

  if (
    !validId ||
    (postsById.error as AxiosError)?.status === 404 ||
    (usersById.error as AxiosError)?.status === 404
  ) {
    return <Navigate to="/404" />;
  }
  if (!usersById.data || !postsById.data) {
    return (
      <div className="mt-24 w-full md:w-2/3 xl:w-1/2 mx-5 lg:mx-0">
        {[1, 2, 3].map((index) => (
          <UsersPostsCardSkeleton key={index} />
        ))}
        <div className="text-base font-semibold text-slate-800 flex gap-1 items-end justify-center mb-6">
          loading
          <Spinner className="w-4 h-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-24 w-full md:w-2/3 xl:w-1/2 mx-5 lg:mx-0">
      <PostsCard
        user={usersById.data}
        post={postsById.data}
        inOneLine={false}
        hasComment={true}
      />
    </div>
  );
};
