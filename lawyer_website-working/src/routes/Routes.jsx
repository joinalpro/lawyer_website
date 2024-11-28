import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Service from "../pages/Service";
import OurAttorneys from "../pages/OurAttorneys";
import Pages from "../pages/Pages";
import ServiceDetails from "../components/ServiceDetails";
import Faqs from "../components/Faqs";
import Blogs from "../components/Blogs";
import AttorneyDetails from "../components/AttorneyDetails";
import TagsContainer from "../components/TagsContainer";
import BlogDetails from "../components/BlogDetails";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
// import TagsContainer from "../components/TagsContainer";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    const res = await fetch('/serviceLawyer.json')
                    const services = await res.json()
                    // client rewiew json data;
                    const clientRes = await fetch('/clientReview.json')
                    const clientData = await clientRes.json()
                    // Faqs data load kora holo
                    const faqs = await fetch('/faqs.json')
                    const faqsData = await faqs.json()
                    // blogs data load holo
                    const blogs = await fetch('/blog.json')
                    const blogData = await blogs.json()
                    return { services, clientData, faqsData, blogData }
                }
            },
            {
                path: '/about',
                element: <AboutUs />,
                loader: () => fetch('/serviceLawyer.json')
            },
            {
                path: '/service',
                element: <Service />,
                loader: () => fetch('/serviceLawyer.json')
            },
            {
                path: '/ourAttorneys',
                element: <OurAttorneys />,
                loader: () => fetch('/serviceLawyer.json')
            },
            {
                path: '/attorneyDetails/:id',
                element: <AttorneyDetails />,
                loader: async ({ params }) => {
                    const res = await fetch('/serviceLawyer.json');
                    const data = await res.json();
                    const attorneyData = data.find(attorney => attorney.id == params.id);
                    return { attorneyData, data }
                }

            },
            {
                path: '/pages',
                element: <Pages />
            },
            {
                path: '/serviceDetais/:id',
                element: <ServiceDetails />,
                loader: async ({ params }) => {
                    const res = await fetch('/serviceLawyer.json')
                    const data = await res.json()
                    const detailsData = data.find(d => d.id == params.id);

                    return { detailsData, data };
                }
            },
            {
                path: '/faqs',
                element: <Faqs />,
                loader: async () => {
                    const faqs = await fetch('/faqs.json')
                    const faqsData = await faqs.json()
                    const res = await fetch('/serviceLawyer.json')
                    const services = await res.json()
                    return { faqsData, services }
                }
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch('/blogCategory.json'),
                children: [
                    {
                        path: '/blogs',
                        element: <TagsContainer />,
                        loader: async () => {
                            const blogRes = await fetch('/blog.json');
                            const data = await blogRes.json();
                            const blogData = data.slice(5, 10)
                            // const blogData = data.slice(0,6).filter(blog => blog.category === blog.category)
                            return { blogData }
                        }
                    },
                    {
                        path: '/blogs/:category',
                        element: <TagsContainer />,
                        loader: async ({ params }) => {
                            const blogRes = await fetch('/blog.json');
                            const data = await blogRes.json();
                             const blogData = data.filter(blog => blog.category === params.category)
                            return { blogData }
                        }
                    },
                ]
            },
            {
                path: '/blogDetails/:id',
                element: <BlogDetails />,
                loader: async ({ params }) => {
                    // blogs details data show 
                    const detailslRes = await fetch('/blog.json')
                    const detailsData = await detailslRes.json();
                    const BlogDetails = detailsData.find(details => details.id == params.id);
                    //cetegory btn data 
                    const categoryRes = await fetch('/blogCategory.json');
                    const categoryBtnData = await categoryRes.json();
                    return { BlogDetails, categoryBtnData };
                }
            },
            {
                path: '/testimonials',
                element: <Testimonials/>,
                loader: async () => {
                    const clientRes = await fetch('/clientReview.json');
                    const clientData = await clientRes.json();
                    const res = await fetch('/serviceLawyer.json')
                    const services = await res.json()
                    return {clientData, services}
                }
            },
            {
                path: '/contact',
                element: <Contact/>,
                loader: () => fetch('/serviceLawyer.json')
            }

        ]
    },
]);

export default router