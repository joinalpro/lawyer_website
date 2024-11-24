/* eslint-disable react/prop-types */

const SectionTitle = ({title}) => {
    return (
        <div className="bg-[#f3f3f3] py-6 mt-6 md:mt-0">
            <div className="lg:w-10/12 mx-auto px-2 lg:px-0">
            <h1 className="text-xl font-bold font-fontMartel">{title}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;