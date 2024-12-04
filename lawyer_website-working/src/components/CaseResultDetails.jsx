import { FiClock } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";


const CaseResultDetails = () => {
    const caseDetailsData = useLoaderData();
    const { caseDetails } = caseDetailsData;
    const {
        image,
        clientName,
        serviceName,
        timeFrame,
        year, lawyer,
        // title,
        caseWinningProcess,
        clientDetails,
        description,
        category,
        date

    } = caseDetails
   
    const ourServices = [
        {name: "Business Law", link: '/service'},
        {name: "Money Case", link: '/service'},
        {name: "Copyright", link: '/service'},
        {name: "Family Law", link: '/service'},
        {name: "Civil Litigation", link: '/service'},
        {name: "Real State Law", link: '/service'},
        {name: "Legal Products", link: '/service'},
        {name: "Company Law", link: '/service'},
    ]

    return (
        <section>
            {/* case inof details  */}
            <div className="lg:w-10/12  grid gap-6 lg:grid-cols-12 my-16 mx-auto px-2 lg:px-0">
                <div className="lg:col-span-8">
                    <figure className="w-full h-[380px]">
                        <img className="w-full h-full object-cover" src={image} alt="" />
                    </figure>
                    {/* details content */}
                    <div className="px-5 pb-4 space-y-3 border border-[#dadada]">
                        <div className="flex mt-5 text-[16px] text-kalo font-medium items-center gap-2">
                            <FiClock />
                            <p>{date}</p>
                        </div>
                        <h1 className="text-[20px] font-bold text-bla font-fontMartel">{category}</h1>
                        <p className="text-kalo">{description}</p>
                        <h1 className="text-[20px] font-bold text-bla">Client</h1>
                        <p className="text-kalo">{clientDetails}</p>
                        <h1 className="text-[20px] font-bold text-bla ">caseWinningProcess</h1>
                        <div>
                            {
                                caseWinningProcess.map((process, index) => <div key={index}>
                                    <div className="flex">
                                        <p className="mb-2">
                                            <span className="text-[18px] text-bla font-bold font-fontMartel">{`step ${index + 1} : `}</span>
                                            <span>{process}</span>
                                        </p>
                                    </div>
                                </div>)
                            }
                        </div>

                    </div>
                </div>
                <div className=" lg:col-span-4">
                    {/*  */}
                    <div className="card rounded-none border border-gray-300 bg-base-100  shadow-3xl">
                        <div className="p-4">
                            <h2 className="card-title text-bla font-bold font-fontMartel">Case Info</h2>
                          <div className="flex gap-2 mt-3">
                          <div className="space-y-2">
                            <p className="font-medium text-kalo font-fontMartel">Client Name</p>
                            <p className="font-medium text-kalo font-fontMartel">Service Name</p>
                            <p className="font-medium text-kalo font-fontMartel">Time Frame</p>
                            <p className="font-medium text-kalo font-fontMartel">Year</p>
                            <p className="font-medium text-kalo font-fontMartel">Lawyer</p>
                           </div>
                          <div className="space-y-2">
                          <p className="font-semibold text-bla font-fontMartel">: {clientName}</p>
                          <p className="font-semibold text-bla font-fontMartel">: {serviceName}</p>
                          <p className="font-semibold text-bla font-fontMartel">: {timeFrame}</p>
                          <p className="font-semibold text-bla font-fontMartel">: {year}</p>
                          <p className="font-semibold text-bla font-fontMartel">: {lawyer}</p>
                           </div>
                          </div>
                        </div>
                    </div>
                    <div className="mt-4 border">
                        <h3 className="text-[24px] ml-3 mt-4 font-bold font-fontMartel text-bla">Our Services</h3>
                        <div>
                            {
                                ourServices.map((myservice , index)=> <div className="card rounded-none  hover:bg-orange-300 duration-1000 text-bla hover:text-gray-700  border-gray-300 bg-base-100  shadow-3xl" key={index}>
                                 <Link to={`${myservice.link}`}>
                                 <div className="mx-4 border-b flex justify-between py-3">
                                   <p className="text-[17px] font-semibold font-fontMartel ">{myservice.name}</p>
                                   <MdKeyboardArrowRight/>
                                   </div>
                                 </Link>
                                </div> )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseResultDetails;