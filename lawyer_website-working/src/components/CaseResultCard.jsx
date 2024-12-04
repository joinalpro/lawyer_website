/* eslint-disable react/prop-types */
import { LuArrowUpRight } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const CaseResultCard = ({ work }) => {
    const { id, img, title, date } = work
    console.log(work);
    return (
        <div className="card rounded-none bg-base-100 ">
            <figure style={{backgroundImage: `url('${img}')`}} className="h-[230px] w-full hover:bg-black/60 hover:bg-blend-overlay duration-500 group">
             <div className="hidden group-hover:block">
           <Link to={`/caseResultDetails/${id}`}>
           <button className="text-[#f2af60] font-bold border-2 border-[#f2af60] text-2xl p-3 rounded-full">
                    <LuArrowUpRight/>
                </button>
           </Link>
             </div>
            </figure>
            <div className="text-center py-4 border border-t-0 hover:border-none   border-[#dadada]">
                <h1 className="text-[20px] font-bold font-fontMartel text-[#1c0c3a]">{title}</h1>
                <div className="flex justify-center pt-2 text-[16px] text-kalo font-medium items-center gap-2">
                    <FiClock />
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default CaseResultCard;