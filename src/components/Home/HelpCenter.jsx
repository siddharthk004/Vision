import React, { useEffect, useState } from "react";
import Home from "../Home";
import { toast } from "react-toastify";
import Axios from "../../Axios";
import { useNavigate } from "react-router-dom";

function HelpCenter() {
  const [description, setDescription] = useState("");
  const [ans, setAns] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || description.length < 5) {
      toast.error("Description should be at least 5 characters long.", {
        autoClose: 2000,
      });
      return;
    }

    setIsSubmitting(true);
    const email = localStorage.getItem("email");
    try {
      const response = await Axios().post("/user/service/save", {
        email,
        description,
      });

      if (response.status === 200) {
        toast.success("Data sent successfully!", { autoClose: 2000 });
        setAns(response.data);
        setDescription("");
      } else {
        toast.error("Data submission failed. Please try again.", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error sending help request:", error);
      toast.error("Something went wrong. Please try again.", {
        autoClose: 2000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Home />
      <h1 className="text-center text-6xl mt-4 font-semibold">Help Center</h1>
      <div className="flex ml-80 gap-20 items-center mt-20">
        <div className="w-[70%] mb-6">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your issue here..."
            className="border-4 border-green-700 w-full h-40 rounded-xl text-2xl p-4 resize-none"
            aria-label="Issue Description"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`${
            isSubmitting ? "bg-gray-500" : "bg-green-700"
          } text-white text-2xl py-3 px-8 rounded-xl`}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
      <div className="bg-zinc-100 h-[20vh] w-[60%] mx-auto border-2 border-zinc-700 rounded-xl mt-20">
        <p className="text-center text-2xl font-semibold p-4 text-gray-900">
          {ans}
        </p>
      </div>
    </div>
  );
}

export default HelpCenter;
