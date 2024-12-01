/* eslint-disable react/prop-types */
// import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import CategoryTags from './CategoryTags';
import RecentPost from '../pages/RecentPost';
// import RecentPostDetails from './RecentPostDetails';


const Blogs = () => {
  const blogsAllData = useLoaderData();
  const {categoryTagsBtn, recentData} = blogsAllData;

  return (

    <main>
      {/* title */}
      <SectionTitle title="Home > Blogs List"></SectionTitle>
      <section className='flex mt-10 flex-col-reverse lg:flex-row gap-4 mb-10 lg:w-10/12 mx-auto px-2 lg:px-0'>
        {/* blogs card */}
        <div className='lg:w-2/3'>
          {/* <TagsContainer/> */}
          <Outlet></Outlet>
        </div>
        {/* Tags */}
        <div className='lg:w-[520px]'>
          <div>
            <RecentPost recentData={recentData} />
          </div>
          <div className=''>
            <h4 className='text-xl font-bold text-bla font-fontMartel my-4'>Tags</h4>
            <CategoryTags categoryTagsBtn={categoryTagsBtn} />
          </div>

        </div>
      </section>
    </main>

  );
};

export default Blogs;