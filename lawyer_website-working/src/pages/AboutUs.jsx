import SectionTitle from "../components/SectionTitle";
import aboutImg from '../assets/about.png'
import { IoMdPlay } from "react-icons/io";
import daripalla from '../assets/dariPalla.png'
import HappyClient from "../components/HappyClient";
import OurProces from "../components/OurProces";
import { Link, useLoaderData } from "react-router-dom";
import BookAnAppointment from "../components/BookAnAppointment";

const AboutUs = () => {
    const services = useLoaderData();
    return (
        <main>
            {/* section title */}
            <SectionTitle title="Home > About Us" />
            <section className="lg:w-10/12 my-16 mb-36 mx-auto px-2 lg:px-0">
                <div className="lg:flex gap-[68px] ">
                    <div className="lg:w-[50%] ">
                        <p className="text-[16px] font-bold text-bla mb-3">About Us</p>
                        <h1 className="text-[36px] leading-[45px] font-bold font-fontMartel text-bla">Get About our Law Firm & Learn About our Expertise.</h1>
                        <p className="text-kalo mt-5">Hero Section: A visually striking area at the top of the page featuring a headline, subheadline, and a call-to-action button to encourage visitors to learn more about your
                        </p>
                        <p className="text-kalo mt-3">Hero Section: A visually striking area at the top of the page featuring a headline, subheadline, and a call-to-action button to encourage visitors to learn more about your
                        </p>
                        <p className="text-kalo mt-3">Hero Section: A visually striking area at the top of the page featuring a headline, subheadline, and a call-to-action button to encourage visitors to learn more about your
                        </p>
                        <div className="mt-4 border p-4">
                            <p className="text-kalo">Tincidunt turpis sit amet imperdiet. Praesent Classei subheadline, and a call-to-actionconsequattincidunt turpis sit amet </p>
                            <div className="flex justify-between">
                                <div >
                                    <p className="text-kalo font-dancing text-xl mt-2 mb-2">Shahidul Islam</p>
                                    <p className="text-bla font-medium">Shaidul Islma, CEO-Founder</p>
                                </div>
                                <div className="flex items-end">
                                    <img className="w-[56px]" src={daripalla} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:w-[50%]">
                        <figure>
                            <img src={aboutImg} alt="" />
                        </figure>
                        <div>
                          <Link to="">
                          <button className="pluse z-10">
                                <IoMdPlay />
                            </button>
                          </Link>
                        </div>
                    </div>
                </div>

            </section>

          <div>
          <HappyClient />
          </div>
            {/* our process */}
            <OurProces/>
            {/* Book an apointment */}
            <BookAnAppointment services={services}/>
        </main>
    );
};

export default AboutUs;