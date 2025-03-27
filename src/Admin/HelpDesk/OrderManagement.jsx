import { saveAs } from "file-saver";
import { IoIosHome } from "react-icons/io";
import JSZip from "jszip";
import React, { useState } from "react";
import Navbar from "../Screen/Navbar";

function OrderManagement() {
  const [orders] = useState([
    {
      id: 101,
      name: "Siddharth Kardile",
      total: 1200,
      paymentStatus: "Cash",
      invoiceUrl: "http://res.cloudinary.com/dmejw3uwe/raw/upload/v1742315156/amanecza1fimpescwl3d.pdf",
      shipmentInvoiceUrl: "http://res.cloudinary.com/dmejw3uwe/raw/upload/v1742315156/shipment_101.pdf",
    },
    {
      id: 102,
      name: "Sakshi Ladkat",
      total: 850,
      paymentStatus: "Cash",
      invoiceUrl: "https://www.example.com/invoices/Invoice_Order_102.pdf",
      shipmentInvoiceUrl: "https://www.example.com/invoices/Shipment_Order_102.pdf",
    },
  ]);

  const [loading, setLoading] = useState({});
  const [bulkLoading, setBulkLoading] = useState(false);

  const downloadInvoice = async (url, filename, orderId, type) => {
    setLoading((prev) => ({ ...prev, [orderId]: { ...prev[orderId], [type]: true } }));
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      saveAs(blob, filename);
    } catch (error) {
      console.error(`Error downloading ${type} invoice:`, error);
    }
    setLoading((prev) => ({ ...prev, [orderId]: { ...prev[orderId], [type]: false } }));
  };

  const downloadAllInvoices = async (type) => {
    setBulkLoading(true);
    const zip = new JSZip();
    const downloadPromises = orders.map(async (order) => {
      try {
        const invoiceUrl = type === "user" ? order.invoiceUrl : order.shipmentInvoiceUrl;
        const response = await fetch(invoiceUrl);
        const blob = await response.blob();
        zip.file(`${type === "user" ? "User" : "Shipment"}_Invoice_Order_${order.id}.pdf`, blob);
      } catch (error) {
        console.error(`Failed to download ${type} invoice for Order ${order.id}:`, error);
      }
    });
    await Promise.all(downloadPromises);
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `All_${type === "user" ? "User" : "Shipment"}_Invoices.zip`);
      setBulkLoading(false);
    });
  };

  return (
    <div className="overflow-hidden bg-gray-100 p-[.5vw]">
      <Navbar />
      {/* Breadcrumb */}
      <div className="mt-[3vw]">
        <div className="flex items-center space-x-2 text-gray-700">
        <IoIosHome className="w-[1.3vw] h-[1.3vw]"/>
          <h6>Help Desk</h6>
          <h6>/</h6>
          <h6 className="text-sm">Order Management</h6>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-center text-2xl font-bold mb-4">Order Management</h2>
        <div className="overflow-auto max-h-[500px] shadow-md rounded-lg">
          <table className="w-full table-auto border border-gray-300 text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Order ID</th>
                <th className="p-2 border">Customer</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Payment Status</th>
                <th className="p-2 border">User Invoice</th>
                <th className="p-2 border">Shipment Invoice</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="bg-white">
                  <td className="p-2 border">{order.id}</td>
                  <td className="p-2 border">{order.name}</td>
                  <td className="p-2 border">₹{order.total}</td>
                  <td className={`p-2 border ${order.paymentStatus === "Cash" ? "text-green-600" : "text-yellow-500"}`}>
                    {order.paymentStatus}
                  </td>
                  <td className="p-2 border">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-700 disabled:bg-gray-400"
                      onClick={() => downloadInvoice(order.invoiceUrl, `User_Invoice_Order_${order.id}.pdf`, order.id, "user")}
                      disabled={loading[order.id]?.user}
                    >
                      {loading[order.id]?.user ? "Downloading..." : "User PDF"}
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                      onClick={() => downloadInvoice(order.shipmentInvoiceUrl, `Shipment_Invoice_Order_${order.id}.pdf`, order.id, "shipment")}
                      disabled={loading[order.id]?.shipment}
                    >
                      {loading[order.id]?.shipment ? "Downloading..." : "Shipment PDF"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 disabled:bg-gray-400"
            onClick={() => downloadAllInvoices("user")}
            disabled={bulkLoading}
          >
            {bulkLoading ? "Downloading..." : "Download All User Invoices (ZIP)"}
          </button>
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800 disabled:bg-gray-400"
            onClick={() => downloadAllInvoices("shipment")}
            disabled={bulkLoading}
          >
            {bulkLoading ? "Downloading..." : "Download All Shipment Invoices (ZIP)"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderManagement;