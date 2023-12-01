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
import Reservation from "../pages/reservation/Reservation";
import BookingList from "../pages/bookingList/BookingList";
import Error from "../pages/error/Error";

export const router = createBrowserRouter([

    {
        path: '*',
        element: <Error />
    },
    // ROOT TOUTES
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // ERROR 404
            {
                path: '*',
                element: <Error />
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
                path: "/service",
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
            {
                path: "/reservation/:id",
                element: <Reservation />
            },
            {
                path: "/bookingList",
                element: <BookingList />
            }
        ]
    },

]);