import { BsTwitterX } from "react-icons/bs";
import {  FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-center bg-cover bg-black/60 bg-blend-overlay bg-serviceImg text-white">
            <footer className="lg:w-10/12 text-start  text-white/80 mx-auto px-2 py-20 lg:px-0 lg:flex md:grid md:grid-cols-3 md:gap-10 lg:gap-0 justify-between space-y-8 md:space-y-0">
                <div className="flex space-y-2 flex-col">
                    <h6 className="font-bold font-fontMartel text-xl mb-3">Logo</h6>
                    <p className="text-white/70 max-w-[250px]">Integer purus odio, placerat nec andi rhoncus in, ullamcorper nec dolorali aptent taciti sociosqu.</p>
                    <div className="flex items-center gap-4">
                    <button className="bg-white p-3  rounded-full text-blue-600">
                            <NavLink to="instagram">
                                <FaFacebookF className="text-xl" />
                            </NavLink>
                        </button>
                    <button className="bg-white p-3  rounded-full text-purple-600">
                            <NavLink to="instagram">
                                <GrInstagram className="text-xl" />
                            </NavLink>
                        </button>
                        <button className="bg-white p-3  my-3 rounded-full text-black">
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
                    <h5 className="font-bold font-fontMartel text-xl text-white/95">Open Hour</h5>
                    <p className="text-white/60">Monday To Saturday, 9.00 AM - 10.30 PM</p>
                </div>
                <div>
                <h6 className="font-bold text-xl font-fontMartel mb-3">Out service</h6>
                  <div className="space-y-3">
                  <p className="link link-hover">Criminal Lawyer</p>
                    <p className="link link-hover">Business Law</p>
                    <p className="link link-hover">Money Case</p>
                    <p className="link link-hover">Copyright</p>
                    <p className="link link-hover">Family Law</p>
                    <p className="link link-hover">Civil Litigation</p>
                    <p className="link link-hover">Real State Law</p>
                  </div>
                </div>
                <div className="flex space-y-2 flex-col">
                <h6 className="font-bold text-xl font-fontMartel mb-3">Quick Links</h6>
                    <Link className="link link-hover">About Us</Link>
                    <Link className="link link-hover">Service</Link>
                    <Link className="link link-hover">Case Results</Link>
                    <Link className="link link-hover">Testimonials </Link>
                    <Link className="link link-hover">FAQs</Link>
                    <Link className="link link-hover">Blogs</Link>
                    <Link className="link link-hover">Contact Us</Link>
                </div>
                <div className="flex flex-col">
                <h6 className="font-bold text-xl font-fontMartel mb-3">Out service</h6>
                <div className="mt-6 space-y-4">
                                <div className="flex items-center gap-2">
                                    <MdEmail className="text-xl text-orange-400" />
                                    <p className="text-white/70">help@info.com</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPhone className="text-xl text-orange-400" />
                                    <p className="text-white/70">+1 234 456 678 89</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLocationDot className="text-xl text-orange-400" />
                                    <p className="text-white/70">3064 Schinner Village <br /> Suite 621</p>
                                </div>
                              

                            </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer