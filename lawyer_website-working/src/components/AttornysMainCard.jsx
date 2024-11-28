/* eslint-disable react/prop-types */
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { NavLink } from "react-router-dom";


const AttornysMainCard = ({ attorney }) => {
    const { img, category, name , id} = attorney
    return (
       
            <div  style={{ backgroundImage: `url('${img}')` }} className="h-[350px] shadow-xl bg-no-repeat bg-cover relative bg-center group overflow-hidden p-3 bg-black/25 hover:bg-black/60 hover:duration-500 bg-blend-overlay">
                {/* social media icons */}
                <div className="group-hover:block lg:hidden  relative">
                    <div className="absolute right-0">
                        <button className="bg-white p-3 block rounded-full text-orange-400">
                            <NavLink to="instagram">
                                <GrInstagram className="text-xl" />
                            </NavLink>
                        </button>
                        <button className="bg-white p-3 block my-3 rounded-full text-black">
                            <NavLink to="twitter">
                                <BsTwitterX className="text-xl" />
                            </NavLink>
                        </button>
                        <button className="bg-white p-3 rounded-full text-blue-600">
                            <NavLink to="linkedin">
                                <FaLinkedinIn className="text-xl" />
                            </NavLink>
                        </button>
                    </div>
                </div>
                <div className="relative w-[100%] -bottom-[258px]">
                <NavLink to={`/attorneyDetails/${id}`}>
                    <button className="bg-[#f2af60] w-full py-2">
                        <span className="text-xl font-bold font-fontMartel text-bla">{name}</span>
                        <p>{category}</p>
                    </button>
                </NavLink>
                </div>
            </div>
       
    );
};

export default AttornysMainCard;