import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { UsersList } from "./pages/users-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/users",
        element: <UsersList />,
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
