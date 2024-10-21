import React from "react";
import {
  Navigate,
  UNSAFE_ErrorResponseImpl,
  useRouteError,
} from "react-router-dom";

export const ErrorBoundary: React.FC = () => {
  const error = useRouteError();

  if (
    error instanceof UNSAFE_ErrorResponseImpl &&
    (error as UNSAFE_ErrorResponseImpl).status === 404
  ) {
    return <Navigate to={"/404"} />;
  }

  return (
    <div className="mt-24 w-full mx-6">
      <p className="text-xl font-medium">Something went wrong!</p>
      <p className="text-base font-medium text-gray-600 mt-2">{(error as Error).message}</p>
    </div>
  );
};
