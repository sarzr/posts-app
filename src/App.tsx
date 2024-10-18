import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { UsersList } from "./pages/users-list";
import { ErrorBoundary } from "./components/errorBoundary";
import { NotFound } from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorBoundary />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/users",
        element: <UsersList />,
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
