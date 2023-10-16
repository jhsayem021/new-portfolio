import React from 'react';
import { FiMoon } from "react-icons/fi";
const Navber = () => {
    return (
        <div className="navbar bg-[#F2F5F9]">
  <div className="flex-1">
    <h3 className=" text-2xl text-[24px] font-bold text-[#EC1B09] "><span className='text-black'>Jahid Hossain</span> Sayem </h3>
  </div>
  <div className="flex-none">
    <button className=" p-4 bg-[#EBF2FA] rounded-full border-gray-800 ">
      <FiMoon/>
    </button>
  </div>
</div>
    );
};

export default Navber;