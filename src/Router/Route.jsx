import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistic from "../Pages/Statistic/Statistic";
import DonationDetails from "../Components/DonationDetails/DonationDetails";
import { data } from "autoprefixer";

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch("../data.json")
               
            },
            {
                path:'/donation',
                element: <Donation></Donation>,
            },
            {
                path: '/donationDetails/:id',
                element: <DonationDetails></DonationDetails>,
                loader: ()=> fetch("data.json")
             
            },
            {
                path:'/statistics',
                element: <Statistic></Statistic>
            }
        ]
    }
])

export default myCreatedRouter;