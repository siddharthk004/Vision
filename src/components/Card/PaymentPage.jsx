import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "../Home";

function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    navigate("/"); // Redirect to the homepage or order summary
  };

  return (
    <div>
      <Home />
      <div className="bg-green-200 flex justify-center items-center h-[84vh]">
        <div className="bg-white shadow-lg p-10 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Payment</h1>
          <p className="text-center mt-4">Product: {state.productname}</p>
          <p className="text-center">Quantity: {state.count}</p>
          <p className="text-center text-green-600 text-xl font-semibold mt-2">
            Total: ₹{state.count * state.afterdiscount}
          </p>
          <button
            onClick={handlePaymentSuccess}
            className="mt-6 w-full bg-green-500 text-white py-2 rounded"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
