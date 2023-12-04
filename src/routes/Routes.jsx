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
import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

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
                element: <ScrollToTop ><AllRooms /></ScrollToTop>
            },
            {
                path: "/room/:id",
                element: <ScrollToTop > <RoomDetails /></ScrollToTop>
            },
            {
                path: "/about",
                element: <ScrollToTop><About /></ScrollToTop>
            },
            {
                path: "/service",
                element: <ScrollToTop><MeetingRoom /></ScrollToTop>
            },
            {
                path: "/spa",
                element: <ScrollToTop><Spa /></ScrollToTop>
            },
            {
                path: "/restaurant",
                element: <ScrollToTop><Restaurant /></ScrollToTop>
            },
            {
                path: "/reservation/:id",
                element: <ScrollToTop><PrivateRoute><Reservation /></PrivateRoute></ScrollToTop>
            },
            {
                path: "/bookingList",
                element: <ScrollToTop><PrivateRoute> <BookingList /> </PrivateRoute></ScrollToTop>
            }
        ]
    },

]);