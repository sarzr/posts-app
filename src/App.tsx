import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { UsersList } from "./pages/users-list";
import { ErrorBoundary } from "./components/errorBoundary";
import { NotFound } from "./pages/404";
import { Posts } from "./pages/posts";
import { UserPosts } from "./pages/users-posts";
import { PostsInfo } from "./pages/postsInfo";
import { PostComments } from "./components/post-comments";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/users",
        element: <UsersList />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/users/:id/posts",
        element: <UserPosts />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/posts",
        element: <Posts />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/posts-info/:id",
        element: <PostsInfo />,
        children: [
          {
            path: "comments",
            element: <PostComments />,
            errorElement: <ErrorBoundary />,
          },
        ],
        errorElement: <ErrorBoundary />,
      },
      {
        path:"/posts/search",
        element: <Posts />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
