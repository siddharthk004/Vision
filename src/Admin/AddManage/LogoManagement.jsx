import { IoIosHome } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Axios from "../../Axios";
import Navbar from "../Screen/Navbar";

function LogoManagement() {
  const [logo, setLogo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const id = 1; // Assuming the logo always has ID 1

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await Axios().get("/admin/add");
        setLogo(response.data);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };
    fetchLogo();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpdateLogo = async () => {
    if (!selectedFile) {
      toast.warn("Please select a file first!");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      await Axios().post(`/admin/Updateadd/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Logo updated successfully!");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to update logo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden bg-gray-100 p-[.5vw]">
      <Navbar />
      {/* Breadcrumb */}
      <div className="mt-[3vw]">
        <div className="flex items-center space-x-2 text-gray-700">
        <IoIosHome className="w-[1.3vw] h-[1.3vw]"/>
          <h6>Add Manage</h6>
          <h6>/</h6>
          <h6 className="text-sm">Logo</h6>
        </div>
      </div>
      <ToastContainer />



      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
        <h3 className="text-xl font-bold text-green-600 text-center mb-4">
          Upload New Logo
        </h3>
        <input
          type="file"
          className="block w-full p-2 border rounded"
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded"
            onClick={() => setSelectedFile(null)}
          >
            Clear
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleUpdateLogo}
            disabled={loading}
          >
            {loading ? "Updating..." : "Submit"}
          </button>
        </div>
      </div>

      <div className="max-w-xl mx-auto text-center mt-6">
        <h2 className="text-lg font-bold text-blue-600">Running Logo</h2>
        {logo.length > 0 && (
          <img
            src={logo[0].addurl}
            className="mt-4 object-contain mx-auto rounded shadow-lg"
            alt="Uploaded Logo"
          />
        )}
      </div>
    </div>
  );
}

export default LogoManagement;
