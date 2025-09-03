import React, { useState } from 'react';
import { IoIosNotifications } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import '../index.css';
import inventoryDataJson from '../data/inventoryData';
import Modal from './Modal';
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";



const statusStyles = {
  green: "text-green-700 bg-green-100",
  red: "text-red-700 bg-red-100",
  yellow: "text-yellow-700 bg-yellow-100"
};

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState(inventoryDataJson);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    sku: "",
    incoming: 0,
    stock: 0,
    status: "In stock",
    statusColor: "green",
    price: 0
  });

  const handleSaveProduct = () => {
    if (isEditMode && editIndex !== null) {
      const updatedList = [...inventoryData];
      updatedList[editIndex] = formData;
      setInventoryData(updatedList);
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      setInventoryData([...inventoryData, formData]);
    }

    setFormData({
      productName: "",
      category: "",
      sku: "",
      incoming: 0,
      stock: 0,
      status: "In stock",
      statusColor: "green",
      price: 0
    });
    setIsModalOpen(false);
  };

    const handleExportPDF = () => {
    const table = document.getElementById("inventoryTable"); // target table by ID
    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("inventory.pdf");
    });
  };


  return (
    <div className="ml-[300px] bg-[#F6F6F6]">
      <nav className='flex justify-between items-center bg-[#F6F6F6] p-[10px]'>
        <input type="text" placeholder="Search" className="border border-gray-300 rounded-md py-[5px] px-[10px] w-[250px]" />
        <div className='flex gap-[20px] items-center'>
          <button className='p-2 rounded-md bg-white'><IoIosNotifications /></button>
          <button className='p-2 rounded-md bg-white'><CiLock /></button>
        </div>
      </nav>

      <div className='flex justify-between items-center px-[20px] pb-[10px] bg-[#F6F6F6]'>
        <p className='font-bold text-2xl'>Inventory</p>
        <div className='flex gap-[10px]'>
          <button className='bg-[#fff] font-bold p-[8px] rounded-md border border-gray-200'>Import</button>
          <button onClick={handleExportPDF} className='bg-[#fff] font-bold p-[8px] rounded-md border border-gray-200'>Export</button>
          <button
            onClick={() => {
              setIsEditMode(false);
              setFormData({
                productName: "",
                category: "",
                sku: "",
                incoming: 0,
                stock: 0,
                status: "In stock",
                statusColor: "green",
                price: 0
              });
              setIsModalOpen(true);
            }}
            className='bg-[#5627D2] text-white font-bold p-[8px] rounded-md'
          >
            + Add Product
          </button>
        </div>
      </div>

      <div className='flex bg-[#fff] rounded-md shadow-md px-[20px] py-[20px] gap-[20px]'>
        <div className='border-right border-gray-300 pl-[20px]'>
          <p className='text-gray-400 text-[15px] font-bold'>Total Asset Value</p>
          <p className='text-[30px] font-bold'>$10,356788</p>
        </div>
        <div className='w-[5px] bg-gray-200'></div>
        <div className='pl-[20px] flex flex-col gap-[10px]'>
          <div className='flex gap-2 items-center'>
            <p className='text-[30px] font-bold'>2379</p>
            <p className='text-gray-400 text-[15px] font-bold'>Total Products</p>
          </div>
          <div className='flex gap-1 items-center h-[10px]'>
            <div className='w-[180px] h-full bg-green-800 rounded-full'></div>
            <div className='w-[100px] h-full bg-yellow-500 rounded-full'></div>
            <div className='w-[120px] h-full bg-red-500 rounded-full'></div>
          </div>
          <div className='flex gap-[8px] items-center '>
            <p className='text-gray-400 text-[15px]'>🟢 In Stock:<b className='text-black'>1452</b></p>
            <p className='text-gray-400 text-[15px]'>🟡 Low Stock: <b className='text-black'>355</b></p>
            <p className='text-gray-400 text-[15px]'>🔴 Out of Stock: <b className='text-black'>182</b></p>
          </div>
        </div>
      </div>

      <div className='bg-white p-[20px] mt-[5px]'>
        <div className='flex justify-between items-center'>
          <input type='text' placeholder='Search' className='px-[10px] py-[5px] w-[250px] border border-gray-200 rounded-md' />
          <div className="flex gap-4 items-center p-4">
            <select className="appearance-none px-[10px] py-[5px] border border-gray-200 rounded-md cursor-pointer">
              <option selected>12 Sep - 28 Oct 2024</option>
              <option>01 Jan - 15 Feb 2025</option>
              <option>16 Feb - 30 Mar 2025</option>
            </select>
            <select className="appearance-none px-[10px] py-[5px] border border-gray-200 rounded-md cursor-pointer">
              <option selected>Amount Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
            <select className="appearance-none px-[10px] py-[5px] border border-gray-200 rounded-md cursor-pointer">
              <option selected>Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Suspended</option>
            </select>
            <button className="flex items-center gap-2 px-[10px] py-[5px] border border-gray-200 rounded-md cursor-pointer text-sm">
              <span>☰</span> Filter
            </button>
          </div>
        </div>

        <table id="inventoryTable" className="w-full text-sm text-left">
          <thead className="text-gray-500 font-medium bg-[#F6F6F6]">
            <tr>
              <th className='pl-[15px] py-2'><input type="checkbox" /></th>
              <th className='py-2'>Product Name</th>
              <th className='py-2'>Category</th>
              <th className='py-2'>SKU</th>
              <th className='py-2'>Incoming</th>
              <th className='py-2'>Stock</th>
              <th className='py-2'>Status</th>
              <th className='py-2'>Price</th>
              <th className='py-2'>Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {inventoryData.map((item, index) => (
              <tr key={index} className="bg-white shadow-sm rounded-md relative">
                <td className="pl-[15px] py-2"><input type="checkbox" /></td>
                <td className="py-2 flex items-center space-x-3">
                  <img 
                    src={item.image} 
                    alt={item.productName} 
                    className="w-[28px] h-[28px] rounded-full object-cover"
                  />
                  <span className="font-medium">{item.productName}</span>
                </td>

                <td className="py-2">{item.category}</td>
                <td className="py-2">{item.sku}</td>
                <td className="py-2">{item.incoming}</td>
                <td className="py-2">{item.stock}</td>
                <td className="py-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${statusStyles[item.statusColor]}`}>
                    {item.status}
                  </span>
                </td>
                    <td className="py-2">${item.price}</td>
                <td className="py-2 relative">
                  <button onClick={() => setActiveMenuIndex(index)} className="text-xl">⋯</button>
                  {activeMenuIndex === index && (
                    <div className="absolute right-0 mt-2 w-[100px] bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <button className="block w-full px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          const updatedList = inventoryData.filter((_, i) => i !== index);
                          setInventoryData(updatedList);
                          setActiveMenuIndex(null);
                        }}> Delete</button>
                      <button className="block w-full px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          setFormData(item);
                          setEditIndex(index);
                          setIsEditMode(true);
                          setIsModalOpen(true);
                          setActiveMenuIndex(null);
                        }}>Update</button>
                      <button
                        className="block w-full px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          navigate(`/view/${item.sku}`);
                          setActiveMenuIndex(null);
                        }}
                      >
                        View
                      </button>


                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='flex items-center justify-between mt-[20px]'>
          <div className='flex items-center'>
            <p className='text-[15px] font-bold'>Showing 1 - 10 of {inventoryData.length} entries</p>
            <select className="appearance-none px-[10px] py-[5px] border border-gray-200 rounded-md cursor-pointer ml-4">
              <option selected>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </select>
          </div>
          <div className='flex gap-[10px]'>
            <button className='p-[10px] border border-gray-500 rounded-md'>Previous</button>
            <button className='px-[10px] py-[5px] border border-gray-400 rounded-md'>1</button>
            <button className='px-[10px] py-[5px] border border-gray-400 rounded-md'>2</button>
            <button className='px-[10px] py-[5px] border border-gray-400 rounded-md'>3</button>
            <button className='px-[10px] py-[5px] border border-gray-400 rounded-md'>...</button>
            <button className='px-[10px] py-[5px] border border-gray-400 rounded-md'>Next →</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setIsEditMode(false);
          setEditIndex(null);
        }}
        onSave={handleSaveProduct}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default Inventory;