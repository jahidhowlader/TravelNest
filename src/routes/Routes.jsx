import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";

export const router = createBrowserRouter([

    // ROOT TOUTES
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // ERROR 404
            {
                path: '*',
                // element: <Error404 />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/signup",
                element: <Signup />
            }
        ]
    },

]);