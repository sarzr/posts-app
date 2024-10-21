import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../apis/user-posts";
import { useParams } from "react-router-dom";
import {
  UserPostsCardSkeleton,
  UsersPostsCard,
} from "../components/user-posts-card";

export const UserPosts: React.FC = () => {
  const { id } = useParams();
  const validId = !isNaN(Number(id));

  const fetchingUserPosts = useQuery({
    queryKey: ["get-user-posts", id],
    queryFn: () => getUserPosts(Number(id)),
    enabled: validId,
  });
  return (
    <div className="flex flex-col items-center mt-24 mb-8 gap-8 w-full md:w-2/3 xl:w-1/2">
      <p className="text-2xl font-semibold w-full text-left">
        User Posts
      </p>
      {fetchingUserPosts.data?.posts.map((el) => (
        <UsersPostsCard
          key={el.id}
          title={el.title}
          body={el.body}
          reactions={el.reactions}
          views={el.views}
          tags={el.tags}
          inOneLine={false}
        />
      ))}
      {fetchingUserPosts.isLoading &&
        [1, 2, 3, 4].map((index) => <UserPostsCardSkeleton key={index} />)}
    </div>
  );
};
