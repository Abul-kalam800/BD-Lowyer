
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Root from '../Root/Root';
import ErrorPage from '../pages/ErrorPage';
import Blogs from '../pages/Blogs';
import Mybooking from '../pages/Mybooking';
import ContactUs from '../pages/ContactUs';
import LowyerDetails from '../componets/LowyerDetails';



const router = createBrowserRouter([

    {
        path:"/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
            path:'/',
            Component: Home,
            hydrateFallbackElement:<span className="loading loading-bars loading-xl text-center my-32 mx-32"></span>,
                loader:()=> fetch('/lowyersData.json'),
            },
            {
                hydrateFallbackElement:<span className="loading loading-bars loading-xl text-center my-32 mx-32"></span>,
                path:'mybooking',
                Component:Mybooking
            },
            {
                path: 'blogs',
                Component:Blogs,
                hydrateFallbackElement:<span className="loading loading-bars loading-xl text-center my-32 mx-32 ml-58"></span>,
                loader:()=> fetch('blogsData.json')
                
            },
            {
                path:'contactus',
                Component:ContactUs
            },
            {
                path:'/lowyerdetails/:id',
                Component:LowyerDetails,
                hydrateFallbackElement:<span className="loading loading-bars loading-xl text-center my-32 "></span>,
                loader:()=> fetch('lowyersData.json'),
            }
        ],
          
    },

]);



export default router;