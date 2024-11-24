import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "aos/dist/aos.css"

const MainLayout = () => {
    return (
        <div>
         <div>
         <div className="h-[52px]">
         <Sidebar/>
         </div>
         <div className="h-[72px] mt-0">
         <Navbar/>
         </div>
         </div>
           <div className="min-h-[calc(100vh-312px)]">
           <Outlet></Outlet>
           </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;