import React from 'react';
import { RiGraduationCapLine } from "react-icons/ri";
import projectimg1 from '../../../assets/foodmania.png'
import projectimg2 from '../../../assets/tourism.png'
import projectimg3 from '../../../assets/email.png'

const Work = () => {
    return (
        <div>
            <h1 className="text-6xl font-semibold mt-5 mx-10">Portfolio  </h1>
            <div className=' flex flex-wrap gap-5 mx-8 mt-10 '>
                <div className="card w-96 bg-[#FFE3BF] shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={projectimg1}  className="rounded-xl" />
                    </figure>
                    <div className=" text-left px-3 py-1">
                        
                        <p className='text-sm'>Ract-app</p>
                        <h2 className="card-title">Food Mania online</h2>
                      
                    </div>
                </div>
                <div className="card w-96 bg-[#FFE3BF] shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={projectimg2}  className="rounded-xl" />
                    </figure>
                    <div className=" text-left px-3 py-1">
                        
                        <p className='text-sm'>Ract-app</p>
                        <h2 className="card-title">Toursim Planner</h2>
                      
                    </div>
                </div>
                <div className="card w-96 bg-[#FFE3BF] shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={projectimg3}  className="rounded-xl" />
                    </figure>
                    <div className=" text-left px-3 py-1">
                        
                        <p className='text-sm'>XHTML</p>
                        <h2 className="card-title">Email Template design</h2>
                      
                    </div>
                </div>
                <div className="card w-96 bg-[#FFE3BF] shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={projectimg1}  className="rounded-xl" />
                    </figure>
                    <div className=" text-left px-3 py-1">
                        
                        <p className='text-sm'>Ract-app</p>
                        <h2 className="card-title">Food Mania online</h2>
                      
                    </div>
                </div>
               
            </div>

        </div>
    );
};

export default Work;