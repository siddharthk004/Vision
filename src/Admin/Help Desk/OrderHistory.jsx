import React from "react";
import { IoIosHome } from "react-icons/io";
import Navbar from "../Screen/Navbar";

function OrderHistory() {
  const orders = [
    { id: 1, name: "Siddharth Kardile", total: 1200, paymentStatus: "Paid", date: "2024-02-17", items: 3, deliveryStatus: "Delivered" },
    { id: 2, name: "Sakshi Ladkat", total: 850, paymentStatus: "Pending", date: "2024-02-16", items: 2, deliveryStatus: "Shipped" },
    { id: 3, name: "Atharva Khaladkar", total: 1500, paymentStatus: "Pending", date: "2024-02-15", items: 5, deliveryStatus: "Processing" },
    { id: 4, name: "Bhushan Zade", total: 1200, paymentStatus: "Paid", date: "2024-02-17", items: 3, deliveryStatus: "Delivered" },
    { id: 5, name: "Amruta Dahatonde", total: 850, paymentStatus: "Failed", date: "2024-02-16", items: 2, deliveryStatus: "Processing" },
    { id: 6, name: "Vaishnav Mankar", total: 1500, paymentStatus: "Paid", date: "2024-02-15", items: 5, deliveryStatus: "Delivered" },
  ];

  return (
    <div className="overflow-hidden bg-gray-100 pl-[4vw]">
      <Navbar />
      
      <div className="flex items-center gap-2 mt-[4vw] text-gray-700">
        <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
        <h6 className="text-sm">Help Desk</h6>
        <h6 className="text-sm">/</h6>
        <h6 className="text-sm font-semibold">Order History</h6>
      </div>
      
      <div className="container mx-auto mt-6">
        <h3 className="text-success font-bold text-center bg-white rounded p-2">Order History [Last 7 Days]</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-6 rounded shadow-md">
              <h6 className="font-bold">Order #{order.id}</h6>
              <h5><strong>Name:</strong> {order.name}</h5>
              <h6><strong>Total:</strong> ₹{order.total}</h6>
              <h6>
                <strong>Payment Status:</strong>{" "}
                <span className={
                  order.paymentStatus === "Paid" ? "text-green-500" :
                  order.paymentStatus === "Pending" ? "text-yellow-500" : "text-red-500"
                }>
                  {order.paymentStatus}
                </span>
              </h6>
              <h6><strong>Date:</strong> {order.date}</h6>
              <h6><strong>Items:</strong> {order.items}</h6>
              <h6><strong>Delivery Status:</strong> {order.deliveryStatus}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
