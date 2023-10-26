import { Link, Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";
import Profile from "../Pages/Shared/Profile/Profile";
import { FiFileText, FiHome } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import DashNav from "../Pages/Shared/DashNav/DashNav";
import './Main.css'
const Main = () => {


    return (
        <div className="h-full bg-[#F2F5F9] ">
            <Navber></Navber>
            <DashNav></DashNav>

            <div className="  bg-[#F2F5F9]" >

                <div className="lg:flex ">
                    {/* <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> */}
                    <div className="h-fit rounded-3xl ">

                        <Profile></Profile>

                    </div>
                    <div className="lg:hidden sticky top-0 z-30" >
                        <div className="  bg-[#F2F5F9] my-8  ">

                            <div className="  border-2 rounded-xl py-2 mx-2">
                                <ul className="menu menu-horizontal gap-1 ">
                                    {/* Navbar menu content here */}
                                    <li>
                                        <Link className=" hover:bg-gradient-to-r from-[#EC1B09] to-[#FF9C1A] hover:text-white bg-[#E1E8EF]" to="/home" >
                                            <div className=" px-1 py-1" >
                                                <div className="flex justify-center"><FiHome className="text-xl" /></div>
                                                <div className="text-sm">Home</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className=" hover:bg-gradient-to-r from-[#EC1B09] to-[#FF9C1A] hover:text-white bg-[#E1E8EF]" to="/resume" >
                                            <div className=" px-1 py-1" >
                                                <div className="flex justify-center"><FiFileText className="text-xl" /></div>
                                                <div className="text-sm">
                                                    Resume</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className=" hover:bg-gradient-to-r from-[#EC1B09] to-[#FF9C1A] hover:text-white bg-[#E1E8EF]  " to="/work" >
                                            <div className=" px-1 py-1" >
                                                <div className="flex justify-center"><MdOutlineWorkOutline
                                                    className="text-xl" />
                                                </div>
                                                <div className="text-sm">
                                                    Work</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className=" hover:bg-gradient-to-r from-[#EC1B09] to-[#FF9C1A] hover:text-white bg-[#E1E8EF]" to="/contact" >
                                            <div className=" px-1 py-1" >
                                                <div className="flex justify-center"><BiSolidContact
                                                    className="text-xl" /></div>
                                                <div className="text-sm">
                                                    Contact</div>
                                            </div>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className=" flex  justify-center lg:ms-8  lg:h-[830px] ">
                        {/* Page content here */}

                        <div className=" flex flex-col lg:m-0 m-2 h-full bg-white rounded-3xl ">
                            {/* Navbar */}

                            {/* Page content here */}

                            <Outlet></Outlet>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;