import React from 'react';
import { BiCodeAlt } from "react-icons/bi";
const Home = () => {
    return (
        <div className='lg:ms-10 lg:m-0 m-3 lg:h-fit'>
            <h1 className="lg:text-6xl text-[#000000] text-4xl font-semibold mt-5">About me</h1>
            <div className='mt-5'>
                <p className='text-xl text-[#000000]'>I'm a MERN stack developer with a passion for
                    creating efficient and user-friendly web
                    applications. Proficient in React, Node.js,
                    MongoDB, and UI frameworks. Eager to contribute
                    and learn in a dynamic team.
                </p>
            </div>
            <h3 className="lg:text-4xl text-2xl font-medium my-4 text-[#000000]">What we do</h3>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className="card lg:w-96 bg-[#FFEBD1] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[#000000] "><BiCodeAlt className='text-red-600 ' /> Frontend Development</h2>
                        <p className='text-[#000000]'>I'm an accomplished frontend developer proficient in HTML, CSS, JavaScript, and React,
                             dedicated to creating engaging and responsive web interfaces.
                        </p>
                    
                    </div>
                </div>
                <div className="card lg:w-96 bg-[#F2F7FC] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[#000000]"><BiCodeAlt className='text-[#FF9C1A] ' /> Backend Development</h2>
                        <p className='text-[#000000]'>I'm an experienced backend developer skilled in MongoDB, ExpressJS, and NodeJS, specializing in building robust, data-driven web applications with a focus on performance and security.
                        </p>
                       
                    </div>
                </div>
                <div className="card lg:w-96 bg-[#F2F7FC] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[#000000]"><BiCodeAlt className='text-[#FF9C1A] ' /> Email Frontend Design</h2>
                        <p className='text-[#000000]'>I'm an Email Template Design expert, proficient in XHTML, blending creativity and technical acumen to create engaging, responsive templates for effective email marketing campaigns.
                        </p>
                      
                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default Home;