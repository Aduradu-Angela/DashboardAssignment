import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import inventoryData from "../data/inventoryData.js";
import viewbg from "../assets/viewbg.png";

const ViewProduct = () => {
  //Extracts the sku parameter from the current URL.
  const { sku } = useParams();
  const navigate = useNavigate();
  /*
  Searches inventoryData for the product with the same sku as the one from the URL.
  find() returns the first matching product object, or undefined if not found.
   */
  const product = inventoryData.find((p) => p.sku === sku);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${viewbg})` }}>
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full border-[#5627d2] border-[5px]">
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.productName}
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-200"
          />
          <h2 className="mt-4 text-xl font-bold text-gray-800">
            {product.productName}
          </h2>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">SKU:</span>
            <span className="font-medium">{product.sku}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Incoming:</span>
            <span className="font-medium">{product.incoming}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Stock:</span>
            <span className="font-medium">{product.stock}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status:</span>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                product.statusColor === "green"
                  ? "bg-green-100 text-green-700"
                  : product.statusColor === "yellow"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.status}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Price:</span>
            <span className="font-bold text-[#5627d2]">${product.price}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
          //this just takes you one step back in history
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-[#5627d2] text-white rounded-lg shadow hover:bg-purple-700"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
