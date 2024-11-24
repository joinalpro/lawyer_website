/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCart = ({service}) => {
    const {category, logo, title, id} = service
    return (
      <Link to={`/serviceDetais/${id}`}>
        <div data-aos="flip-up" className="p-6 border-2 text-[#1c0c3a] hover:text-gray-100 hover:bg-serviceImg bg-cover bg-center bg-no-repeat bg-blend-overlay hover:bg-black/40 duration-500 transition-all  bg-[#ffffff] ">
        <div className="">
          <div className="flex items-center gap-2">
            <figure>
                <img className="w-12 border-2 border-dashed" src={logo} alt="" />
            </figure>
            <h1 className="md:text-2xl  font-bold  font-fontMartel">{category}</h1>
          </div>
          <p className="mt-6">{title}</p>
        </div>
      </div>
      </Link>
    );
};

export default ServiceCart;