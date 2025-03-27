import { useState } from "react";
import Navbar from "../Screen/Navbar";
import { IoIosHome } from "react-icons/io";

const Brand = () => {
  const [brands, setBrands] = useState([
    { id: 1, image: "https://img.freepik.com/free-photo/male-doctor-holding-house-model-pointing-camera-protective-suit_176474-23733.jpg" },
  ]);

  // Add Brand
  const addBrand = () => {
    const newBrand = {
      id: Date.now(), // Unique ID
      image: "https://img.freepik.com/free-photo/male-doctor-holding-house-model-pointing-camera-protective-suit_176474-23733.jpg",
    };
    setBrands([...brands, newBrand]);
  };

  // Delete Brand
  const deleteBrand = (id) => {
    setBrands(brands.filter((brand) => brand.id !== id));
  };

  return (
    <div className="bg-gray-100 p-[.5vw] w-full overflow-x-hidden">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="mt-[3vw] container mx-auto">
        <div className="flex items-center space-x-2 text-gray-700">
          <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
          <h6>Banner Manage</h6>
          <h6>/</h6>
          <h6 className="text-sm">Brand</h6>
        </div>
      </div>

      {/* Brand List */}
      <div className="mt-5 flex gap-3 p-5 w-full max-w-[80vw] mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 rounded-md">
        {brands.map((brand) => (
          <div key={brand.id} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md">
            <div className="w-[12vw] h-[12vw] rounded-full overflow-hidden border">
              <img src={brand.image} alt="Brand" className="h-full w-full object-cover" />
            </div>

            {/* Delete Button */}
            <div className="mt-3">
              <button 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => deleteBrand(brand.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Brand Button */}
      <div className="flex justify-center mt-5">
        <button 
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={addBrand}
        >
          Add New Brand
        </button>
      </div>
    </div>
  );
};

export default Brand;
