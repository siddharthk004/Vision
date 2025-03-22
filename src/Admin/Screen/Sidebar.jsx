import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { BsMicrosoftTeams } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { FcAddDatabase } from "react-icons/fc";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdViewCarousel } from "react-icons/md";
import { GoAlert } from "react-icons/go";
import { IoBagAddSharp } from "react-icons/io5";
import { IoLogoFirefox } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion
import { GoSponsorTiers } from "react-icons/go";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { TbCategoryFilled } from "react-icons/tb";
import { MdAutoDelete } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { IoEarthOutline } from "react-icons/io5";
import { FaUsersLine } from "react-icons/fa6";
import { PiUserGearThin } from "react-icons/pi";
import { FaBan } from "react-icons/fa";
import { FcFaq } from "react-icons/fc";
import { FcPrivacy } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";
import { ImProfile } from "react-icons/im";
import { GiVerticalBanner } from "react-icons/gi";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { CiLink } from "react-icons/ci";
function SideBar() {
  const navigate = useNavigate();
  const [sections, setSections] = useState({
    dashboard: false,
    product: false,
    add: false,
    category: false,
    help: false,
    banner: false,
    about: false,
    comment: false,
    user: false,
    quick: false,
  });

  const toggleSection = (section) => {
    setSections({
      dashboard: false,
      product: false,
      add: false,
      category: false,
      help: false,
      banner: false,
      about: false,
      comment: false,
      user: false,
      quick: false,
      [section]: !sections[section], // Open only the clicked section
    });
  };

  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isQuickOpen, setIsQuickOpen] = useState(false);

  return (
    <div>
      {/* Sidebar */}
      <div className="fixed top-[4vw] left-0 bg-white border-r-[.11vw] border-gray-300 p-[1.2vw] h-[80vw]">
        {/* Dashboard Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("dashboard")}
        >
          <p className="text-gray-500 text-[1vw] mb-[.2vw] font-semibold">
            Dashboard
          </p>
          {sections.dashboard ? (
            <FaChevronUp className="text-gray-600 opacity-75 transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-gray-600 opacity-75 mb-[.1vw] transition-transform duration-300 ease-in-out" />
          )}
        </div>

        {/* Dropdown Items with Smooth Animation */}
        <motion.ul
          className="space-y-2 pl-[.9vw] mt-[.2vw] text-[1vw] mb-[.5vw] font-medium overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            sections.dashboard
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <IoHome className="text-red-600 mr-[.4vw]" /> Home
            </p>
          </Link>
          <Link to="/admin/Team" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <BsMicrosoftTeams className="text-blue-500 mr-[.4vw]" /> Team
            </p>
          </Link>
          <Link to="/admin/Setting" className="sidebar-link">
            <p className=" sidebar-item flex items-center  hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <IoSettingsSharp className="text-teal-700 mr-[.4vw]" /> Setting
            </p>
          </Link>
        </motion.ul>

        {/* Product Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("product")}
        >
          <p className="text-gray-500 text-[1vw] mb-[.2vw] font-semibold">
            Product Manage
          </p>
          {sections.product ? (
            <FaChevronUp className="text-gray-600 opacity-75 transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-gray-600 opacity-75 mb-[.1vw] transition-transform duration-300 ease-in-out" />
          )}
        </div>

        {/* Dropdown Items with Smooth Animation */}
        <motion.ul
          className="space-y-2 pl-[.9vw] mt-[.2vw] text-[1vw] mb-[.5vw] font-medium overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            sections.product
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/admin/Product/add" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <FcAddDatabase className="mr-[.4vw]" /> Add Product
            </p>
          </Link>
          <Link to="/admin/Product/update" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <GrDocumentUpdate className="text-blue-800 mr-[.4vw]" /> Update
              Product
            </p>
          </Link>
          <Link to="/admin/Product/view" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <MdViewCarousel className="text-teal-700 mr-[.4vw]" /> View
              Product
            </p>
          </Link>
          <Link to="/admin/Product/stock" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <GoAlert className="text-red-700 mr-[.4vw] " /> Stock Alert
            </p>
          </Link>
        </motion.ul>

        {/* Add Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("add")}
        >
          <p className="text-gray-500 text-[1vw] mr-[1.5vw] mb-[.2vw] font-semibold">
            Add Manage
          </p>
          {sections.add ? (
            <FaChevronUp className="text-gray-600 opacity-75 transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-gray-600 opacity-75 mb-[.1vw] transition-transform duration-300 ease-in-out" />
          )}
        </div>

        {/* Dropdown Items with Smooth Animation */}
        <motion.ul
          className="space-y-2 pl-[.9vw] mt-[.2vw] text-[1vw] mb-[.5vw] font-medium overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            sections.add
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/admin/AddManagement/HomePageAdd" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <IoBagAddSharp className="text-cyan-600 mr-[.4vw]" /> Homepage Add
            </p>
          </Link>
          <Link to="/admin/AddManagement/Logo" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <IoLogoFirefox className="text-blue-800 mr-[.4vw]" /> Logo
              Management
            </p>
          </Link>
          <Link to="/admin/AddManagement/SponsorsAdd" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <GoSponsorTiers className="text-teal-700 mr-[.4vw]" /> Sponsors
              Add
            </p>
          </Link>
          <Link to="/admin/AddManagement/GrowthAdd" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <AiFillDingtalkCircle className="text-red-700 mr-[.4vw] " />{" "}
              Growth Add
            </p>
          </Link>
        </motion.ul>

        {/* Help Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("help")}
        >
          <p className="text-gray-500 text-[1vw] mr-[1.5vw] mb-[.2vw] font-semibold">
            Help Desk
          </p>
          {sections.help ? (
            <FaChevronUp className="text-gray-600 opacity-75 transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-gray-600 opacity-75 mb-[.1vw] transition-transform duration-300 ease-in-out" />
          )}
        </div>

        {/* Dropdown Items with Smooth Animation */}
        <motion.ul
          className="space-y-2 pl-[.9vw] mt-[.2vw] text-[1vw] mb-[.5vw] font-medium overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            sections.help
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/admin/HelpDesk/OrderHistory" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <FaHistory className="text-cyan-600 mr-[.4vw]" /> Order History
            </p>
          </Link>
          <Link to="/admin/HelpDesk/SupportRequest" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <MdSupportAgent className="text-blue-800 mr-[.4vw]" /> Support
              Request
            </p>
          </Link>
          <Link to="/admin/HelpDesk/OrderManagement" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <MdOutlineBrowserUpdated className="text-blue-800 mr-[.4vw]" /> Order Management
            </p>
          </Link>
        </motion.ul>

        {/* Category Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          <p className="text-gray-500 text-[1vw] mr-[1.5vw] mb-[.2vw] font-semibold">
            Category Manage
          </p>
          {sections.category ? (
            <FaChevronUp className="text-gray-600 opacity-75 transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-gray-600 opacity-75 mb-[.1vw] transition-transform duration-300 ease-in-out" />
          )}
        </div>

        {/* Dropdown Items with Smooth Animation */}
        <motion.ul
          className="space-y-2 pl-[.9vw] mt-[.2vw] text-[1vw] mb-[.5vw] font-medium overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            sections.category
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <TbCategoryFilled className="text-cyan-600 mr-[.4vw]" /> New
              Category
            </p>
          </Link>
          <Link to="/admin/Team" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <GrDocumentUpdate className="text-blue-800 mr-[.4vw]" /> Update
              Category
            </p>
          </Link>
          <Link to="/admin/Team" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <MdAutoDelete className="text-red-600 mr-[.4vw]" /> Delete
              Category
            </p>
          </Link>
        </motion.ul>
        {/* Banner Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("banner")}
        >
          <p className="text-gray-500 text-[1vw] mr-[1.5vw] mb-[.2vw] font-semibold">
            Banner Manage
          </p>
          {sections.banner ? (
            <FaChevronUp className="text-gray-600 opacity-75 transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-gray-600 opacity-75 mb-[.1vw] transition-transform duration-300 ease-in-out" />
          )}
        </div>

        {/* Dropdown Items with Smooth Animation */}
        <motion.ul
          className="space-y-2 pl-[.9vw] mt-[.2vw] text-[1vw] mb-[.5vw] font-medium overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            sections.banner
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <TbCategoryFilled className="text-cyan-600 mr-[.4vw]" />{" "}
              Announcement Banner
            </p>
          </Link>
          <Link to="/admin/Team" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <GrDocumentUpdate className="text-blue-800 mr-[.4vw]" /> Promo
              Banner
            </p>
          </Link>
          <Link to="/admin/Team" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <BsMicrosoftTeams className="text-yellow-600 mr-[.4vw]" /> Add New
              Brand
            </p>
          </Link>
          <Link to="/admin/Team" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <MdAutoDelete className="text-red-600 mr-[.4vw]" /> Delete Brand
            </p>
          </Link>
        </motion.ul>
        {/* About Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("about")}
        >
          <p className="text-gray-500 text-[1vw] mr-[1.5vw] mb-[.2vw] font-semibold">
            About Manage
          </p>
          {sections.about ? (
            <FaChevronUp className="text-gray-600 opacity-75 transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-gray-600 opacity-75 mb-[.1vw] transition-transform duration-300 ease-in-out" />
          )}
        </div>

        {/* Dropdown Items with Smooth Animation */}
        <motion.ul
          className="space-y-2 pl-[.9vw] mt-[.2vw] text-[1vw] mb-[.5vw] font-medium overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            sections.about
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <MdOutlineBrowserUpdated className="text-cyan-600 mr-[.4vw]" />{" "}
              Update About Text
            </p>
          </Link>
          <Link to="/admin/Team" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <IoMdContacts className="text-blue-800 mr-[.4vw]" /> Update
              Contact
            </p>
          </Link>
          <Link to="/admin/Team" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <IoEarthOutline className="text-red-600 mr-[.4vw]" /> Update
              Social Handle
            </p>
          </Link>
          <Link to="/admin/Team" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <PiUserGearThin className="text-orange-800 mr-[.4vw]" /> Update
              Quick
            </p>
          </Link>
        </motion.ul>

        {/* Comment Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("comment")}
        >
          <p className="text-gray-500 text-[1vw] mr-[1.5vw] mb-[.2vw] font-semibold">
            Comment Manage
          </p>
          {sections.comment ? (
            <FaChevronUp className="text-gray-600 opacity-75 transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-gray-600 opacity-75 mb-[.1vw] transition-transform duration-300 ease-in-out" />
          )}
        </div>

        {/* Dropdown Items with Smooth Animation */}
        <motion.ul
          className="space-y-2 pl-[.9vw] mt-[.2vw] text-[1vw] mb-[.5vw] font-medium overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            sections.comment
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <MdOutlineBrowserUpdated className="text-cyan-600 mr-[.4vw]" />{" "}
              View comments
            </p>
          </Link>
        </motion.ul>

        {/* User Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("user")}
        >
          <p className="text-gray-500 text-[1vw] mr-[1.5vw] mb-[.2vw] font-semibold">
            User Manage
          </p>
          {sections.user ? (
            <FaChevronUp className="text-gray-600 opacity-75 transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-gray-600 opacity-75 mb-[.1vw] transition-transform duration-300 ease-in-out" />
          )}
        </div>

        {/* Dropdown Items with Smooth Animation */}
        <motion.ul
          className="space-y-2 pl-[.9vw] mt-[.2vw] text-[1vw] mb-[.5vw] font-medium overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            sections.user
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <FaUsersLine className="text-cyan-600 mr-[.4vw]" /> View All User
            </p>
          </Link>
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <FaBan className="text-violet-600 mr-[.4vw]" /> Ban User
            </p>
          </Link>
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <MdAutoDelete className="text-red-600 mr-[.4vw]" /> Delete User
            </p>
          </Link>
        </motion.ul>

        {/* Quick Link Section */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("quick")}
        >
          <p className="text-gray-500 text-[1vw] mr-[1.5vw] mb-[.2vw] font-semibold">
            Quick Link Manage
          </p>
          {sections.quick ? (
            <FaChevronUp className="text-gray-600 opacity-75 transition-transform duration-300 ease-in-out" />
          ) : (
            <FaChevronDown className="text-gray-600 opacity-75 mb-[.1vw] transition-transform duration-300 ease-in-out" />
          )}
        </div>

        {/* Dropdown Items with Smooth Animation */}
        <motion.ul
          className="space-y-2 pl-[.9vw] mt-[.2vw] text-[1vw] mb-[.5vw] font-medium overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            sections.quick
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <FcFaq className="text-cyan-600 mr-[.4vw]" /> CRUD FAQ
            </p>
          </Link>
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <FcPrivacy className="text-violet-600 mr-[.4vw]" /> Update Privacy
              Policy
            </p>
          </Link>
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <FcOnlineSupport className="text-red-600 mr-[.4vw]" /> Update
              Support
            </p>
          </Link>
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <ImProfile className="text-violet-600 mr-[.4vw]" /> Update Profile
              Header
            </p>
          </Link>
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <GiVerticalBanner className="text-red-600 mr-[.4vw]" /> Update
              Header Banner
            </p>
          </Link>
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <MdOutlineFeaturedVideo className="text-violet-600 mr-[.4vw]" />{" "}
              Update Feature
            </p>
          </Link>
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <FaUsersLine className="text-blue-800 mr-[.4vw]" /> Update Team
            </p>
          </Link>
          <Link to="/admin/home" className="sidebar-link">
            <p className=" sidebar-item flex items-center hover:bg-zinc-200 rounded-[.4vw] pl-[.5vw] pt-[.3vw] pb-[.3vw]">
              <CiLink className="text-red-600 mr-[.4vw]" /> Update Career Link
            </p>
          </Link>
        </motion.ul>
      </div>
    </div>
  );
}

export default SideBar;
