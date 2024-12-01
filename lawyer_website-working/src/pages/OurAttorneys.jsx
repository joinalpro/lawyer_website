import { useLoaderData } from "react-router-dom";
import AttornysMainCard from "../components/AttornysMainCard";
import SectionTitle from "../components/SectionTitle";
import OurProces from "../components/OurProces";
import BookAnAppointment from "../components/BookAnAppointment";

const OurAttorneys = () => {
    const serviceAttorney = useLoaderData();
    return (
        <main>
            {/* titel section */}
            <SectionTitle title="Home > Our Attorneys"/>
                <div className="lg:w-10/12 my-16 mx-auto px-2 lg:px-0 grid  gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {
                        serviceAttorney.map(attorney => <AttornysMainCard key={attorney.id} attorney={attorney}></AttornysMainCard>)
                    }
                </div>
                  {/* Our Process */}
           
          <div className="mt-16">
          <OurProces/>
          </div>
          {/* Book an Appointment */}
          <BookAnAppointment services={serviceAttorney}/>
        </main>
    );
};

export default OurAttorneys;