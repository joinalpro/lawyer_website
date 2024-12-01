import { FcReading } from "react-icons/fc";
import { FiClock } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";

const RecentPostDetails = () => {
    const recentData = useLoaderData();
   
    return (
        <section>
            <div className="">
                <img className="w-full object-cover" src={recentData.img} alt="" />

            </div>
            <div className="px-4 pb-3 border border-gray-400">
                <div className="flex items-center mt-4 gap-10">
                    <div className="flex gap-2 items-center text-kalo ">
                        <FiClock />
                        <p>{recentData.date}</p>
                    </div>
                    <p className="font-bold font-fontMartel text-bla">Name: <span className="text-bla">{recentData.author}</span></p>
                </div>
                <h1 className="text-2xl font-bold font-fontMartel text-bla mt-2">{recentData.title}</h1>
                <p className="text-kalo mb-2 font-medium mt-4 max-w-[600px]">{recentData.description}</p>
                <div>
                    {
                        recentData.tags.map((tag, index) => <ul key={index}>
                            <li className="text-gray-500">{index + 1}. {tag}</li>
                        </ul>)
                    }
                </div>
                <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold font-fontMartel text-bla mt-4">{recentData.category}</h4>
                    <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-500">{recentData.read_time}</p>
                        <button className="text-2xl border-2 border-orange-400 p-2 rounded-full">
                            <FcReading />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentPostDetails;