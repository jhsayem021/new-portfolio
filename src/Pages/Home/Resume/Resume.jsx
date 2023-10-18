import React from 'react';
import { RiGraduationCapLine } from "react-icons/ri";
const Resume = () => {
    return (
        <div className='lg:h-screen '>
           <h1 className="lg:text-6xl text-4xl font-semibold mt-5 lg:mx-10 ms-5">Resume  </h1> 
           <div className='grid lg:grid-cols-2 gap-10 lg:mx-10 mx-5'>
            <div className='py-4'>
                <h1 className='flex items-center text-2xl my-5'><RiGraduationCapLine className='me-3 text-red-500'/> Education</h1>
                <div className='bg-[#ffedd5] py-10 px-2 rounded-xl'>
                    <p className='text-slate-400'>2016-2023</p>
                    <h1 className='text-xl font-semibold'>Computer Science & Engineering </h1>
                    <h1 className='text-xl'> Metropolitan University, Sylhet </h1>
                </div>
                <div className='bg-[#ffedd5] mt-5 py-10 px-2 rounded-xl'>
                    <p className='text-slate-400'>2012-2014</p>
                    <h1 className='text-xl font-semibold'>Higher Secondary School Certificate </h1>
                    <h1 className='text-xl'>Sylhet Govt. High School, Sylhet  </h1>
                </div>
            </div>
            <div className='py-4'>
                <h1 className='flex items-center text-2xl my-5'><RiGraduationCapLine className='me-3 text-red-500'/> Experience</h1>
                <div className='bg-[#ffedd5] py-10 px-2 rounded-xl'>
                    <p className='text-slate-400'>2022 - Present</p>
                    <h1 className='text-xl font-semibold'> Email Frontend Design </h1>
                    <h1 className='text-xl'> Staff Asia Ltd, Sylhet </h1>
                </div>
                
            </div>
           </div>
           
           <div className='grid lg:grid-cols-2 gap-2  h-fit  bg-[#F8FBFB]  rounded-b-2xl '>
            <div className='py-4 mx-10'>
                <h1 className=' text-2xl my-5 font-semibold'> Work Skills</h1>
                <div className=' pt-5  flex flex-wrap  gap-5 text-center'>
                    
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">React.js</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Express.js</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Node.js</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">HTML 5</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">CSS 3</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Tailwind CSS</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Figma </div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">JavaScript</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Mongo DB</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">SQL</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Git</div>
                </div>
               
            </div>
            <div className='py-4 mx-10 '>
                <h1 className=' text-2xl my-5 font-semibold'> Soft Skills</h1>
                <div className=' pt-5 flex flex-wrap  gap-5 text-center '>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Time Management</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Mentorship</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Impeccable Communication</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Flexibility</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Research</div>
                    <div className="text-[16px] px-2 py-1 bg-slate-300 rounded-lg ">Writing</div>
                    
                </div>
               
            </div>
            
           </div>
          
        </div>
    );
};

export default Resume;