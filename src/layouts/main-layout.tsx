import React from "react";
import { Header } from "../components/header";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-[#ebebf8] border-t border-gray-200 min-h-screen w-full flex justify-center px-5 md:px-0">
        <Outlet />
      </div>
    </>
  );
};
