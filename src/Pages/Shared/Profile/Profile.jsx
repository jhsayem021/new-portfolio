import React from 'react';
import profileImg from '../../../assets/sayem.jpg'
import ExamplePdf from '../../../assets/Jahid-Hossain-Sayem-CV.pdf'
import { BiDownload } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Profile = () => {
    return (
        <div className='bg-white rounded-2xl  '>
            <div className="card w-96 bg-base-100 shadow-xl   ">
                <figure className="px-10 pt-10 ">
                    {/* <img src="" className="rounded-xl w-4/5  " /> */}
                    <img src={profileImg} className="rounded-xl w-4/5 mx-auto " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Jahid Hossain Sayem</h2>
                    <p className='text-center text-slate-400 text-xl'>MERN Stack Developer</p>
                    <div className='grid grid-cols-4 gap-2 mt-3'>
                        <button className="btn btn-square">
                            <a href="https://www.facebook.com/jh.sayem.37?mibextid=ZbWKwL" target='blank'><FaFacebookF className="text-[#1877F2] text-2xl" ></FaFacebookF></a>
                        </button>
                        <button className="btn btn-square">
                            <a href="https://www.linkedin.com/in/jahid-hossain-sayem-4a6209223/" target='blank'><FaLinkedinIn className="text-[#0077B5] text-2xl" ></FaLinkedinIn></a>
                        </button>
                        <button className="btn btn-square">
                            <a href="https://twitter.com/jahid_sayem" target='blank'><FaTwitter className="text-[#1DA1F2] text-2xl" ></FaTwitter></a>
                        </button>
                        <button className="btn btn-square">
                            <a href="https://github.com/jhsayem021" target='blank'><FaGithub className="text-[#0B0909] text-2xl" ></FaGithub></a>
                        </button>

                    </div>

                    <div>
                        <ul className="divide-y divide-gray-100 bg-[#F2F5F9] p-5 rounded-2xl mt-5">
                            <li className="flex justify-between   pb-3">
                                <div className="flex items-center ">
                                    <div className='me-4'>
                                    <FaPhone className='text-xl text-[#EC1B09]'/>  
                                        
                                    </div>
                                    <div className="w-full flex-auto ">
                                        <p className="text-left text-xs leading-6 text-gray-900">Phone</p>
                                        <p className="mt-1 truncate text-sm font-bold leading-5 text-gray-500">+8801601215306</p>
                                    </div>
                                </div>

                            </li>
                            <li className="flex justify-between   pb-3">
                                <div className="flex  items-center ">
                                    <div className='me-4'>
                                    <MdEmail className='text-xl text-[#FF9C1A]'/>
                                    </div>
                                    <div className="w-full flex-auto ">
                                        <p className="text-left text-xs leading-6 text-gray-900">Email</p>
                                        <p className="mt-1 truncate text-sm font-bold leading-5 text-gray-500">sayemmetro320@gmail.com</p>
                                    </div>
                                </div>

                            </li>
                            <li className="flex justify-between   pb-3">
                                <div className="flex  items-center ">
                                    <div className='me-4'>
                                    <MdLocationOn className='text-xl text-[#F65E12]'/>
                                    </div>
                                    <div className="w-full flex-auto ">
                                        <p className="text-left text-xs leading-6 text-gray-900">Location</p>
                                        <p className="mt-1 truncate text-sm font-bold leading-5 text-gray-500">Sylhet-3100, Bangladesh</p>
                                    </div>
                                </div>

                            </li>
                            <li><a  href={ExamplePdf}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer">
                            <button className="btn bg-gradient-to-r from-[#EC1B09] to-[#FF9C1A] text-white text-sm mt-8"> <BiDownload className='text-xl' /> Download Resume </button>
                            </a>
                           
                            </li>

                        </ul>

                        
                    </div>
                    <div className="card-actions">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;