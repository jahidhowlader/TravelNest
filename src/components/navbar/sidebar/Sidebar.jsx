import { useState } from "react";
import { motion } from "framer-motion"
import { HiBars3CenterLeft } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import './sidebar.css'
import { TfiClose } from "react-icons/tfi";
import useAuth from "../../../hooks/useAuth";

const isMobile = window.innerWidth < 500;
const isTablet = window.innerWidth > 499 && window.innerWidth < 1024
const isMiniLaptop = window.innerWidth > 1023 && window.innerWidth < 1280
const isLaptop = window.innerWidth > 1279 && window.innerWidth < 1538
const isLargeDevice = window.innerWidth > 1537 && window.innerWidth < 2000

const variants = {

    initial: {
        x: isMobile ? -768 : isTablet ? -1200 : -2000
    },
    animate: {
        x: 0,
        transition: {
            duration: isMobile ? 1.7 : isTablet ? 2 : isMiniLaptop ? 2.2 : isLaptop ? 1.8 : 1.5,
            delay: isLaptop ? .2 : isLargeDevice ? .4 : 0
        }
    }
}

const mainVariants = {

    initial: {
        x: isMobile ? -768 : isTablet ? -1200 : -2000
    },
    animate: {
        x: 0,
        transition: {
            duration: 1
        }
    }
}


const Sidebar = () => {

    const [click, setClick] = useState(false)

    const { user, dispatch } = useAuth()

    // HandlerLogout
    const navigate = useNavigate()
    const handlerLogout = () => {

        try {
            dispatch({ type: "LOGOUT" });
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }

    // TODO: SCROLL OFF
    return (
        <div>
            <div>

                <HiBars3CenterLeft onClick={() => setClick(true)} className={`text-4xl md:text-5xl z-50 absolute top-3.5 md:top-2 lg:top-[26px] 2xl:left-8 cursor-pointer ${click && 'hidden'}`} />
            </div>

            {
                click && (
                    <>
                        <motion.div variants={variants} initial="initial" animate="animate" className="fixed top-0 left-0 h-full z-30 w-full bg-black bg-opacity-90">

                        </motion.div>
                        <motion.div variants={mainVariants} initial="initial" animate="animate" className="fixed top-0 left-0 h-full z-40 w-3/4 sm:w-1/2 bg-primary-color">

                            <TfiClose onClick={() => setClick(false)} className="text-2xl sm:text-3xl lg:text-4xl z-50 absolute top-10 left-10 cursor-pointer" />

                            <ul onClick={() => setClick(false)} className="pt-32 pl-11 space-y-5 ">

                                {/* Home */}
                                <li className="flex">
                                    <span>01</span>
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "list-item font-bold" : "list-item font-medium"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                {/*  Room*/}
                                <li className="flex">
                                    <span>02</span>
                                    <NavLink
                                        to="/rooms"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "list-item font-bold" : "list-item font-medium"
                                        }
                                    >
                                        Room
                                    </NavLink>
                                </li>

                                {/*  Service*/}
                                <li className="flex">
                                    <span>03</span>
                                    <NavLink
                                        to="/service"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "list-item font-bold" : "list-item font-medium"
                                        }
                                    >
                                        Service
                                    </NavLink>
                                </li>

                                {/*  Restaurant*/}
                                <li className="flex">
                                    <span>04</span>
                                    <NavLink
                                        to="/restaurant"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "list-item font-bold" : "list-item font-medium"
                                        }
                                    >
                                        Restaurant
                                    </NavLink>
                                </li>

                                {/*  Spa*/}
                                <li className="flex">
                                    <span>05</span>
                                    <NavLink
                                        to="/spa"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "list-item font-bold" : "list-item font-medium"
                                        }
                                    >
                                        Spa
                                    </NavLink>
                                </li>

                                {/*  About Us*/}
                                <li className="flex">
                                    <span>06</span>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "list-item font-bold" : "list-item font-medium"
                                        }
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                
                                {/*  Booking List*/}
                                <li className="flex">
                                    <span>07</span>
                                    <NavLink
                                        to="/bookingList"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "list-item font-bold" : "list-item font-medium"
                                        }
                                    >
                                        Booking List
                                    </NavLink>
                                </li>

                                {/* LOGIN AND Logout*/}
                                {
                                    !user ? (
                                        <li className="flex">
                                            <span>07</span>
                                            <NavLink
                                                to="/auth/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "list-item font-bold" : "list-item font-medium"
                                                }
                                            >
                                                Login
                                            </NavLink>
                                        </li>
                                    ) : (
                                        <li className="flex">
                                            <span>08</span>
                                            <NavLink
                                                to="#"
                                                onClick={handlerLogout}
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "list-item " : "list-item font-medium"
                                                }
                                            >
                                                Logout
                                            </NavLink>
                                        </li>
                                    )
                                }

                            </ul>
                        </motion.div>
                    </>
                )
            }
        </div>
    );
};

export default Sidebar;