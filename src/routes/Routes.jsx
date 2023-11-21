import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";

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
            }
        ]
    },

]);