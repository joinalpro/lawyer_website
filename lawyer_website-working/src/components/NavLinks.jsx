import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";


const NavLinks = () => {

    return (
        <>
            <div className="group">
                <div className="flex items-center gap-2">
                    <h1>pages</h1>
                    <IoIosArrowDown />
                </div>
                <div className="w-72  py-4 hidden group-hover:block hover:block text-start space-y-3 bg-white shadow-2xl px-4 absolute left-1/2">
                    <NavLink to="/caseResult">
                        <div className="flex duration-1000 hover:bg-bg_button py-2 text-bla px-4 items-center justify-between">
                            <p className="">Case Result </p>
                            <MdKeyboardArrowRight />
                        </div>
                    </NavLink>
                    <NavLink to="/testimonials">
                        <div className="flex duration-1000 hover:bg-bg_button py-2 text-bla px-4 items-center justify-between">
                            <p className="">Testimonials</p>
                            <MdKeyboardArrowRight />
                        </div>
                    </NavLink>
                    <NavLink to="/faqs">
                        <div className="flex duration-1000 hover:bg-bg_button py-2 text-bla px-4 items-center justify-between">
                            FAQs
                            <MdKeyboardArrowRight />
                        </div>
                    </NavLink>
                    <NavLink to="/blogs">
                        <div className="flex duration-1000 hover:bg-bg_button py-2 text-bla px-4 items-center justify-between">
                            <p className="">Blogs</p>
                            <MdKeyboardArrowRight />
                        </div>
                    </NavLink>
                    <NavLink to="/contact">
                        <div className="flex duration-1000 hover:bg-bg_button py-2 text-bla px-4 items-center justify-between">
                            <p className="">Contact</p>
                            <MdKeyboardArrowRight />
                        </div>
                    </NavLink>

                </div>
            </div>
        </>
    );
};

export default NavLinks;