import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Abouts() {
  return (
    <div className="bg-green-700 w-full ">
      <div className="gap-10 p-8 text-xl justify-between text-white h-[22vh] w-full flex">
        <div className="w-50 text-xl flex gap-2 flex-col">
          <Link to="/aboutus">About Us</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/support">Support</Link>
          <Link to="/faq">FAQ`S</Link>
        </div>
        <div className="flex items-center ">
          <Link>
            <FaInstagram className="h-[5vh] w-40" />
          </Link>
          <Link>
            <FaFacebook className="h-[5vh] w-40" />{" "}
          </Link>
          <Link>
            <FaSquareTwitter className="h-[5vh] w-40" />
          </Link>
          <Link>
            <FaLinkedin className="h-[5vh] w-40" />
          </Link>
          <Link>
            <FaGithub className="h-[5vh] w-40" />
          </Link>
        </div>
      </div>
      <h1 className="text-xl text-center text-white text-lightbold">
        Copyright © 2025 AgriVision Private Limited
      </h1>
    </div>
  );
}

export default Abouts;
