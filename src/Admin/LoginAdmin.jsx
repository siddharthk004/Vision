import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../Axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the Toastify CSS!
import MainNavbar from "../components/Home/MainNavbar";

function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Update handleSubmit to be async
  const handleSubmit = async (e) => {
    navigate("/admin/home");

    e.preventDefault();

    if (username === "" || password === "") {
      toast.error("Please enter both username and password", {
        autoClose: 2000,
      });
      return;
    }

    try {
      const response = await Axios().post("/user/login", {
        username,
        password,
      });

      if (response.status === 200) {
        // Save email in localStorage (assuming API response includes an email field)
        localStorage.setItem("token", "admin");

        // Navigate to another page (e.g., Home or Profile)
        navigate("/");
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <MainNavbar />
      <div className="pt-[10vw] pl-[35vw] m-auto">
        <div className="bg-zinc-100 w-[30vw] border-[.1vw] border-gray-300 rounded-[1vw]">
          <h1 className="text-[2vw] font-bold text-center mt-[1vw]">Admin Login</h1>

          <form onSubmit={handleSubmit}>
            <p className="text-[1.4vw] mt-[1vw] flex font-semibold ml-[2vw]">
              Username <p className="text-red-700">*</p>
            </p>
            <input
              type="text"
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-[1.2vw] w-[25vw] ml-[3vw] px-[.6vw] py-[.6vw] mt-[1vw] border-[.1vw] border-gray-300 rounded-[.6vw] focus:outline-none focus:ring focus:ring-blue-200"
            />
            {/* Password Label */}
            <p className="text-[1.4vw] mt-[1vw] flex font-semibold ml-[2vw]">
              Password <span className="text-red-700 ml-1">*</span>
            </p>

            {/* Password Input with Show/Hide Button */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              className="text-[1.2vw] w-[25vw] ml-[3vw] px-[.6vw] py-[.6vw] mt-[1vw] border-[.1vw] border-gray-300 rounded-[.6vw] focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                type="button"
                className="absolute right-10 top-[2.5vw] opacity-50 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              className="hover:bg-green-700 bg-green-600 h-[3vw] w-[8vw] ml-[11vw] mt-[1vw] rounded-[1vw] text-[1.2vw] font-bold text-white"
            >
              Submit
            </button>
          </form>

          <p className="text-[1.2vw] m-[1vw] ml-[7vw]">
            Login As User
            <Link to="/signin" className="text-[1.2vw] ml-[.3vw] underline">
              SignIn
            </Link>
          </p>
        </div>
      </div>

      {/* ToastContainer for showing toasts */}
      <ToastContainer />
    </div>
  );
}

export default LoginAdmin;
