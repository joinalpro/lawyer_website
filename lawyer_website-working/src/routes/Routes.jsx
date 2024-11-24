import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Service from "../pages/Service";
import OurAttorneys from "../pages/OurAttorneys";
import Pages from "../pages/Pages";
import ServiceDetails from "../components/ServiceDetails";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: async () => {
                const res = await fetch('/serviceLawyer.json')
                const services = await res.json()
                // client rewiew json data;
                const clientRes = await fetch('/clientReview.json')
                const clientData = await clientRes.json()

                return {services, clientData}
            }
        },
        {
            path: '/about',
            element: <AboutUs/>
        },
        {
            path: '/service',
            element: <Service/>,
            loader: () => fetch('/serviceLawyer.json')
        },
        {
            path: '/ourAttorneys',
            element: <OurAttorneys/>
        },
        {
            path: '/pages',
            element: <Pages/>
        },
        {
            path: '/serviceDetais/:id',
            element: <ServiceDetails/>,
            loader: async ({params}) => {
                const res = await fetch('/serviceLawyer.json')
                const data = await res.json()
                const detailsData = data.find(d => d.id == params.id);
                
                return {detailsData, data};
            }
        }
      ]
    },
  ]);

  export default router