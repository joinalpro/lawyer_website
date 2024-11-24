import Aos from "aos";
import "aos/dist/aos.css" 
import { useEffect } from "react";
import borderDash from '../assets/border-dash.png'

const OurProcess = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="md:w-10/12 mx-auto ">
            <div className="mt-12 mb-44 px-2 lg:px-0">
                <div className="text-center space-y-2 px-5">
                    <h2 className="text-xl font-fontMartel font-bold">Our Process</h2>
                    <p className="text-2xl  font-bold font-fontMartel text-[#1c0c3a]">How We Work</p>
                    <p className="text-gray-500">Hero Section: A visually striking area at the top of the page </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5  lg:gap-5">

                    <div data-aos="zoom-in-right" className="mb-24 lg:mb-0">
                        <div className="border  flex flex-col justify-center text-center py-4 space-y-2 px-5 bg-[#ffffff] shadow">
                            <h2 className="font-fontMartel font-bold text-[#1c0c3a] text-2xl">Find Our Branch On Your City Area</h2>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been </p>
                            <div className='absolute border-b-2 border-r-2 rotate-45 z-10 w-8 h-8  bg-white  -bottom-4 right-1/2'>
                            </div>
                            <div className=" absolute -bottom-[84px] right-[48%] flex justify-center items-center font-bold w-12 h-12 -rotate-45 text-2xl bg-[#f2af60]">
                                <p className="rotate-45 ">1</p>
                            </div>
                            <div className="hidden lg:block absolute lg:-bottom-[110px] -right-40">
                                <img className="lg:w-[360px]" src={borderDash} alt="" />
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" className="mb-24 md:mb-0">
                        <div className="border flex flex-col justify-center text-center py-4 space-y-2 px-5 relative bg-[#ffffff] shadow">
                            <h2 className="font-fontMartel text-[#1c0c3a] font-bold text-2xl ">Lets Make Consultation With Us</h2>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been </p>
                            <div className='absolute border-b-2 border-r-2 rotate-45 z-10 w-8 h-8  bg-white  -bottom-[17px] right-1/2'>
                            </div>
                            <div className=" absolute -bottom-[84px] right-[48%] flex justify-center items-center font-bold w-12 h-12 -rotate-45 text-2xl bg-[#f2af60]">
                                <p className="rotate-45 ">2</p>
                            </div>
                            <div className="hidden lg:flex absolute  -bottom-[110px] -right-40">
                                <img className="lg:w-[360px]" src={borderDash} alt="" />
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-left">
                        <div className="border flex flex-col justify-center text-center py-4 space-y-2 px-5 relative bg-[#ffffff] shadow">
                            <h2 className="font-fontMartel text-[#1c0c3a] font-bold text-2xl">We Make Solution For Your Case</h2>
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been </p>
                            <div className='absolute border-b-2 border-r-2 rotate-45 z-10 w-8 h-8  bg-white  -bottom-[17px] right-1/2'>
                            </div>
                            <div className=" absolute -bottom-[84px] right-[48%] flex justify-center items-center font-bold w-12 h-12 -rotate-45 text-2xl bg-[#f2af60]">
                                <p className="rotate-45 ">3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurProcess;