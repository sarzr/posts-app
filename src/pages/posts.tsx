import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostsList } from "../apis/posts";
import { postsListsLimit } from "../utils/config";
import { Link, useSearchParams } from "react-router-dom";
import { getUsersListByIds } from "../apis/user";
import { IUsersPosts } from "../types/global.type";
import { PostsCard, UsersPostsCardSkeleton } from "../components/posts-card";

export const Posts: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  const [data, setData] = React.useState<IUsersPosts[]>([]);

  const [searchParams] = useSearchParams();

  const getPosts = useQuery({
    queryKey: ["get-all-posts", page, searchParams.get("tag")],
    queryFn: () =>
      getPostsList({
        skip: page * postsListsLimit - postsListsLimit,
        tag: searchParams.get("tag") || undefined,
      }),
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const getUsers = useQuery({
    queryKey: [
      "get-users-list",
      (getPosts.data?.posts || []).map((el) => String(el.userId)).join(""),
    ],
    queryFn: () =>
      getUsersListByIds(
        (getPosts.data?.posts || []).map((el) => Number(el.userId))
      ),
    retry: 1,
    enabled: !!getPosts.data?.posts.length,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setData([]);
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    if (!getPosts.data && !getUsers.data) return;
    if (!getPosts.isSuccess && !getUsers.isSuccess) return;

    const newData: IUsersPosts[] = [];
    for (const post of getPosts.data?.posts || []) {
      const user = getUsers.data?.find(
        (el) => Number(el.id) === Number(post.userId)
      );
      if (user) {
        newData.push({ user, post });
      }
    }
    setData((prevData) => [...prevData, ...newData]);
  }, [getPosts.data, getUsers.data, getPosts.isSuccess, getUsers.isSuccess]);

  return (
    <div className="mt-24 w-full md:w-2/3 xl:w-1/2">
      <h5 className="text-slate-800 text-2xl font-semibold mb-4">Posts List</h5>
      {data.map((el, index) => (
        <Link key={index} to={`/posts-info/${el.post.id}`}>
          <PostsCard user={el.user} post={el.post} />
        </Link>
      ))}
      {getUsers.isLoading &&
        [1, 2, 3, 4, 5].map((index) => <UsersPostsCardSkeleton key={index} />)}
      <button
        className="border-none outline-none flex justify-center w-full text-gray-600 font-semibold text-sm mt-4 mb-6 cursor-pointer disabled:cursor-auto"
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={getUsers.isError || getUsers.isFetching}
      >
        {getUsers.isLoading || getPosts.isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};
