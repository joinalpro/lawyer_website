import { Link, NavLink } from "react-router-dom";
import navLogo from '../assets/navbar.png'
import { FiArrowRightCircle } from "react-icons/fi";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import NavLinks from "./NavLinks";



const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = <>
        <NavLink className={({ isActive }) => isActive ? 'text-orange-500 ' : 'hover:text-orange-500'} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-orange-500 ' : 'hover:text-orange-500'} to='/about'>About Us</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-orange-500 ' : 'hover:text-orange-500'} to='/service'>Sevice</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-orange-500 ' : 'hover:text-orange-500'} to='/ourAttorneys'>Our Attorneys</NavLink>
        <div>
         <NavLinks></NavLinks>
        </div>
    </>
    return (
        <div className="bg-[#ffffff] shadow shadow-white backdrop-blur-sm mt-8 md:mt-0 fixed w-full z-50">
            <div className="navbar lg:w-[1200px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className={`btn p-0 btn-ghost lg:hidden `}>
                            {
                                open ? <IoMdClose className="text-2xl" /> : <IoMenu className="text-2xl" />
                            }
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 gap-5 pl-4  shadow ${open ? 'left-0' : '-left-80'}`}>
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <div className="border-2 md:flex hidden border-dashed">
                            <img src={navLogo} alt="" />
                        </div>
                        <div>
                            <h4 className="md:text-2xl md:leading-3 border-b-2 border-t-2 border-orange-400 py-2">Kamal & Associates</h4>
                            <p className="text-orange-400 hidden md:flex"><small>Barristers, Advocates & Legal Consultants</small></p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-6 menu-horizontal">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/contact">
                        <h1 className="py-3 md:px-7 px-4 flex items-center gap-2 font-bold bg-[#f2af60]">Talk To Lawyer
                            <FiArrowRightCircle className="text-xl" />
                        </h1>
                    </Link>

                    {/*  */}

                </div>
            </div>
        </div>
    );
};

export default Navbar;