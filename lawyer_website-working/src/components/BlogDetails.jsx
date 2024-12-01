/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import CategoryTags from "./CategoryTags";
import { LuClock } from "react-icons/lu";
import reply1 from '../assets/reply.png'
import RecentPost from "../pages/RecentPost";


const BlogDetails = () => {
    const blogsDetailsData = useLoaderData();
    const { BlogDetails, categoryBtnData, recentData } = blogsDetailsData;
    const { img, date, title, description, subTitle, description2, description3, sections } = BlogDetails
    return (
        <section>
            <SectionTitle title="Home > Blogs > Details" />
            <div className="flex flex-col-reverse lg:flex-row gap-4 mb-10 lg:w-10/12 mx-auto px-2 lg:px-0">
                <div className="lg:w-2/3 ">
                    <figure className="w-full lg:h-[480px]">
                        <img className="w-full h-full object-cover" src={img} alt="" />
                    </figure>
                    <div className="border-2 px-3 space-y-3">
                        {/* date */}
                        <div className="flex mt-2 text-kalo items-center gap-2">
                            <LuClock />
                            <p className="">{date}</p>
                        </div>
                        {/* title */}
                        <h2 className="text-2xl  font-bold font-fontMartel text-bla">{title}</h2>
                        {/* description */}
                        <p className="text-kalo">{description}</p>
                        {/* subTitel */}
                        <h2 className="text-xl  font-bold font-fontMartel text-bla">{subTitle}</h2>
                        {/* description2 */}
                        <p className="text-kalo">{description2}</p>

                        {/* section  */}
                        {/* <div className="flex gap-4 lg:gap-0 py-4 flex-col md:flex-row ">
                            <div className="h-[350px] lg:mr-4  w-full">
                                <img className="w-full  h-full object-cover" src={sections[0].img} alt="" />
                            </div>
                            <div className="h-[350px] w-full">
                                <img className="w-full h-full object-cover" src={sections[1].img} alt="" />
                            </div>
                            <div></div>
                        </div> */}
                        {/* subTitel */}
                        {/* <h2 className="text-xl  font-bold font-fontMartel text-bla">{sections[0].heading}</h2> */}
                        {/* description2 */}
                        {/* <p className="text-kalo">{sections[0].description}</p>
                        <p className="text-kalo">{sections[0].sub_description1}</p> */}
                        {/* subTitel */}
                        {/* <h2 className="text-xl  font-bold font-fontMartel text-bla">{sections[0].title}</h2> */}
                        {/* <h2 className=""><span className="text-xl  font-bold font-fontMartel text-bla">. Academic Excellence:</span> <span className="text-kalo">{sections[0].AcademicExcellence}</span></h2> */}
                        {/* <h2 className=""><span className="text-xl  font-bold font-fontMartel text-bla">. Enhanced Creativity: </span> <span className="text-kalo">{sections[0].Enhanced}</span></h2> */}
                        {/* <h2 className=""><span className="text-xl  font-bold font-fontMartel text-bla">. Teacher Empowerment: </span> <span className="text-kalo">{sections[0].TeacherEmpowerment}</span></h2> */}
                        {/* <div className="pb-3 w-full">
                            <img className="w-full object-cover" src={sections[2].img} alt="" />
                        </div> */}
                        {/* comments */}
                        <h1 className="text-xl  font-bold font-fontMartel text-bla">20 Comment</h1>

                        {/* leave a Reply input from box  */}
                        <div className="pb-4">
                            <h1 className="text-xl font-bold font-fontMartel text-bla">Leave a Reply</h1>
                            <p className="text-kalo border-b-2 pb-2">Your email address will not be published*</p>
                            {/* input from*/}
                            <form>
                                <div className="grid mt-4 gap-4 grid-cols-2">
                                    <label className="flex font-fontMartel mt-2 flex-col text-kalo">
                                        full Name
                                        <input type="text" className="outline-none inputName rounded-md border px-4 py-[10px] mt-1" placeholder="Enter You Name" />
                                    </label>
                                    <label className="flex font-fontMartel mt-2 flex-col text-kalo">
                                        Email Address
                                        <input type="text" className="outline-none inputName rounded-md border px-4 py-[10px] mt-1" placeholder="Enter your Email" />
                                    </label>
                                    <textarea className="px-4 outline-none rounded-md py-5 border col-span-2" name="" id="" cols="20" rows="3" placeholder="Enter Your Message"></textarea>
                                </div>
                                <input className="bg-bg_button mt-5 py-3 px-7 text-bla  font-bold" type="submit" value="Send message" />
                            </form>

                        </div>
                    </div>
                </div>

                <section className="lg:w-[520px]">
                    {/* recent post section */}
                    <div>
                        <RecentPost recentData={recentData} />
                    </div>
                    {/* category btn section */}
                    <div>
                        <h4 className='text-xl font-bold text-bla font-fontMartel my-4'>Tags</h4>
                        <CategoryTags categoryTagsBtn={categoryBtnData} />
                    </div>
                </section>

            </div>
        </section>
    );
};

export default BlogDetails;