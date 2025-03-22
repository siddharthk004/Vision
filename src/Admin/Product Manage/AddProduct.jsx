import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Axios from "../../Axios";
import { IoIosHome } from "react-icons/io";
import Navbar from "../Screen/Navbar";

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    productname: "",
    productcompanyname: "",
    productimage: null,
    category: "",
    discount: "",
    beforediscount: "",
    afterdiscount: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, productimage: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    });

    try {
      await Axios().post("/admin/addproduct", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Product added successfully!", { theme: "dark" });
      setFormData({
        productname: "",
        productcompanyname: "",
        productimage: null,
        category: "",
        discount: "",
        beforediscount: "",
        afterdiscount: "",
        quantity: "",
      });
      setImagePreview(null);
    } catch (error) {
      toast.error("Failed to add product.", { theme: "dark" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden bg-gray-100 p-[.5vw]">
      <Navbar />
      <ToastContainer />

      <div className="flex items-center gap-2 mt-[3vw] p-[.1vw] text-gray-700">
        <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
        <h6 className="text-sm">Product</h6>
        <h6 className="text-sm">/</h6>
        <h6 className="text-sm font-semibold">Add</h6>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="productname"
                value={formData.productname}
                onChange={handleChange}
                required
                placeholder="Enter product name"
                className="w-full p-2 border-[.1vw] rounded focus:ring-[.1vw] focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="block font-semibold">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="productcompanyname"
                value={formData.productcompanyname}
                onChange={handleChange}
                required
                placeholder="Enter company name"
                className="w-full  p-2 border-[.1vw] rounded focus:ring-[.1vw] focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Product Image */}
          <div>
            <label className="block font-semibold">
              Product Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              name="productimage"
              onChange={handleFileChange}
              required
              className="w-full  p-2 border-[.1vw] rounded focus:ring-[.1vw] focus:ring-blue-100"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 rounded-lg w-24 h-24 object-cover border shadow-sm"
              />
            )}
          </div>

          {/* Prices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">
                Before Discount Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="beforediscount"
                min="0"
                value={formData.beforediscount}
                onChange={handleChange}
                required
                placeholder="Enter price before discount"
                className="w-full p-2 border-[.1vw] rounded focus:ring-[.1vw] focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="block font-semibold">
                After Discount Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="afterdiscount"
                min="0"
                value={formData.afterdiscount}
                onChange={handleChange}
                required
                placeholder="Enter price after discount"
                className="w-full p-2 border-[.1vw] rounded focus:ring-[.1vw] focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Quantity & Discount */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
                placeholder="Enter product quantity"
                className="w-full p-2  border-[.1vw] rounded focus:ring-[.1vw] focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="block font-semibold">
                Discount (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="discount"
                min="0"
                max="100"
                value={formData.discount}
                onChange={handleChange}
                required
                placeholder="Enter discount percentage"
                className="w-full p-2 border-[.1vw] rounded focus:ring-[.1vw] focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="reset"
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-300 bg-gray-200"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
