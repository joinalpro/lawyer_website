/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";


const BlogsCard = ({blog}) => {
   
    const {img,title , date, id} = blog;
    return (
        <div className="bg-base-100 flex flex-col shadow-xl">
            <figure className="h-[230px]">
                <img 
                    className="h-full object-cover object-center bg-center w-full"
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="px-4 py-3 flex-grow">
                <p className="text-kalo font-semibold">{date}</p>
                <h2 className="card-title text-bla">{title}</h2>
                <NavLink to={`/blogDetails/${id}`}>
                    <button className="text-orange-300 flex items-center gap-1 mt-2 font-bold">Read More <FaAngleRight/></button>
                </NavLink>
            </div>
        </div>
    );
};

export default BlogsCard;