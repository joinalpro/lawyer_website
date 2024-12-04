import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle'
import CaseResultCard from '../components/CaseResultCard';
import OurProces from '../components/OurProces';
import BookAnAppointment from '../components/BookAnAppointment';
const CaseResult = () => {
    const caseAllData = useLoaderData();
    const {caseData, services} = caseAllData;
    console.log(caseData, services);
    return (
        <section>
            {/* title section */}
            <div className=''>
                <SectionTitle title="Home > Case Result" />
            </div>
            {/* case result content */}
            <div className="text-center mt-10">
                <p className="text-bla text-[15px] font-bold animate__animated animate__bounce animate__slower">Here is My Best Work</p>
                <h2 className="text-3xl text-bla font-bold font-fontMartel">Our Resent Case Results</h2>
            </div>
            {/* case result data map kore dekhano holo */}
            <div className='lg:w-10/12 my-8 mx-auto px-2 lg:px-0 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    caseData.map(work => <CaseResultCard key={work.id} work={work}></CaseResultCard>)
                }
            </div>
            {/* our process */}
            <OurProces/>
            {/* Book an apointment */}
            <BookAnAppointment services={services}/>
        </section>
    );
};

export default CaseResult;