import React from "react";
import '../index.css';

const Modal = ({ isOpen, onClose, onSave, formData, setFormData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>

        <label className="block mb-1 font-medium">Product Name</label>
        <input
          type="text"
          value={formData.productName}
          onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
          className="border w-full px-2 py-1 rounded mb-4"
        />

        <label className="block mb-1 font-medium">Category</label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="border w-full px-2 py-1 rounded mb-4"
        />

        <label className="block mb-1 font-medium">SKU</label>
        <input
          type="text"
          value={formData.sku}
          onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
          className="border w-full px-2 py-1 rounded mb-4"
        />

        <label className="block mb-1 font-medium">Incoming</label>
        <input
          type="number"
          value={formData.incoming}
          onChange={(e) => setFormData({ ...formData, incoming: e.target.value })}
          className="border w-full px-2 py-1 rounded mb-4"
        />

        <label className="block mb-1 font-medium">Stock</label>
        <input
          type="number"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          className="border w-full px-2 py-1 rounded mb-4"
        />

        <label className="block mb-1  font-medium">Status</label>
        <select
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value,
              statusColor:
                e.target.value === "In stock"
                  ? "green"
                  : e.target.value === "Low on stock"
                  ? "yellow"
                  : "red",
            })
          }
          className="border w-full px-3 py-2 rounded mb-4"
        >
          <option>In stock</option>
          <option>Low on stock</option>
          <option>Out of stock</option>
        </select>

        <label className="block mb-1 font-medium">Price</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="border w-full px-2 py-1 rounded mb-4"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"> Cancel </button>
          <button onClick={onSave} className="bg-[#5627D2] text-white px-4 py-2 rounded hover:bg-[#4a21b0]" >Save </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
