/* eslint-disable react/prop-types */
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AttorneyCart = ({ attorney }) => {
    const { img, name, category } = attorney
    return (
    <NavLink to="/ourAttorneys">
            <div data-aos="zoom-in" style={{ backgroundImage: `url('${img}')` }} className="h-[350px] shadow-xl bg-no-repeat bg-cover relative bg-center group overflow-hidden p-3 bg-black/25 hover:bg-black/60 hover:duration-500 bg-blend-overlay">
            {/* social media icons */}
            <div  className="group-hover:block lg:hidden  relative">
                <div className="absolute right-0">
                <button  className="bg-white p-3 block rounded-full text-orange-400">
                    
                    <GrInstagram className="text-xl" />
                </button>
                <button className="bg-white p-3 block my-3 rounded-full text-black">
                   
                    <BsTwitterX className="text-xl" />
                </button>
                <button className="bg-white p-3 rounded-full text-blue-600">
                  
                    <FaLinkedinIn className="text-xl" />
                </button>
                </div>
            </div>
            <div className="relative w-[100%] -bottom-[258px]">
                <button className="bg-white/95 hover:bg-[#f2af60] w-full py-2">
                    <span className="text-xl font-bold font-fontMartel text-bla">{name}</span>
                    <p>{category}</p>
                </button>
            </div>
        </div>
    </NavLink>
    );
};

export default AttorneyCart;