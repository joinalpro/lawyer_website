import { useLoaderData } from "react-router-dom";
import BlogsCard from "./BlogsCard";

const TagsContainer = () => {
    const blogsAllData = useLoaderData();
    const { blogData } = blogsAllData;
    console.log(blogData);
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-2">
                {
                    blogData.map(blog => <BlogsCard key={blog.id} blog={blog}></BlogsCard>)
                }
            </div>
        </div>
    );
};

export default TagsContainer;