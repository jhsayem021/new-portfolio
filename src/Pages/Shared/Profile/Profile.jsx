import React from 'react';
import './profile.css'
import profileImg from '../../../assets/sayem.jpg'
import ExamplePdf from '../../../assets/Jahid-Hossain-Sayem-CV.pdf'
import { BiDownload } from "react-icons/bi";
import { FaGithub, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Profile = () => {
    return (
        <div className='bg-white rounded-2xl lg:m-0 m-2  '>
            <div className="card lg:w-96  shadow-xl  bg-white  ">
                <figure className="lg:px-10 px-3 pt-10 ">
                    {/* <img src="" className="rounded-xl w-4/5  " /> */}
                    <img src={profileImg} className=" profile-img rounded-xl w-5/6 mx-auto " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#000000] text-3xl">Jahid Hossain Sayem</h2>
                    <p className='text-center text-slate-500 text-xl'>MERN Stack Developer</p>
                    <div className='grid grid-cols-3 gap-4 mt-3'>

                       
                            <a href="https://www.linkedin.com/in/jahid-hossain-sayem-4a6209223/" className='btn btn-square bg-white hover:bg-[#0077B5] text-[#0077B5] hover:text-[#FFFFFF]' target='blank'><FaLinkedinIn className=" text-2xl " ></FaLinkedinIn ></a>
                        
                        
                            <a href="https://twitter.com/jahid_sayem" className='btn btn-square bg-white hover:bg-[#1DA1F2] text-[#1DA1F2] hover:text-[#FFFFFF]' target='blank'><FaTwitter className=" text-2xl" ></FaTwitter></a>
                       
                        <a href="https://github.com/jhsayem021" className='btn btn-square bg-white hover:bg-[#0B0909] text-[#0B0909] hover:text-[#FFFFFF]' target='blank'><FaGithub className=" text-2xl " ></FaGithub></a>
                

                    </div>

                    <div className=''>
                        <ul className="divide-y  divide-gray-100 bg-[#F2F5F9] p-5 rounded-2xl mt-5">
                            <li className="flex justify-between   pb-3">
                                <div className="flex items-center ">
                                    <div className='me-4'>
                                        <FaPhone className='text-xl text-[#EC1B09]' />

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
                                        <MdEmail className='text-xl text-[#FF9C1A]' />
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
                                        <MdLocationOn className='text-xl text-[#F65E12]' />
                                    </div>
                                    <div className="w-full flex-auto ">
                                        <p className="text-left text-xs leading-6 text-gray-900">Location</p>
                                        <p className="mt-1 truncate text-sm font-bold leading-5 text-gray-500">Sylhet-3100, Bangladesh</p>
                                    </div>
                                </div>

                            </li>
                            <li><a href={ExamplePdf}
                                download="Jahid-Hossain-Sayem"
                                target="_blank"
                                rel="noreferrer">
                                <button className="btn bg-gradient-to-r from-[#EC1B09] to-[#FF9C1A] text-white text-sm mt-8"> <BiDownload className='text-xl' /> Download Resume </button>
                            </a>

                            </li>

                        </ul>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;