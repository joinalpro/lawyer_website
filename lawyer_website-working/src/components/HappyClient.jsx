import { Link } from 'react-router-dom'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import CountUp from 'react-countup'

// import { SiWhatsapp } from "react-icons/si";
const HappyClient = () => {

  
    return (

        <div className="lg:w-10/12 lg:-mt-36 mx-auto ">
            <div className='grid md:grid-cols-3 lg:grid-cols-5 px-2 md:px-0'>
                <div className="bg-[#f5f5f5] h-[311px] flex flex-col  justify-center text-center mt-20">
                    <Link>
                        <button className='bg-orange-100 p-4 rounded-full'>
                            <img className='w-10' src={client1} alt="" />
                        </button>
                    </Link>
                    <p className="text-[28px] mt-5 mb-3  font-bold text-bla">
                        <CountUp start={0} end={12} duration={7}>
                        </CountUp>
                        +
                    </p>
                    <p className='text-kalo font-medium'>Years of Experienced</p>
                </div>
                {/* 2 */}
                <div className="bg-[#ffffff] h-[311px] flex flex-col  justify-center text-center mt-20">
                    <Link>
                        <button className='bg-orange-100 p-4 rounded-full'>
                            <img className='w-10' src={client2} alt="" />
                        </button>
                    </Link>
                    <p className="text-[28px] mt-5 mb-3  font-bold text-bla">
                        <CountUp start={0} end={35} duration={7}></CountUp>
                        +
                    </p>
                    <p className='text-kalo font-medium'>Expert Attorneys</p>
                </div>
                {/* 3 */}
                <div className="bg-[#f5f5f5] h-[311px] flex flex-col  justify-center text-center mt-20">
                    <Link>
                        <button className='bg-orange-100 p-4 rounded-full'>
                            <img className='w-10' src={client3} alt="" />
                        </button>
                    </Link>
                    <p className="text-[28px] mt-5 mb-3  font-bold text-bla">
                        <CountUp start={0} end={570} duration={7}></CountUp>
                        +
                    </p>
                    <p className='text-kalo font-medium'>Happy Client</p>
                </div>
                {/* 4 */}
                <div className="bg-[#ffffff] h-[311px] flex flex-col  justify-center text-center mt-20">
                    <Link>
                        <button className='bg-orange-100 p-4 rounded-full'>
                            <img className='w-10' src={client4} alt="" />
                        </button>
                    </Link>
                    <p className="text-[28px] mt-5 mb-3  font-bold text-bla">

                        <CountUp start={0} end={250} duration={7}></CountUp>
                        +
                    </p>
                    <p className='text-kalo font-medium'>Case Complete</p>
                </div>
                {/* 5 */}
                <div className="bg-[#f5f5f5] h-[311px] flex flex-col  justify-center text-center mt-20">
                    <Link>
                        <button className='bg-orange-100 p-4 rounded-full'>
                            <img className='w-10' src={client5} alt="" />
                        </button>
                    </Link>
                    <p className="text-[28px] mt-5 mb-3  font-bold text-bla">

                        <CountUp start={0} end={45} duration={7}></CountUp>
                        +
                    </p>
                    <p className='text-kalo font-medium'>Case Closed</p>
                </div>
            </div>

        </div>

    );
};

export default HappyClient;