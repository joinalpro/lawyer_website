import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            <Sidebar/>
            <Navbar/>
           <div className="min-h-[calc(100vh-312px)]">
           <Outlet></Outlet>
           </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;