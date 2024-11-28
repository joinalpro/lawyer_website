/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const CategoryTags = ({ categoryTagsBtn }) => {

    return (
        <div className="md:flex grid grid-cols-2 lg:mb-10 flex-wrap gap-3 md:gap-4">
            {
                categoryTagsBtn.map((tagsBtn, index) => <div className="md:flex mb-7 md:mb-0" key={index}>
        
                  <NavLink to={`/blogs/${tagsBtn.category}`}
                        className={({ isActive }) => isActive ? 'bg-orange-400 text-white  content-center font-bold w-full px-4 py-3 rounded-none' : 'text-[#344054] border shadow  content-center font-bold w-full py-3  px-4'} >
                            <button className="w-[80%] md:w-full">{tagsBtn.category}</button>
                        </NavLink>
              
                </div>)
            }
        </div>
    );
};

export default CategoryTags;