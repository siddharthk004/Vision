import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IoIosHome } from "react-icons/io";
import Axios from "../../Axios";
import Navbar from "../Screen/Navbar";

function UpdateProduct() {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [productSuggestions, setProductSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    productname: "",
    productcompanyname: "",
    category: "",
    discount: "",
    beforediscount: "",
    afterdiscount: "",
    quantity: "",
    productimage: null,
  });

  useEffect(() => {
    if (searchQuery.length > 1) {
      Axios()
        .get(`/user/search/${searchQuery}`)
        .then((res) => setProductSuggestions(res.data))
        .catch();
    } else {
      setProductSuggestions([]);
    }
  }, [searchQuery]);

  const handleProductSelect = (product) => {
    setSearchQuery(product.productname);
    setProductSuggestions([]);
    setSelectedProduct(product.id);

    setFormData({
      productname: product.productname,
      productcompanyname: product.productcompanyname,
      category: product.category,
      discount: product.discount,
      beforediscount: product.beforediscount,
      afterdiscount: product.afterdiscount,
      quantity: product.quantity,
      productimage: null,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, productimage: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    for (const key in formData) {
      if (key !== "productimage" && formData[key]) {
        data.append(key, formData[key]);
      }
    }
    if (formData.productimage) {
      data.append("productimage", formData.productimage);
    }

    try {
      await Axios().post(`/admin/updateproduct/${selectedProduct}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Product Updated successfully!");
    } catch (error) {
      toast.error("Failed to update product.");
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
          <h6>Product</h6>
          <h6>/</h6>
          <h6 className="text-sm">Update</h6>
        </div>
      </div>
      <ToastContainer />
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-4 rounded-lg">
        <h2 className="text-center text-blue-600 text-xl font-bold">Update Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-bold">Search Product <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full border p-2 rounded mt-1"
              placeholder="Type product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {productSuggestions.length > 0 && (
              <ul className="border p-2 rounded mt-1 bg-gray-100">
                {productSuggestions.map((product) => (
                  <li
                    key={product.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleProductSelect(product)}
                  >
                    {product.productname}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label className="font-bold">Product Name</label>
            <input type="text" className="w-full border p-2 rounded" name="productname" value={formData.productname} onChange={handleChange} required />
          </div>
          <div>
            <label className="font-bold">Company Name</label>
            <input type="text" className="w-full border p-2 rounded" name="productcompanyname" value={formData.productcompanyname} onChange={handleChange} />
          </div>

          <div>
            <label className="font-bold">Product Image</label>
            <input type="file" className="w-full border p-2 rounded" accept="image/*" onChange={handleFileChange} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-bold">New Price</label>
              <input type="number" className="w-full border p-2 rounded" name="afterdiscount" value={formData.afterdiscount} onChange={handleChange} />
            </div>
            <div>
              <label className="font-bold">Product Quantity</label>
              <input type="number" className="w-full border p-2 rounded" name="quantity" value={formData.quantity} onChange={handleChange} />
            </div>
          </div>

          <div>
            <label className="font-bold">Discount (%)</label>
            <input type="number" className="w-full border p-2 rounded" name="discount" value={formData.discount} onChange={handleChange} />
          </div>

          <div className="flex justify-between mt-4">
            <button type="reset" className="bg-gray-500 text-white py-2 px-4 rounded">Clear</button>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded" disabled={loading}>
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;