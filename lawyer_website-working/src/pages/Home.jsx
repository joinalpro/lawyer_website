import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HappyClient from "../components/HappyClient";
import OurProces from "../components/OurProces";
import ReadMoreAbout from "../components/ReadMoreAbout";
import ServiceCart from "../components/ServiceCart";
import { FiArrowRightCircle } from "react-icons/fi";
import BookAnAppointment from "../components/BookAnAppointment";
import AttorneyCart from "../components/AttorneyCart";
import ClientReviewCard from "../components/ClientReviewCard";

const Home = () => {
    const servicesData = useLoaderData()

    const { services, clientData } = servicesData;


    return (
        <div>
            <Banner />
            <HappyClient />
            <ReadMoreAbout />
            <OurProces />
            {/* our service */}
            <section className="bg-[#f9f9f9] py-16">
                <div className="lg:w-10/12 mx-auto px-2 lg:px-0">
                    {/*  */}
                    <div className="mb-10">
                        <div>
                            <p className="text-bla font-bold">Our Services</p>
                            <h2 className="text-3xl mt-3 font-bold font-fontMartel">We Provided Legal & Lawyer Services</h2>
                        </div>
                        <div className="lg:flex  md:items-center md:justify-between">
                            <p className="text-kalo my-3 lg:my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tell us, luctus nec ullamcorper mattis</p>
                            <Link to="/service">
                                <button className="flex items-center gap-3 bg-bg_button  px-4 py-3 font-bold text-bla">Talk To Lawyer <FiArrowRightCircle className="text-xl" /></button>
                            </Link>
                        </div>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            services.map(service => <ServiceCart key={service.id} service={service}></ServiceCart>)
                        }
                    </div>
                </div>
            </section>
            {/* BookAnAppointment */}
            <BookAnAppointment services={services} />
            {/* our Attorneys */}
            <section className="lg:w-10/12 my-16 mx-auto px-2 lg:px-0">
                <div className="text-center">
                    <p className="text-bla  text-[18px] font-bold">Our Attorneys</p>
                    <h2 className="text-3xl text-bla mt-3 font-bold font-fontMartel">Our Intellectual Lawyer For You.</h2>
                    <p className="text-kalo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                </div>
                <div className="grid mt-5 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {
                        services.slice(0, 4).map(attorney => <AttorneyCart key={attorney.id} attorney={attorney}></AttorneyCart>)
                    }
                </div>
            </section>
            {/* client review section */}
            <main className="bg-[#f9f9f9] py-16">
                <section className="lg:w-10/12 mx-auto px-2 lg:px-0">
                    {/* client text contant */}
                    <div className="lg:flex justify-between items-center">
                        <div>
                            <p className="text-bla text-[18px] font-bold">Testimonials</p>
                            <h2 className="text-3xl text-bla mt-3 font-bold font-fontMartel">Know What they Say about Our Services.</h2>
                            <p className="text-kalo mt-2">We provide the highest-quality advice and legal insight in resolving issues.</p>
                        </div>
                        <div className="flex mt-5 lg:mt-0 lg:text-center itmes-center gap-5">
                           <div>
                            <h4 className="text-bla text-3xl font-bold font-fontMartel">320</h4>
                            <p className="text-kalo">Happy Client</p>
                           </div>
                           <div>
                            <h4 className="text-bla text-3xl font-bold font-fontMartel">4.5</h4>
                            <p className="text-kalo">Overall Rating</p>
                           </div>
                        
                        </div>
                    </div>
                    {/* client section map kore dekhano holo */}
                    <div className="grid mt-12 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            clientData.map(client => <ClientReviewCard key={client.id} client={client} ></ClientReviewCard>)
                        }
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;