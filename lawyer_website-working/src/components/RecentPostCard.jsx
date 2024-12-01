/* eslint-disable react/prop-types */
import { FaAngleRight } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const RecentPostCard = ({ recent }) => {
    const { id, img, title, date } = recent
    return (
        <section className="mb-5">
            <div className="flex">
                <div className=" h-[130px]">
                    <img className="w-full h-full object-cover" src={img} alt="" />
                </div>
                <div className="flex border border-[#dadada] flex-col justify-between py-2 px-3">
                    <div className="flex text-[16px] text-kalo font-medium items-center gap-2">
                        <FiClock />
                        <p>{date}</p>
                    </div>
                    <h1 className="text-xl text-bla font-bold font-fontMartel">{title}</h1>
                    <NavLink to={`/blogs/${id}`}>
                        <button className="text-orange-300 flex items-center gap-1  font-bold">Read More <FaAngleRight /></button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default RecentPostCard;