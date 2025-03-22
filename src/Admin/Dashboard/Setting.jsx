import React from "react";
import Navbar from "../Screen/Navbar";
import { IoIosHome } from "react-icons/io";

function Setting() {
  return (
    <div clssName="overflow-hidden bg-gray-100 p-[1vw]">
      <Navbar />
      {/* Main Content */}
      <div className="">
        <div className="flex items-center gap-2 ml-[1vw] mt-[3vw] text-gray-700">
        <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
          <h6 className="text-sm">Dashboard</h6>
          <h6 className="text-sm">/</h6>
          <h6 className="text-sm font-semibold">Setting</h6>
        </div>
      </div>
    </div>
  );
}

export default Setting;
