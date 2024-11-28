/* eslint-disable react/prop-types */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import Modal from "./Modal";

const BookAnAppointment = ({ services }) => {
    const location = useLocation()
    
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
    };
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className={location.pathname === '/' ? `bg-serviceImg bg-blend-overlay bg-black/70 bg-no-repeat bg-cover bg-center` : 'bg-[#f9f9f9]'}>
            <div className="lg:w-10/12 flex flex-col lg:flex-row py-20 gap-20 mx-auto px-2 lg:px-0 ">
                {/* slider */}
                <div className="lg:w-[60%]">
                    {/* text contant */}
                    <div className={`lg:pr-52  md:pr-12  space-y-5 ${location.pathname == '/' ? 'text-[#ffffff]' : 'text-bla'}`}>
                        <p className="text-[18px] font-fontMartel font-bold">Book an Appointment</p>
                        <h1 className="md:text-4xl text-xl font-bold font-fontMartel">Legal Advice Online From Top Lawyers</h1>
                        <div className="flex items-center gap-3">
                            <button className="bg-bg_button text-white p-1"><FaCheck /></button>
                            <p className="">Affordable legal solutions from senior lawyers. Full litigation, documentation and support</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="bg-bg_button text-white p-1"><FaCheck /></button>
                            <p className="">Guaranteed satisfaction or your money back</p>
                        </div>
                    </div>
                    {/* slider part show medium device and lg device*/}
                    <div className="text-center lg:mt-20 md:mt-8 md:w-[85%] lg:w-auto mx-auto hidden md:block">
                        <Slider {...settings}>
                            {
                                services.map(d => <div className=" bg-white py-4" key={d.id}>
                                    <h1 className="text-bla text-[18px] font-bold">{d.category}</h1>
                                    <p><span className="text-kalo font-bold">${d.price}</span> For a <span>{d.time}</span> min</p>
                                    <NavLink>
                                        <button className="hover:bg-bg_button border border-[#f1ae60] mt-2 px-12 py-2 text-bla font-bold ">Consult Now</button>
                                    </NavLink>
                                </div>)
                            }
                        </Slider>
                    </div>
                    {/* slider part show mobail device*/}
                    <div className="text-center mt-4 w-[80%] mx-auto md:hidden block">
                        <Slider {...setting}>
                            {
                                services.map(d => <div className=" bg-white py-4" key={d.id}>
                                    <h1 className="text-bla text-[18px] font-bold">{d.category}</h1>
                                    <p><span className="text-kalo font-bold">${d.price}</span> For a <span>{d.time}</span> min</p>
                                    <NavLink>
                                        <button className="hover:bg-bg_button border border-[#f1ae60] mt-2 px-12 py-2 text-bla font-bold ">Consult Now</button>
                                    </NavLink>
                                </div>)
                            }
                        </Slider>
                    </div>
                </div>
                {/* get Stard */}
                <div className="p-3 w-full bg-[#ffffff] ">
                    <h2 className="text-2xl font-bold font-fontMartel text-center text-[#1c0c3a]">Get Started</h2>
                    {/* input full name */}
                    <label>
                        <span className="text-kalo font-semibold">Full Name</span>
                        <input type="text" className="w-full mt-1 font-bold rounded-xl bg-[#f9f9f9] border text-[#1c0c3a] outline-none py-3 px-4 " placeholder="Enter full name" />
                    </label>
                    {/* input full name */}
                    <div className="mt-4">
                        <label className="">
                            <span className="text-kalo font-semibold">Phone Number</span>
                            <input type="text" className="w-full border mt-1 font-bold rounded-xl bg-[#f9f9f9] text-[#1c0c3a] outline-none py-3 px-4 " placeholder="Enter phone number" />
                        </label>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {/* service */}
                    <div className="mt-4">
                        <label className="">
                            <span className="text-kalo font-semibold">Service</span>
                            <input type="text" className="w-full border mt-1 font-semibold rounded-xl bg-[#f6f2e2] text-[#1c0c3a] outline-none py-3 px-4 " placeholder="service" />
                        </label>
                    </div>
                        {/* Amout */}
                    <div className="mt-4">
                        <label className="">
                            <span className="text-kalo font-semibold">Amout</span>
                            <input type="text" className="w-full border mt-1 font-bold rounded-xl bg-[#f6f2e2] text-[#1c0c3a] outline-none py-3 px-4 " placeholder="$" />
                        </label>
                    </div>
                        {/* Date */}
                    <div className="">
                        <label className="">
                            <span className="text-kalo font-semibold">Date</span>
                            <input type="date" className="w-full border mt-1 font-bold rounded-xl bg-[#f6f2e2] text-[#1c0c3a] outline-none py-3 px-4 " placeholder="Date" />
                        </label>
                    </div>
                        {/* Time */}
                    <div className="">
                        <label className="">
                            <span className="text-kalo font-semibold">Time</span>
                            <input type="time" className="w-full border mt-1 font-bold rounded-xl bg-[#f6f2e2] text-[#1c0c3a] outline-none py-3 px-4 " placeholder="Time" />
                        </label>
                    </div>
                    </div>
                    <button 
                    onClick={() => document.getElementById('my_modal_5').showModal()}
                    className="flex mt-4 justify-center items-center gap-2 font-bold text-bla bg-bg_button w-full py-3 text-[17px]">Submit Request <FiArrowRightCircle className="text-xl"/></button>
                </div>
            </div>
            <Modal/>
        </section>
    );
};

export default BookAnAppointment