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
      <div className="mt-12 w-full sm:w-2/3 md:w-1/2">
        {[1, 2, 3].map((index) => (
          <UsersPostsCardSkeleton key={index} />
        ))}
        <div className="text-lg font-semibold text-slate-800 flex gap-2 items-end justify-center mb-6">
          loading...
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-14 w-full sm:w-2/3 md:w-1/2">
      <PostsCard user={usersById.data} post={postsById.data} />
    </div>
  );
};
