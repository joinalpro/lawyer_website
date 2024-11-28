import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import BookAnAppointment from "./BookAnAppointment";

const Contact = () => {
    const servicesData = useLoaderData();

    return (
        <div>
            {/* section title */}
            <SectionTitle title="Home>Contact Us"/>
            {/* Book an Appointment */}
            <BookAnAppointment services={servicesData}/>
        </div>
    );
};

export default Contact;