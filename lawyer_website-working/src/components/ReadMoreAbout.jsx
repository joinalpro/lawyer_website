import { Link } from 'react-router-dom';
import aboutImg from '../assets/aboutUs.png'
import daripalla from '../assets/dariPalla.png'
import { FiArrowRightCircle } from "react-icons/fi";
const ReadMoreAbout = () => {
    return (
        <section className='px-2  lg:px-0 lg:w-10/12 mx-auto mt-16'>
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="md:flex-1">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="md:flex-1">
                    <p className='text-bla font-bold'>About Us</p>
                    <h2 className='text-3xl mt-3 mb-6 font-bold font-fontMartel text-bla'>Get About our Law Firm & Learn About our Expertise.</h2>
                    <p className='text-kalo mb-4'>Hero Section: A visually striking area at the top of the page featuring a headline, subheadline, and a call-to-action button to encourage visitors to learn more about your</p>
                    <div className='border  p-4 space-y-1'>
                        <p className="text-kalo">Tincidunt turpis sit amet imperdiet. Praesent Classei subheadline, and a call-to-actionconsequattincidunt turpis sit amet </p>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-[18px]'>Shaidul</p>
                                <p className='text-bla font-semibold'>Shaidul Islma, CEO-Founder</p>
                            </div>
                            <div className=''>
                                <img className='w-16' src={daripalla} alt="" />
                            </div>
                        </div>
                    </div>
                   <Link to="/about"> <button className='flex mt-7 items-center gap-3 text-bla font-bold font-fontMartel bg-bg_button px-5 py-3'>Read More <FiArrowRightCircle className='text-xl'/></button></Link>
                </div>

            </div>
        </section>
    );
};

export default ReadMoreAbout;