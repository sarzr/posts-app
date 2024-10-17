import React from "react";
import { Header } from "../components/header";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className="bg-[#F3F4F6] border-t border-gray-200 min-h-screen">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
