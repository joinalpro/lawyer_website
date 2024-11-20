import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Service from "../pages/Service";
import OurAttorneys from "../pages/OurAttorneys";
import Pages from "../pages/Pages";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <AboutUs/>
        },
        {
            path: '/service',
            element: <Service/>
        },
        {
            path: '/ourAttorneys',
            element: <OurAttorneys/>
        },
        {
            path: '/pages',
            element: <Pages/>
        }
      ]
    },
  ]);

  export default router