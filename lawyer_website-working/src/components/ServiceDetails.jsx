import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import OurProces from "./OurProces";
import BookAnAppointment from "./BookAnAppointment";


const ServiceDetails = () => {
    const {detailsData, data} = useLoaderData()
    return (
        <main>
            <SectionTitle title={`Home>Service>${detailsData.category}`}/>
            {/* details data show here */}
           <section className="lg:w-10/12 mx-auto px-2 mt-12 lg:px-0">
          <div>
          <div className="flex gap-8 flex-col lg:flex-row"> 
                  {/* details contant */}
                  <div className="lg:w-1/2">
                    <h1 className="text-4xl font-bold font-fontMartel text-bla">{detailsData.category} Service</h1>
                   <div className="mt-6 space-y-4">
                   <p className="text-gray-600">{detailsData.subtitle1}</p>
                   <p className="text-gray-600">{detailsData.subtitle2}</p>
                   <p className="text-kalo">{detailsData.subtitle3}</p>
                   </div>
                    
                </div>
                {/* details img */}
                <div className="lg:w-1/2">
                    <img  className="w-full object-cover h-full rounded-xl" src={detailsData.main_img} alt="" />
                </div>
            </div>
            {/* description */}
            <p className="text-gray-600 mt-4 flex overflow-auto">{detailsData.description}</p>
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

export default ServiceDetails;