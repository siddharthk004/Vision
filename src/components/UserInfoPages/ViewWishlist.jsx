import React, { useCallback, useState } from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { MdDeleteOutline, MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../Axios";

function ViewWishlist({ data,ind, onDelete }) {
  const [isCartAdded, setCartAdded] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const cartData = {
    productname: data.productname,
    productcompanyname: data.productcompanyname,
    productimage: data.productimage,
    beforediscount: data.beforediscount,
    afterdiscount: data.afterdiscount,
    discount: data.discount,
  };

  const handleBuy = () => {
    navigate("/buyproduct", { state: cartData });
  };

  const deleteItemCart = useCallback(async () => {
    try {
      const response = await Axios().delete(`/user/wishlist/delete/${data.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.status === 200) {
        onDelete(ind);
        window.location.reload(); // Reloads the page
      }
    } catch (error) {
      console.error("Error deleting item:", error.response?.data || error.message);
    }
  }, [ind, onDelete, token]);

  const addToCart = useCallback(async () => {
    if (isCartAdded) return;

    try {
      const response = await Axios().post(`/user/cart`, cartData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setCartAdded(true);
      }
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error.message);
    }
  }, [isCartAdded, cartData, token]);

  return (
    <div className="shadow-xl shadow-zinc-200 border-[.1vw] border-zinc-300 w-[46vw] h-40 p-4 mt-[2vw] ml-[2vw] rounded-xl flex justify-between items-center">
      {/* Image & Title */}
      <Link to={`/user/product/id/${data.pId}`} className="flex items-center">
        <div>
          <img src={data.productimage} alt={data.productname} className="h-[10vw] p-2 w-[10vw] object-contain rounded-lg" />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-semibold text-center">
            {data.productname}
          </h1>
          <h1 className="text-xl font-light text-center text-gray-600">
            {data.productcompanyname}
          </h1>
        </div>
      </Link>

      {/* Price Section */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-700">{data.afterdiscount} RS</h1>
        <s className="text-xl font-light text-red-700">{data.beforediscount} RS</s>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <div>
          {/* Buy Button */}
          <button
            onClick={handleBuy}
            className="flex mb-2 items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md border border-green-500"
          >
            <CgArrowTopRightR className="w-6 h-6" />
            <span className="text-lg font-bold">Buy</span>
          </button>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className={`flex items-center justify-center rounded-md h-12 w-24 border ${
              isCartAdded ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-400 border-green-500"
            }`}
            disabled={isCartAdded}
          >
            <MdOutlineShoppingCart className="h-6 w-6 mr-2" />
            <span>{isCartAdded ? "Added" : "Add"}</span>
          </button>
        </div>

        {/* Delete Button */}
        <button onClick={deleteItemCart} className="m-2 rounded-md">
          <MdDeleteOutline className="h-9 w-8 text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default ViewWishlist;
