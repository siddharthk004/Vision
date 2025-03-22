import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../Axios";
import Home from "./Home";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdCurrencyRupee } from "react-icons/md";
import { PiPlusBold } from "react-icons/pi";
import { CiPercent } from "react-icons/ci";
import { SiNationalrail } from "react-icons/si";
import { FaMinus } from "react-icons/fa6";
import { CgShutterstock } from "react-icons/cg";
import Detail from "./Detail";

function ProductDetails() {
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [count, setcount] = useState(1);
  const getsingleProduct = async () => {
    try {
      const res = await Axios().get(`/user/ViewFertilizer/${id}`);
      setproduct(res.data); // Adjust based on API response
    } catch (e) {
      console.log(e);
    }
  };
  const checkEmailAndRedirect = () => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/signin"); // Redirect to login if email is missing
      return null;
    }
    return email;
  };
  
  const addToCart = async () => {
    const email = checkEmailAndRedirect();
    if (!email || isCartAdded) return; // Prevent execution if email is missing or already added

    const cartData = {
      productname: data?.productName || "Unknown",
      productcompanyname: data?.productCompanyName || "Unknown",
      productimage: data?.productImage || "placeholder.jpg",
      beforediscount: data?.beforediscount || 0,
      afterdiscount: data?.afterdiscount || 0,
      discount: data?.discount || 0,
    };

    try {
      const response = await Axios().post(
        `/user/cart`,
        cartData,
        {
          params: { email }, // Pass email as a query parameter
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      setIsCartAdded(true); // Mark product as added to the cart
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error.message);
    }
  };

  const handlePayment = () => {
    const email = checkEmailAndRedirect();
      if (!email) return; // Prevent execution if email is missing or already added
    navigate("/payment", { state: { count, productname:product.productName, afterdiscount:product.afterdiscount } });
  }; 

  const handleCount = () => {
    if(count > 1) {
      setcount(count-1);
    }
  };

  useEffect(() => {
    getsingleProduct();
  }, []);
  return (
    <div className="h-full">
      <Home />
      <div className="w-full justify-center mt-[3%] flex">
        <div className="h-[20%] ">
          <img src={product.productImage} className="h-full p-10"></img>
        </div>
        <div className="h-[20%] w-1/3">
          <h1 className=" text-[200%] font-bold">{product.productName}</h1>
          <h1 className="text-xl mt-1 m-4 font-semibold">
            {product.productCompanyName}
          </h1>
          <h1 className="flex text-[140%] mt-2 m-4 font-semibold text-green-600">
            {product.afterdiscount}
            <MdCurrencyRupee className="mt-[5px] ml-1" />{" "}
            <h1 className="ml-2 text-red-400 text-[80%] flex">
              {" "}
              <s>{product.beforediscount}</s>
              <MdCurrencyRupee className="mt-[5px] ml-1" />
            </h1>
          </h1>
          <h1 className="flex bg-green-300 w-36 font-lightbold h-7 pl-2 rounded-full text-xl">
            <CiPercent className="mt-1 mr-2" /> Save{" "}
            {product.beforediscount - product.afterdiscount}
            <MdCurrencyRupee className="mt-[5px] ml-1" />
          </h1>

          <div className="flex w-60 h-14 border-2 border-zinc-900 mt-[4%] m-6">
            <button className="w-1/3 h-full bg-red-200">
              <FaMinus
                className="w-full h-[3vh] mt-2"
                onClick={() => handleCount()}
                disabled = {count <= 1}
              />
            </button>
            <div className="w-1/3 h-full border-l-2 border-r-2 border-zinc-900">
              <h1 className="w-full h-[3vh] text-2xl mt-2 text-center">
                {count}
              </h1>
            </div>
            <button className="w-1/3 h-full bg-green-200">
              <PiPlusBold
                className="w-full h-[3vh] mt-2"
                onClick={() => setcount((value) => value + 1)}
              />
            </button>
          </div>

          <h1 className="flex gap-2">
            <SiNationalrail />
            Country of Origin India
          </h1>
          <h1 className="flex gap-2">
            <RiSecurePaymentLine />
            Secure Payments
          </h1>
          <h1 className="flex gap-2">
            <CgShutterstock />
            In stock, Ready to Ship
          </h1>

          <div className="flex mt-2">
            <button onClick={addToCart} className="rounded-md bg-green-700 text-xl text-white h-13 w-30 mr-6 flex border-green-500 border">
              <h1 className="mt-2 ml-3 mr-3 font-bold">Add to Cart</h1>
            </button>
            <button onClick={handlePayment} className="rounded-md bg-blue-600 text-white h-12 text-xl w-30 flex border-green-500 border">
              <h1 className="mt-2 ml-3 mr-3 font-bold">Buy Now</h1>
            </button>
          </div>
        </div>
      </div>
      <Detail name={product.productName} cname={product.productCompanyName} />
    </div>
  );
}

export default ProductDetails;
