import React from 'react';
import { FaHome } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { SiCoinmarketcap } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import '../index.css';

const Sidebar = () => {
return (
  <div className="w-[300px] fixed top-0 left-0 h-screen bg-[#F6F6F6] flex flex-col gap-[15px]">
    <h2 className='text-center font-bold text-[1.5rem] pt-[15px]'>Fixoria Sales</h2>
    <div>
        <p className='text-gray-600 pl-[30px] font-bold'>MAIN MENU</p>
        <ul className='flex flex-col gap-[15px] mt-[15px] text-gray-500 pl-[50px]'>
            <li className='flex items-center gap-[5px]'><FaHome />Home</li>
            <li className='text-[#000] font-bold flex items-center gap-[5px]'><CiShoppingBasket />My Store</li>
            <div className='flex flex-col gap-[5px] text-gray-600 pl-[30px] '>
                <p>Products</p>
                <p>Orders</p>
                <p>Inventory</p>
                <p>Discount</p>
            </div>
            <li className='flex items-center gap-[5px]'><GiReceiveMoney />Finance</li>
            <li className='flex items-center gap-[5px]'><FaUsers />Customers</li>
            <li className='flex items-center gap-[5px]'><BsFileBarGraph />Analytics Report</li>
            <li className='flex items-center gap-[5px]'><SiCoinmarketcap />Marketing</li>
            <li className='flex items-center gap-[5px]'><CiSettings />Settings</li>
        </ul>
    </div>
    <div>
        <p className='text-gray-600 pl-[30px] font-bold'>SALES CHANNEL</p>
        <ul className='flex flex-col gap-[15px] mt-[15px] text-gray-500 pl-[50px]'>
            <li className='flex items-center gap-[5px]'><CiShoppingBasket />Online Store</li>
            <li className='flex items-center gap-[5px]'><FaHome />Point of Sale</li>
        </ul>
    </div>
    
    <div className='pl-[30px] flex gap-[20px] items-center mt-[50px]'>
        <div className='w-[40px] h-[40px] rounded-[50%] bg-[#000] text-white flex items-center justify-center'>H</div>
        <div>
            <p className='font-bold '>Himmad</p>
            <span className='text-gray-500 text-[.8rem]'>CEO-FixoriaStudio</span>
        </div>
    </div>
  </div>
);
};

export default Sidebar;