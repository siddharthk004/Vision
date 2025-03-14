import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from '../Axios';
import Home from '../components/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Don't forget to import the Toastify CSS!

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Update handleSubmit to be async
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
        toast.error('Please enter both username and password', { autoClose: 2000 });
        return;
    }

    try {
        const response = await Axios().post("/user/login", { username, password });

        if (response.status === 200) {
            // Save email in localStorage (assuming API response includes an email field)
            localStorage.setItem('email', response.data); 


            // Navigate to another page (e.g., Home or Profile)
            navigate('/');
        } else {
            toast.error('Invalid username or password');
        }
    } catch (error) {
        console.error('Error during login:', error);
        toast.error('Something went wrong. Please try again.');
    }
};


  return (
    <div>
      <Home />
      <div className="bg-green-300 w-full h-[82vh] pt-40 pl-[80vh] m-auto bg-gradient-to-l from-green-300 via-white to-orange-300">
        <div className="bg-blue-100 h-[80%] w-[40vh] border-2 border-gray-300 rounded-3xl shadow-2xl shadow-zinc-600">
          <h1 className="text-4xl font-bold text-center mt-3">Login</h1>

          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-semibold mt-10 ml-4">Username</h1>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-[30vh] ml-10 px-5 py-2 mt-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />

            <h1 className="text-2xl font-semibold mt-10 ml-4">Password</h1>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[30vh] ml-10 px-5 py-2 mt-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />

            <button
              type="submit"
              className="hover:bg-green-700 hover:text-white bg-green-600 h-14 w-40 m-8 ml-[12vh] rounded-3xl text-xl font-bold text-zinc-700"
            >
              Submit
            </button>
          </form>

          <h1 className="ml-10">
            or Sign Up using
            <Link to="/signup" className="text-xl ml-6 underline">
              Signup
            </Link>
          </h1>
        </div>
      </div>

      {/* ToastContainer for showing toasts */}
      <ToastContainer />
    </div>
  );
}

export default Login;
