import React from 'react';
import { RiGraduationCapLine } from "react-icons/ri";
import projectimg1 from '../../../assets/foodmania.png'
import projectimg2 from '../../../assets/tourism.png'
import projectimg3 from '../../../assets/email.png'
import projectimg4 from '../../../assets/doctors-portal.png'

const Work = () => {
    return (
        <div className="lg:h-screen" >
            <h1 className="lg:text-6xl text-4xl font-semibold mt-5 lg:ms-10 ms-5 ">Portfolio  </h1>
            <div className=' grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-5 p-3 lg:mx-8 mt-10 '>
                <div className="card lg:96 bg-[#FFE3BF] shadow-xl">
                    <a target="blank" href="https://food-mania-sylhet.web.app/">
                        <figure className="px-3 pt-3">
                            <img src={projectimg1} className="rounded-xl" />
                        </figure>
                        <div className=" text-left px-3 py-1">

                            <p className='text-sm'>Fullstack Web ( MERN)</p>
                            <h2 className="card-title">Food Mania online</h2>

                        </div>
                    </a>

                </div>
                <div className="card lg:96 bg-[#FFE3BF] shadow-xl">
                    <a target="blank" href="https://tourism-planner-231.web.app/">
                        <figure className="px-3 pt-3">
                            <img src={projectimg2} className="rounded-xl" />
                        </figure>
                        <div className=" text-left px-3 py-1">

                            <p className='text-sm'>Fullstack Web ( MERN)</p>
                            <h2 className="card-title">Toursim Planner</h2>

                        </div>
                    </a>

                </div>

                <div className="card lg:96 bg-[#FFE3BF] shadow-xl">
                    <a target="blank" href="https://new-doctors.web.app/">
                        <figure className="px-3 pt-3">
                            <img src={projectimg4} className="rounded-xl" />
                        </figure>
                        <div className=" text-left px-3 py-1">

                            <p className='text-sm'>Fullstack Web ( MERN)</p>
                            <h2 className="card-title">Doctors Portal</h2>

                        </div>
                    </a>

                </div>

                <div className="card lg:96 bg-[#FFE3BF] shadow-xl">
                    <a target="blank" href="https://jhsayem021.github.io/JhonAcademy1/John-25.html">
                        <figure className="px-3 pt-3">
                            <img src={projectimg3} className="rounded-xl" />
                        </figure>
                        <div className=" text-left px-3 py-1">

                            <p className='text-sm'>XHTML</p>
                            <h2 className="card-title">Email Template design</h2>

                        </div>
                    </a>

                </div>

            </div>

        </div>
    );
};

export default Work;