import React from 'react';
import { BiCodeAlt } from "react-icons/bi";
const Home = () => {
    return (
        <div className='ms-10 '>
            <h1 className="text-6xl font-semibold mt-5">About me</h1>
            <div className='mt-5'>
                <p className='text-xl'>Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
                    full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                    My journey in the world of web development has been nothing short of exhilarating, and
                    I constantly strive to enhance my skills and embrace emerging trends in the industry.</p>
            </div>
            <h3 className="text-4xl my-4">What we do</h3>
            <div className='grid grid-cols-2 gap-4'>
                <div className="card w-96 bg-[#FFEBD1] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"><BiCodeAlt className='text-red-600 ' /> Web Developer</h2>
                        <p>As a developer, I find myself most
                            captivated by the power and flexibility of
                            NEXT.js. I'm always eager to dive into new
                            projects that leverage NEXT.js and
                            discover innovative ways to create fast,
                            </p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#F2F7FC] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"><BiCodeAlt  className='text-[#FF9C1A] ' /> App Development</h2>
                        <p>With a focus on user-centric design and
cutting-edge technologies, I thrive on 
building intuitive and efficient apps 
that make a positive impact on people's 
lives. Let's turn ideas into reality and 
shape the future together.
                            </p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#F2F7FC] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"><BiCodeAlt className='text-[#FF9C1A] ' /> UI/UX Designing</h2>
                        <p>Crafting visually appealing and intuitive user
interfaces that offer a delightful user 
experience is something I'm truly fanatic 
about.
                            </p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#FFEBD1] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title  "><BiCodeAlt className=' text-red-600 ' /> Mentorship</h2>
                        <p>I have also found great joy in sharing my 
knowledge with others. Being a technical 
mentor allows me to give back to the 
community that has supported me 
throughout my career. 
                            </p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;