import React from "react";
import { Header } from "../components/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Sidebar } from "../components/sideBar";

export const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow overflow-y-auto w-full sm:w-3/4">
        <Header />
        <div className="bg-GrayL border-t border-gray-200 w-full flex flex-grow justify-center px-5 md:px-0">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
