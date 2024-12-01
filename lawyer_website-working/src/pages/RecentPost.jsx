/* eslint-disable react/prop-types */

import RecentPostCard from "../components/RecentPostCard";
const RecentPost = ({recentData = []}) => {
 
    
    return (
        <section>
            <h1 className="text-[20px] font-extrabold font-fontMartel">Recent Post</h1>
            <div>
                {
                    recentData.map(recent => <RecentPostCard key={recent.id} recent={recent}></RecentPostCard>)
                }
            </div>
        </section>
    );
};

export default RecentPost;