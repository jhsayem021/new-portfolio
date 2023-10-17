import React from 'react';
import { BiCodeAlt } from "react-icons/bi";
const Home = () => {
    return (
        <div className='ms-10 '>
            <h1 className="text-6xl font-semibold mt-5">About me</h1>
            <div className='mt-5'>
                <p className='text-xl'>I'm a MERN stack developer with a passion for
                    creating efficient and user-friendly web
                    applications. Proficient in React, Node.js,
                    MongoDB, and UI frameworks. Eager to contribute
                    and learn in a dynamic team.
                </p>
            </div>
            <h3 className="text-4xl my-4">What we do</h3>
            <div className='grid grid-cols-2 gap-4'>
                <div className="card w-96 bg-[#FFEBD1] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"><BiCodeAlt className='text-red-600 ' /> Frontend Development</h2>
                        <p>I'm an accomplished frontend developer proficient in HTML, CSS, JavaScript, and React,
                             dedicated to creating engaging and responsive web interfaces.
                        </p>
                    
                    </div>
                </div>
                <div className="card w-96 bg-[#F2F7FC] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"><BiCodeAlt className='text-[#FF9C1A] ' /> Backend Development</h2>
                        <p>I'm an experienced backend developer skilled in MongoDB, ExpressJS, and NodeJS, specializing in building robust, data-driven web applications with a focus on performance and security.
                        </p>
                       
                    </div>
                </div>
                <div className="card w-96 bg-[#F2F7FC] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"><BiCodeAlt className='text-[#FF9C1A] ' /> Email Frontend Design</h2>
                        <p>I'm an Email Template Design expert, proficient in XHTML, blending creativity and technical acumen to create engaging, responsive templates for effective email marketing campaigns.
                        </p>
                      
                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default Home;