export const urls = {
  users: {
    list: "/users",
    postListId: (id: number) => `/users/${id}/posts`,
    listId: (id: number) => `/users/${id}`,
  },
  posts: {
    list: "/posts",
    postsListTags: (tag: string) => `/posts/tag/${tag}`,
    listId: (id: number) => `/posts/${id}`,
    postsListSearch: () => "/posts/search",
  },
  comments: {
    byPostId: (id: number) => `/comments/post/${id}`,
  },
};
