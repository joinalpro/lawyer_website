import { useLoaderData } from "react-router-dom";
import ClientReviewCard from "./ClientReviewCard";
import OurProces from "./OurProces";
import BookAnAppointment from "./BookAnAppointment";
import SectionTitle from "./SectionTitle";


const Testimonials = () => {
    const clientDataAndSercieData = useLoaderData();
    const { clientData, services } = clientDataAndSercieData;

    return (
        <div className="">
            {/* title section */}
            <SectionTitle title="Home>Testimonials" />
            <div className="text-center mt-8">
                <p className="text-bla text-[18px] font-bold animate__animated animate__bounce animate__slower">Testimonials</p>
                <h2 className="text-3xl text-bla mt-3 font-bold font-fontMartel">Know What they Say about Our Services...</h2>
                <p className="text-kalo mt-2">We provide the highest-quality advice and legal insight in resolving issues.</p>
            </div>
            <div className="grid mt-12 gap-4 lg:w-10/12 mx-auto px-2 lg:px-0  md:grid-cols-3">
                {
                    clientData.map(client => <div className="mb-5" key={client.id}>
                        <ClientReviewCard client={client}></ClientReviewCard>
                    </div>)
                }
            </div>
            {/* out process */};
            <OurProces />
            {/*Book an Appointment*/}
            <BookAnAppointment services={services} />
        </div>
    );
};

export default Testimonials;