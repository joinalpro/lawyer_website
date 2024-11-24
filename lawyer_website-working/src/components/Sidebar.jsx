import { IoMdMailUnread } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className="bg-[#1c0c3a] text-white mt-0 fixed w-full z-20 px-2 lg:px-0">
            <div className="lg:w-10/12 md:mx-auto flex flex-col md:flex-row justify-between py-2">

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Link><IoMdMailUnread className="text-xl" /></Link>
                        <Link><p>layers@gmail.com</p></Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link> <MdPhoneInTalk className="text-xl" /></Link>
                        <Link><p>+123-456-7891</p></Link>
                    </div>
                </div>
                {/* social media icons */}
                <div className="flex gap-2 mt-2 md:mt-0 items-center">
                    {/* facebook */}
                    <Link>
                    <button className="bg-white p-2 rounded-full text-blue-600">
                        <FaFacebookF/>
                    </button>
                    </Link>
                      {/* Instagram */}
                    <Link>
                    <button className="bg-white p-2 text-xl rounded-full text-orange-500 font-bold
                    ">
                        <FaInstagram/>
                    </button>
                    </Link>
                    <Link>
                      {/* Twitter */}
                    <button className="bg-white p-2 rounded-full text-black">
                        <BsTwitterX/>
                    </button>
                    </Link>
                    <Link>
                    <button className="bg-white p-2 rounded-full text-blue-500 ">
                        <FaLinkedinIn/>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;