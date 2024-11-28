import { Link, NavLink, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HappyClient from "../components/HappyClient";
import OurProces from "../components/OurProces";
import ReadMoreAbout from "../components/ReadMoreAbout";
import ServiceCart from "../components/ServiceCart";
import { FiArrowRightCircle } from "react-icons/fi";
import BookAnAppointment from "../components/BookAnAppointment";
import AttorneyCart from "../components/AttorneyCart";
import ClientReviewCard from "../components/ClientReviewCard";
import FaqsCard from "../components/FaqsCard";
import BlogsCard from "../components/BlogsCard";


const Home = () => {
    const servicesData = useLoaderData()
    const { services, clientData, faqsData, blogData } = servicesData;
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
            {/* Testimonials client review section */}
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
                    <div className="grid gap-4 mt-10 md:grid-cols-3">
                        {
                            clientData.slice(0, 3).map((client) => <ClientReviewCard key={client.id} client={client} ></ClientReviewCard>)
                        }
                    </div>
                </section>
           
            </main>
            {/* faqs  */}
            <section>
                <div className="text-center my-10">
                    <p className="text-bla  text-[18px] font-bold">FAQs</p>
                    <h2 className="text-3xl text-bla mt-3 font-bold font-fontMartel">Frequently Asked Questions</h2>
                    <p className="text-kalo">Answers to common questions we hear often · How much does an attorney cost</p>
                </div>
                {/* faqs map  */}
                <div className="lg:w-8/12 my-16 mx-auto px-2 lg:px-0">
                    {
                        faqsData.slice(0, 5).map(faqs => <FaqsCard key={faqs.id} faqs={faqs}></FaqsCard>)
                    }
                    <NavLink to="/faqs">
                        <button className="flex items-center gap-3 mt-5 border-2 font-bold text-orange-300 border-orange-300 hover:bg-bg_button hover:text-bla py-2 px-5 mx-auto">Show All <FiArrowRightCircle className="text-xl" /></button>
                    </NavLink>
                </div>
            </section>
            {/* Blogs section */}
            <main className="bg-[#f9f9f9] py-16">
                <section className="lg:w-10/12 mx-auto px-2 lg:px-0">
                    {/* blogs contant */}
                    <div className="flex items-end justify-between">
                        <div className="f">
                            <p className="text-[18px] text-bla font-bold">News Blogs</p>
                            <h2 className="text-3xl mt-2 font-bold font-fontMartel text-bla">Our Latest News & Upcoming Blog</h2>
                        </div>
                        <div>
                            <Link to="/blogs">
                                <button className="flex items-center gap-3 bg-bg_button  px-4 py-3 font-bold text-bla">Show All <FiArrowRightCircle className="text-xl" /></button>
                            </Link>
                        </div>
                    </div>
                    {/* new blogs data show */}
                    <div className="grid mt-8 gap-4 md:grid-cols-3">
                        {
                            blogData.slice(0,3).map(blog => <BlogsCard key={blog.id} blog={blog}></BlogsCard>)
                        }
                    </div>
                </section>
            </main>

        </div>
    );
};

export default Home;