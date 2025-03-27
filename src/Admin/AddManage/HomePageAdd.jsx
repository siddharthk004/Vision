import React, { useEffect, useState } from "react";
import { IoIosHome } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import Axios from "../../Axios";
import Navbar from "../Screen/Navbar";

function HomePageAdd() {
  const [ads, setAds] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedAdId, setSelectedAdId] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await Axios().get("/admin/add");
        setAds(response.data);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };
    fetchAds();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadAd = async () => {
    if (!selectedFile) {
      toast.warn("Please select an image first!");
      return;
    }
    setLoading1(true);
    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      await Axios().post("/admin/addImage", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Ad uploaded successfully!");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to upload ad.");
    } finally {
      setLoading1(false);
    }
  };

  const handleDeleteAd = async () => {
    if (!selectedAdId) {
      toast.warn("Please select an ad to delete!");
      return;
    }
    setLoading2(true);
    try {
      await Axios().post(`/admin/Deleteadd/${selectedAdId}`);
      toast.success("Ad deleted successfully!");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to delete ad.");
    } finally {
      setLoading2(false);
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
          <h6 className="text-sm">Home Page Add</h6>
        </div>
      </div>
      <ToastContainer />


      <div className="flex flex-col md:flex-row justify-center gap-3 mt-[2vw]">
        <div className="p-1 bg-white rounded-lg shadow-lg w-[30vw]">
          <h3 className="text-green-600 font-bold text-center text-xl">Upload New Ad</h3>
          <input
            type="file"
            className="w-full border rounded p-2 mt-3"
            accept="image/*"
            onChange={handleFileChange}
          />
          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-300 bg-gray-200" onClick={() => setSelectedFile(null)}>Clear</button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={handleUploadAd} disabled={loading1}>
              {loading1 ? "Uploading..." : "Submit"}
            </button>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg w-[30vw]">
          <h3 className="text-red-600 font-bold text-center text-xl">Delete Ad</h3>
          <select
            className="w-full border rounded p-2 mt-3"
            onChange={(e) => setSelectedAdId(e.target.value)}
            value={selectedAdId}
          >
            <option value="">-- Select Ad --</option>
            {ads.filter(ad => ad.id !== 1).map(ad => (
              <option key={ad.id} value={ad.id}>Ad {ad.id}</option>
            ))}
          </select>
          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-300 bg-gray-200" onClick={() => setSelectedAdId("")}>Clear</button>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" onClick={handleDeleteAd} disabled={loading2}>
              {loading2 ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-center text-blue-600 font-bold text-2xl mt-6">Running Ads</h2>
      <div className=" mx-auto bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-[2vw]">
          {ads.slice(1,).map(ad => (
            <div key={ad.id} className="justify-items-center text-center">
              <h6>{ad.id}</h6>
              <img src={ad.addurl} className=" h-[20vw] rounded-lg shadow" alt="Uploaded Ad" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageAdd;
