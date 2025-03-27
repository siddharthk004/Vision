import React from "react";
import Navbar from "../Screen/Navbar";
import { IoIosHome } from "react-icons/io";

function Setting() {
  return (
    <div className="overflow-hidden bg-gray-100 p-[.5vw]">
      <Navbar />
      {/* Breadcrumb */}
      <div className="mt-[3vw]">
        <div className="flex items-center space-x-2 text-gray-700">
        <IoIosHome className="w-[1.3vw] h-[1.3vw]"/>
          <h6>Dashboard</h6>
          <h6>/</h6>
          <h6 className="text-sm">Setting</h6>
        </div>
      </div>
    </div>
  );
}

export default Setting;
