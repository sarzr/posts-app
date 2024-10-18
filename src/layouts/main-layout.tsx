import React from "react";
import { Header } from "../components/header";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 border-t border-gray-200 min-h-screen">
        <Outlet />
      </div>
    </>
  );
};
