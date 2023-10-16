import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";
import Profile from "../Pages/Shared/Profile/Profile";

import DashNav from "../Pages/Shared/DashNav/DashNav";
import './Main.css'
const Main = () => {


    return (
        <div className="h-full bg-[#F2F5F9] ">
            <Navber></Navber>
            <DashNav></DashNav>

            <div className="  bg-[#F2F5F9]" >
               
                <div className="drawer lg:drawer-open  ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex  justify-center ms-8 h-full ">
                    {/* Page content here */}

                    <div className="drawer  ">
                        
                        <div  className="drawer-content flex flex-col  bg-white rounded-3xl ">
                            {/* Navbar */}
                          
                            {/* Page content here */}

                            <Outlet></Outlet>
                        </div>
                       
                    </div>

                </div>
                <div className="drawer-side h-full rounded-3xl ">
                    
                    <Profile></Profile>

                </div>
                </div>
            </div>
        </div>
    );
};

export default Main;