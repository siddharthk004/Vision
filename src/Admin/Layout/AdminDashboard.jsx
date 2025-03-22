import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Screen/Navbar";
import SideBar from "../Screen/Sidebar";

function AdminDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen absolute top-0 w-[100vw]">
      {/* Sidebar */}
      <Navbar />    
      <SideBar />

      {/* Main Content */}
      <div className="flex-grow p-4 min-h-screen ml-[222px]">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
