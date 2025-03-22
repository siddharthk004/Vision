import React, { useEffect, useState } from "react";
import { IoIosHome } from "react-icons/io";
import Axios from "../../Axios";
import Navbar from "../Screen/Navbar";

function ViewProduct() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setResult([]);
      setNoResult(false);
      return;
    }
    setLoading(true);
    setNoResult(false);

    try {
      const response = await Axios().get(`/user/search/${query}`);
      setResult(response.data);

      if (response.data.length === 0) {
        setNoResult(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    } else {
      setResult([]);
      setNoResult(false);
    }
  }, [query]);

  return (
    <div className="overflow-hidden bg-gray-100 p-[.5vw]">
      <Navbar />
      
      <div className="flex items-center gap-2 mt-[3vw] p-[.1vw] text-gray-700">
        <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
        <h6 className="text-sm">Product</h6>
        <h6 className="text-sm">/</h6>
        <h6 className="text-sm font-semibold">View</h6>
      </div>

      <div className="max-w-5xl mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
          Product View
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          className="w-full border rounded p-2 mb-4 focus:ring-2 focus:ring-green-400"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-gray-500">Loading stock...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-3 text-left">Product Name</th>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-center">Stock</th>
                  <th className="p-3 text-center">Price (₹)</th>
                  <th className="p-3 text-center">Discount (%)</th>
                  <th className="p-3 text-center">Final Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                {result.length > 0 ? (
                  result.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b text-center hover:bg-gray-50"
                    >
                      <td className="p-3 text-left">{product.productname}</td>
                      <td className="p-3 text-left">{product.productcompanyname}</td>
                      <td
                        className={`p-3 font-bold ${
                          product.quantity <= 5 ? "text-red-500" : "text-green-600"
                        }`}
                      >
                        {product.quantity}
                      </td>
                      <td className="p-3">₹{product.beforediscount}</td>
                      <td className="p-3">{product.discount}%</td>
                      <td className="p-3 font-bold text-green-600">
                        ₹{product.afterdiscount}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center p-4 text-gray-500">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
export default ViewProduct;