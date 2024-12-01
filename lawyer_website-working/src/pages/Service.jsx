import { useLoaderData } from "react-router-dom";
import ServiceCart from "../components/ServiceCart";
import OurProces from "../components/OurProces";
import SectionTitle from "../components/SectionTitle";
import BookAnAppointment from "../components/BookAnAppointment";

const Service = () => {
    const services = useLoaderData()
    // console.log(services);
    return (
        <section>
            {/* section title */} 
          
            <SectionTitle  title="Home > Service"/>
            <div className="text-center space-y-1 mt-10">
                <p className="text-bla font-bold">Our Services</p>
                <h3 className="text-3xl font-bold font-fontMartel">We Provided Legal & Lawyer Services</h3>
                <p className="text-kalo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
            </div>
           <div className=" mt-8 lg:w-10/12 mx-auto px-2 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                services.map(service => <ServiceCart key={service.id} service={service}></ServiceCart>)
              }
           </div>
              {/* our process */}
              <OurProces/>
              {/* Book an Appointment */}
       
            <BookAnAppointment services={services}></BookAnAppointment>
            
        </section>
    );
};

export default Service;