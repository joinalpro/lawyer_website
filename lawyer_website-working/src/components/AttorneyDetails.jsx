import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import OurProces from "./OurProces";
import BookAnAppointment from "./BookAnAppointment";


const AttorneyDetails = () => {
    const attorneyAllData = useLoaderData();
    const {attorneyData, data} = attorneyAllData;
  
    const { name, img, category, number, email, location, years , about} = attorneyData
    return (
        <main>
            <SectionTitle title={`Home>Service>${attorneyData.name}`} />
            {/* details data show here */}
            <section className="lg:w-10/12 mx-auto px-2 my-12 lg:px-0">
                <div>
                    <div className="flex gap-8 flex-col lg:flex-row">
                        {/* details contant */}
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl font-bold font-fontMartel text-bla">{name}</h1>
                            <p className="text-kalo font-semibold mt-2">{category}</p>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center gap-2">
                                    <FaPhone className="text-xl text-orange-400" />
                                    <p className="text-bla">{number}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdEmail className="text-xl text-orange-400" />
                                    <p className="text-bla">{email}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLocationDot className="text-xl text-orange-400" />
                                    <p className="text-bla">{location}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <IoShieldCheckmarkSharp className="text-xl text-orange-400" />
                                    <p className="text-bla">{years} Years Experience</p>
                                </div>

                            </div>
                            <div>
                                <p className="text-xl mt-6 mb-2 font-bold text-bla">About Me</p>
                                <p className="text-kalo">{about}</p>
                            </div>

                        </div>
                        {/* details img */}
                        <div className="lg:w-1/2 h-[400px] rounded-xl">
                            <img className="w-full h-full object-cover md:object-contain rounded-xl" src={img} alt="" />
                        </div>
                    </div>
                </div>
                {/* Our Process */}
            </section>
            <div className="mt-16">
          <OurProces/>
          </div>
          {/* Book an Appointment */}
          <BookAnAppointment services={data}/>
        </main>
    );
};

export default AttorneyDetails;