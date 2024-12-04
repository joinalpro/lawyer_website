import { Link } from "react-router-dom";
import bannerImg from '../assets/banner.png'
import { FiArrowRightCircle } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="bg-bannerImg mt-5 md:mt-0 bg-black/60 bg-blend-overlay  bg-no-repeat w-full bg-cover bg-center py-12">
            <div className="lg:w-10/12 text-white md:mx-auto px-2 lg:px-0">
                <div className="flex lg:gap-20 gap-4 flex-col md:flex-row items-center">
                    <div className="md:w-2/3 space-y-5">
                        <h1 className="lg:text-6xl text-3xl font-bold font-fontMartel animate__animated animate__backInLeft text-[#ffffff]  overflow-hidden">Unbelievable Solutions for all Legal Cases.</h1>
                        <p className="">A visually striking area at the top of the page featuring a headline, subheadline, and a call-to-action button to encourage </p>
                        <div className="flex items-center gap-6 animate__animated animate__bounce animate__slower">
                            <Link>
                                <button className="font-bold flex items-center gap-2 bg-bg_button px-6 py-3 text-black font-fontMartel ">Consult Now <FiArrowRightCircle className="text-xl"/></button>
                            </Link>
                            
                            <Link>
                                <button className="flex items-center gap-2"><span className="text-xl  pl-4 pr-3 py-3.5 rounded-full border-2 border-orange-400 text-orange-400"><FaPlay /></span> </button>
                                {/* <span className="font-semibold">Watch Now</span> */}
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/3 w-[80%] mr-1 border-l-2 border-gray-500 border-dashed border-t-2 border-r-2 pt-5 ">
                        <div className="bg-[#f2af60] -mr-1">
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;