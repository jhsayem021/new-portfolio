import React from 'react';
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div className='mx-10 '>
            <h1 className="text-6xl font-semibold my-5">Contact</h1>


            <div className='grid grid-cols-2 gap-4 mt-5'>
                <div className="card w-96 bg-[#FFEBD1] shadow-xl">
                    <div className=" flex p-10 items-start ">
                        <div><PiPhoneCallFill className='text-red-600 text-2xl m-1' /></div>
                        <div><h2 className="card-title text-2xl"> Phone:</h2>
                            <ul>
                                <li>+8801601215306 
                                </li>
                                <li>+8801317433324 (Whatsapp)
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="card w-96 bg-[#F0F3F7] shadow-xl">
                    <div className=" flex p-10 items-start ">
                        <div><MdEmail className='text-red-600 text-2xl m-1' /></div>
                        <div><h2 className="card-title text-2xl"> Email:</h2>
                            <ul>
                                <li>sayemmetro320@gmail.com
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>


            </div>

            <div className="    mt-5 ">

            
                <form action="https://formsubmit.co/sayemmetro320@gmail.com" method="POST" className=" bg-[#F0F3F7] shadow-xl rounded-2xl p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className=" text-xl font-semibold text-gray-900">
                                Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                required
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-xl font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                required
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-xl font-semibold leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                required 
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="block  rounded-md  px-3.5 py-2.5 text-center  font-semibold border-2 border-[#ED3F0E] "
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;