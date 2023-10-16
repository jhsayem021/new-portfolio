import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiHome } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
const DashNav = () => {
    return (
        <div>
             <div className="w-full flex justify-end navbar bg-[#F2F5F9] mt-14">
                                <div className="flex-none lg:hidden">
                                    
                                </div>

                                <div className="flex-none  lg:block border-4 rounded-xl px-8 py-2">
                                    <ul className="menu menu-horizontal gap-8 ">
                                        {/* Navbar menu content here */}
                                        <li>
                                            <Link className=" hover:bg-gradient-to-r from-[#EC1B09] to-[#FF9C1A] hover:text-white bg-[#E1E8EF]" to="/home" >
                                                <div className=" px-3 py-1" >
                                                    <div className="flex justify-center"><FiHome className="text-2xl" /></div> 
                                                    <div className="text-sm">Home</div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className=" hover:bg-gradient-to-r from-[#EC1B09] to-[#FF9C1A] hover:text-white bg-[#E1E8EF]" to="/resume" >
                                                <div className=" px-3 py-1" >
                                                    <div className="flex justify-center"><FiFileText className="text-2xl" /></div> 
                                                    <div className="text-sm">
                                                        Resume</div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className=" hover:bg-gradient-to-r from-[#EC1B09] to-[#FF9C1A] hover:text-white bg-[#E1E8EF]  " to="/work" >
                                                <div className=" px-3 py-1" >
                                                    <div className="flex justify-center"><MdOutlineWorkOutline 
                                                   className="text-2xl" /></div> 
                                                   <div className="text-sm">
                                                        Work</div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className=" hover:bg-gradient-to-r from-[#EC1B09] to-[#FF9C1A] hover:text-white bg-[#E1E8EF]" to="/contact" >
                                                <div className=" px-3 py-1" >
                                                    <div className="flex justify-center"><BiSolidContact
                                                     className="text-2xl" /></div> 
                                                     <div className="text-sm">
                                                        Contact</div>
                                                </div>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
        </div>
    );
};

export default DashNav;