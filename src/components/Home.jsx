import React from "react";
import MainNavbar from "./Home/MainNavbar";
import Navbar from "./Home/Navbar";

function Home() {
  return (
    <div>
      <MainNavbar />
      <Navbar />
      <hr className="h-[.1vw] opacity-50 bg-zinc-600" />
    </div>
  );
}

export default Home;
