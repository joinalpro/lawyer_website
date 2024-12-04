import { useLoaderData } from "react-router-dom";
import FaqsCard from "./FaqsCard";
import SectionTitle from "./SectionTitle";
import OurProces from "./OurProces";
import BookAnAppointment from "./BookAnAppointment";


const Faqs = () => {
    const faqsDataAll = useLoaderData();
    const {faqsData, services} = faqsDataAll
    console.log(services);
    return (
        <section>
            <div>
                <SectionTitle title="Home/Faqs"></SectionTitle>
            </div>
            <div className="text-center my-10">
                <p className="text-bla  text-[18px] font-bold animate__animated animate__bounce animate__slower">FAQs</p>
                <h2 className="text-3xl text-bla mt-3 font-bold font-fontMartel">Frequently Asked Questions</h2>
                <p className="text-kalo">Answers to common questions we hear often · How much does an attorney cost</p>
            </div>
            {/* all faqs data show */}
            <div className="lg:w-8/12 my-16 mx-auto px-2 lg:px-0">
                {
                    faqsData.map(faqs => <FaqsCard key={faqs.id} faqs={faqs}></FaqsCard>)
                }
            </div>
            {/* our process */}
             <div>
                <OurProces/>
             </div>
             {/* Book an Appointment */}
                <BookAnAppointment services={services}/>
        </section>
    );
};

export default Faqs;