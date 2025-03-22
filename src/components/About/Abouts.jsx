import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

function Abouts() {
  return (
    <div className="bg-slate-600 ">
    <div className="pt-[1vw] text-white w-full flex ">
      <div className="w-1/2 ml-[3vw] text-justify text-[1.05vw] ">
        <img
          className="h-[3vw] rounded-[.3vw]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFs3RH7IdFNLVHHQ_XQo8asDhGCFJYBMh0Hg&s"
          alt=""
        />
        <p className="mt-[.4vw]">
          AgriVision is a cutting-edge AgriTech platform dedicated to
          transforming the agricultural sector by empowering farmers with
          technology-driven solutions. Our mission is to enhance farm
          productivity, optimize resource utilization, and improve the overall
          livelihoods of farmers through innovation and data-driven insights.
        </p>
        <p>
          AgriVision integrates advanced technologies such as AI-powered crop
          disease detection, smart farming analytics, and an efficient
          marketplace for agricultural products. By bridging the gap between
          farmers and modern agricultural solutions, we aim to boost crop
          yields, reduce input costs, and ensure sustainable farming practices.
        </p>
        <p>
          With a deep understanding of the agricultural ecosystem, AgriVision is
          committed to revolutionizing farming by providing accessible,
          reliable, and technology-driven support—helping farmers across India
          achieve higher efficiency, profitability, and long-term success. 🚜🌱
        </p>
      <div className="flex mt-[4vw] ml-[2vw]">
        <Link>
          <FaInstagram className="h-[2.5vw] w-[5vw] text-pink-500"/>
        </Link>
        <Link>
          <FaFacebook className="h-[2.5vw] w-[5vw] text-blue-600" />
        </Link>
        <Link>
          <FaXTwitter className="h-[2.5vw] w-[5vw] text-zinc-900" />
        </Link>
        <Link>
          <FaLinkedin className="h-[2.5vw] w-[5vw] text-blue-600" />
        </Link>
        <Link>
          <FaGithub className="h-[2.5vw] w-[5vw] text-zinc-900" /> 
        </Link>
      </div>
      </div>

      <div className="w-1/2 flex">
        <div className="w-1/2 mt-[1vw] text-[1.1vw] flex ml-[10vw] mt-[3vw] gap-[.5vw] flex-col">
          <p className="text-green-600 text-[1.3vw]">Quick Links</p>
          <Link to="/aboutus">About Us</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/support">Support</Link>
          <Link to="/faq">FAQ`S</Link>
        </div>
        <div className="w-1/2 mt-[1vw] text-[1.1vw] flex mt-[3vw] gap-[.5vw] flex-col">
          <p className="text-green-600 text-[1.3vw] ">Contact us</p>
          <p className="flex"><FaWhatsapp className="mt-[.3vw] mr-[.4vw]"/>Missed Call to Order :</p>
          <p className="bg-yellow-700 rounded-[.5vw] p-[.3vw] w-[9.3vw]">+91 9552450050</p>
          <p className="flex"><MdCall className="mt-[.3vw] mr-[.4vw]"/>Whatsapp us :</p>
          <p className="bg-yellow-700 rounded-[.5vw] p-[.3vw] w-[9.3vw]">+91 8766856421</p>
          <p className="flex "><MdOutlineEmail className="mt-[.3vw] mr-[.4vw]"/>Mail us :</p>
          <p className="bg-yellow-700 rounded-[.5vw] p-[.5vw] w-[14.5vw]">www.Agrivision@gmail.com</p>
        </div>
      </div>
      </div>
      <hr className="w-[90vw] m-[3vw] ml-[4vw]"/>
      <p className="text-[1vw] text-center text-lightbold text-white pb-[1vw]">
        Copyright © 2025 Pray Tech 🙏 Private Limited
      </p>
    </div>
  );
}

export default Abouts;
