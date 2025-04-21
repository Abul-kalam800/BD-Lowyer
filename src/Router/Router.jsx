
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
                loader:()=> fetch('/lowyersData.json'),
            },
            {
                path:'mybooking',
                Component:Mybooking
            },
            {
                path: 'blogs',
                Component:Blogs
                
            },
            {
                path:'contactus',
                Component:ContactUs
            },
            {
                path:'/lowyerdetails/:id',
                Component:LowyerDetails,
                loader:()=> fetch('lowyersData.json'),
            }
        ],
          
    },

]);



export default router;