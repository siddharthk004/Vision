import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../Axios";
import Home from "./Home";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdCurrencyRupee } from "react-icons/md";
import { PiPlusBold } from "react-icons/pi";
import { CiPercent } from "react-icons/ci";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { SiNationalrail } from "react-icons/si";
import { FaMinus } from "react-icons/fa6";
import { CgShutterstock } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import Detail from "./Detail";
import "../components/index.css";
import { CgProfile } from "react-icons/cg";
import { LuThumbsUp } from "react-icons/lu";
import { HiOutlineHandThumbDown } from "react-icons/hi2";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [isCartAdded, setIsCartAdded] = useState(false);
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const checkEmailAndRedirect = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return null;
    }
    return token;
  };

  const addToCart = async () => {
    // const email = checkEmailAndRedirect();
    if ( isCartAdded) return;

    const cartData = {
      productname: product?.productname || "Unknown",
      productcompanyname: product?.productcompanyname || "Unknown",
      productimage: product?.productimage || "placeholder.jpg",
      beforediscount: product?.beforediscount || 0,
      afterdiscount: product?.afterdiscount || 0,
      discount: product?.discount || 0,
    };

    try {
      const response = await Axios().post(`/user/cart`, cartData, {
        params: { email },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response.data);
      setIsCartAdded(true);
    } catch (error) {
      console.error(
        "Error adding to cart:",
        error.response?.data || error.message
      );
    }
  };

  const handlePayment = () => {
    const email = checkEmailAndRedirect();
    if (!email) return;
    navigate("/payment", {
      state: {
        count,
        productname: product.productname,
        afterdiscount: product.afterdiscount,
      },
    });
  };

  const getSingleProduct = async () => {
    try {
      const res = await Axios().post(`/user/product/id/${id}`);
      setProduct(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const getComments = async () => {
    try {
      const res = await Axios().post(`/user/commentview/${id}`);
      setComments(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCommentSubmit = async () => {
    const email = checkEmailAndRedirect();
    if (!email || !newComment.trim()) return;

    setIsSubmitting(true);

    try {
      await Axios().post(
        `/user/comment`,
        { pid: id, message: newComment },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      
      setNewComment("");
      getComments();
    } catch (e) {
      console.log(e);
    }finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
    getComments();
  }, []);

  return (
    <div className="no-scrollbar h-[100vh] overflow-y-scroll">
      <Home />
      <div className="w-full flex justify-center mt-[2vw]">
        <div className="h-[36vw]">
          <img
            src={product.productimage}
            className="h-[30vw] p-[2vw]"
            alt="Product"
          />
        </div>
        <div className="w-[30vw] mt-[1.5vw]">
          <h1 className="text-[2.2vw] font-bold">{product.productname}</h1>
          <h1 className="text-[1vw] mt-[0.2vw] m-[1vw] opacity-75 font-semibold">
            {product.productcompanyname}
          </h1>
          <h1 className="flex text-[2vw] mt-[0.3vw] m-[1vw] font-bold text-green-600">
            {parseInt(
              (product.beforediscount / 100) * (100 - product.discount)
            )}
            <MdCurrencyRupee className="mt-[0.3vw] ml-[0.2vw]" />
            <span className="ml-[0.2vw] text-red-400 text-[1.3vw] flex font-semibold">
              <s>{product.beforediscount}</s>
              <MdCurrencyRupee className="mt-[0.5vw] ml-[0.2vw]" />
            </span>
          </h1>
          <h1 className="flex bg-green-300 w-[7vw] font-bold h-[2vw] pl-2 rounded-[.5vw] text-[1.2vw]">
            <CiPercent className="mt-1 mr-2" />
            {Math.round(
              product.beforediscount -
                (product.beforediscount * (100 - product.discount)) / 100
            )}
            <MdCurrencyRupee className="mt-[0.5vw] ml-[0.2vw]" />
          </h1>

          <div className="flex w-[15vw] h-[3vw] border-2 border-zinc-900 mt-[2vw]">
            <div className="w-1/3 h-full bg-red-200 flex justify-center items-center">
              <FaMinus
                className="text-[1.5vw]"
                onClick={handleCount}
                disabled={count <= 1}
              />
            </div>
            <div className="w-1/3 h-full border-l-2 border-r-2 border-zinc-900 flex justify-center items-center">
              <h1 className="text-[1.5vw]">{count}</h1>
            </div>
            <div className="w-1/3 h-full bg-green-200 flex justify-center items-center">
              <PiPlusBold
                className="text-[1.5vw]"
                onClick={() => setCount((value) => value + 1)}
              />
            </div>
          </div>

          <h1 className="flex gap-2 text-[1vw] mt-[1vw]">
            <SiNationalrail /> Country of Origin: India
          </h1>
          <h1 className="flex gap-2 text-[1vw]">
            <RiSecurePaymentLine /> Secure Payments
          </h1>
          <h1 className="flex gap-2 text-[1vw]">
            <CgShutterstock /> In stock, Ready to Ship
          </h1>

          <div className="flex mt-[1vw]">
            <button
              onClick={addToCart}
              className={`rounded-md text-[1.5vw] h-[3vw] w-[10vw] mr-[2vw] flex justify-center items-center border-green-500 border ${
                isCartAdded
                  ? "bg-green-100 text-green-200 cursor-not-allowed"
                  : "bg-green-700 text-white"
              }`}
            >
              Add to Cart
            </button>
            <button
              onClick={handlePayment}
              className="rounded-md bg-blue-600 text-white text-[1.5vw] h-[3vw] w-[10vw] flex justify-center items-center border-green-500 border"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Detail name={product.productname} cname={product.productcompanyname} />

      <div className="mt-8 p-4 border-t">
        <h2 className="text-xl font-bold flex">Comments
        <HiMiniBars3BottomLeft className="m-[.5vw] "/> </h2>
        <div className="mt-2 ">
          {comments.map((c, index) => (
            <div key={index} className="mt-[2vw] pb-[2vw] flex border-b p-[.5vw]">
          <div className="">
            <CgProfile className="h-[2.5vw] w-[4vw] opacity-75" />
          </div>
          
              <div>
                <p className="text-[1.2vw] text-zinc-900 font-semibold"> {c.uname}</p>
                <div className="flex">
                {[...Array(c.star)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
                <p className="text-[1vw] text-zinc-900">{c.commentText}</p>
              <div className="flex gap-[.4vw]">
                <p className="text-[1vw] text-gray-500">Reply 0</p>
                  <LuThumbsUp className="mt-[.2vw]" />
                  <HiOutlineHandThumbDown className="mt-[.2vw]" />
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            onClick={handleCommentSubmit}
            className="mt-2 bg-blue-500 text-white p-2 rounded"
            disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></div>
              ) : (
                "Submit Comment"
              )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
