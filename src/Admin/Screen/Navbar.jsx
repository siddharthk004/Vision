import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { LuBellRing } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
function Navbar() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate(); // Use navigate from react-router-dom

  useEffect(() => {
    setShowProfileDropdown(false); // Ensure dropdown is closed after login
  }, []);

  const toggleDropdown = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("tok"); // Remove user data
    navigate("/AdminLogin");
  };

  return (
    <div className="bg-white h-[4vw] fixed top-0 left-0 w-screen flex justify-between items-center px-[2vw] py-[1vw] z-[30vw] border-b-[.14vw] ">
      {/* Logo Section */}
      <div className="mt-[1.5vw] text-center mb-[1.2vw]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFs3RH7IdFNLVHHQ_XQo8asDhGCFJYBMh0Hg&s"
          alt="AgriVision Logo"
          className="h-[3vw] mx-auto"
        />
      </div>

      <div className="flex items-center space-x-[.4vw]">
        <img
          src="https://ih1.redbubble.net/image.2309256735.3062/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"
          className="h-[3vw]"
          alt="User Avatar"
        />

        <div className="flex gap-[.6vw]">
          <TiMessages className="text-[1.3vw] opacity-50 mt-[.3vw]" />
          <LuBellRing className="text-[1.3vw] opacity-50 mt-[.3vw]" />
          <div className="flex gap-[.1vw] ml-[.2vw]">
          <CgProfile className="text-[1.6vw] opacity-50" />
            <p className="text-gray-700 font-medium text-[1.1vw]">Admin</p>
            <IoIosArrowDown className="text-[1.3vw] mt-[.3vw] opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
