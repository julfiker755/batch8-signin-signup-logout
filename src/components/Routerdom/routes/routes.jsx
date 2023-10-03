import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Home/Home";
import Register from "../../Register/Register";
import LogIn from "../../LogIn/LogIn";
import Forget from "../../Forget/Forget";
import Order from "../../Order/Order";
import Private from "../../Private/Private";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
                path:'/register',
                element:<Register></Register>
            },{
                path:'/login',
                element:<LogIn></LogIn>
            },{
                path:'/forget',
                element:<Forget></Forget>
            },{
                path:'/order',
                element:<Private><Order></Order></Private>
            }
        ]
    }
])
export default routes;