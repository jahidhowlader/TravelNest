import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";
import AllRooms from "../pages/allRooms/AllRooms";
import RoomDetails from "../pages/roomDetails/RoomDetails";
import About from "../pages/about/About";
import MeetingRoom from "../pages/meetingRoom/MeetingRoom";
import Spa from "../pages/spa/Spa";
import Restaurant from "../pages/restaurant/Restaurant";

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
            },
            {
                path: "/rooms",
                element: <AllRooms />
            },
            {
                path: "/room/:id",
                element: <RoomDetails />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/meeting_room",
                element: <MeetingRoom />
            },
            {
                path: "/spa",
                element: <Spa />
            },
            {
                path: "/restaurant",
                element: <Restaurant />
            },
        ]
    },

]);