import { Link } from 'react-router-dom'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
// import { SiWhatsapp } from "react-icons/si";
const HappyClient = () => {
    return (
        <div className="lg:w-10/12 relative mx-auto lg:-mt-16 ">
            <div className='grid md:grid-cols-3 lg:grid-cols-5 px-2 md:px-0'>
                <div className="bg-[#f5f5f5] text-center space-y-3 px-4 py-16">
                   <Link>
                   <button className='bg-orange-100 p-4 rounded-full'>
                        <img className='w-10' src={client1} alt="" />
                    </button>
                   </Link>
                    <p className="text-xl font-bold text-bla">12+</p>
                    <p className='text-[#4d4d4d] font-semibold'>Years of Experienced</p>
                </div>
                <div className="bg-[#FFF] text-center space-y-3 px-4 py-16">
                   <Link>
                   <button className='bg-orange-100 p-4 rounded-full'>
                        <img className='w-10' src={client2} alt="" />
                    </button>
                   </Link>
                    <p className="text-xl font-bold text-bla">35+</p>
                    <p className='text-[#4d4d4d] font-semibold'>Years of Experienced</p>
                </div>
                <div className="bg-[#f5f5f5] text-center space-y-3 px-4 py-16">
                   <Link>
                   <button className='bg-orange-100 p-4 rounded-full'>
                        <img className='w-10' src={client3} alt="" />
                    </button>
                   </Link>
                    <p className="text-xl font-bold text-bla">570+</p>
                    <p className='text-[#4d4d4d] font-semibold'>Years of Experienced</p>
                </div>
                <div className="bg-[#FFF] text-center space-y-3 px-4 py-16">
                   <Link>
                   <button className='bg-orange-100 p-4 rounded-full'>
                        <img className='w-10' src={client4} alt="" />
                    </button>
                   </Link>
                    <p className="text-xl font-bold text-bla">270+</p>
                    <p className='text-[#4d4d4d] font-semibold'>Years of Experienced</p>
                </div>
                <div className="bg-[#f5f5f5] text-center space-y-3 px-4 py-16">
                   <Link>
                   <button className='bg-orange-100 p-4 rounded-full'>
                        <img className='w-10' src={client5} alt="" />
                    </button>
                   </Link>
                    <p className="text-xl font-bold text-bla">45+</p>
                    <p className='text-[#4d4d4d] font-semibold'>Years of Experienced</p>
                </div>
           
            </div>
          
        </div>
    );
};

export default HappyClient;