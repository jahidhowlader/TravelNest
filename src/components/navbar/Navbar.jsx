import { Link } from "react-router-dom";
import { CiMobile2 } from "react-icons/ci";
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {
    // border-b shadow-sm border-primary-color
    return (
        <nav className='bg-black text-white relative'>

            <div className='flex items-center justify-between'>
                {/* Logo */}
                <div className='ml-3 sm:ml-9 flex items-center'>

                    {/* SideBar Navigation */}
                    <Sidebar />

                    <Link to={'/'} className="ml-11 md:ml-14 flex flex-col sm:items-center">
                        <h1 className='text-xl sm:text-3xl font-semibold primary-font'>TravelNest</h1>
                        <p className='text-xs sm:tracking-widest ml-1.5 -mt-1 md:-mt-1 lg:mt-0'>Boutique Hotel</p>
                    </Link>
                </div>


                <div className='flex items-center gap-6'>
                    <div className="sm:flex items-center gap-2 hidden">
                        {/* MOBILE ICON */}
                        <CiMobile2 />
                        <span> +880 1625 405959</span>
                    </div>

                    <Link to="/rooms">
                        <div className='bg-primary-color p-3 lg:p-6'>
                            <p className='uppercase font-medium text-sm lg:text-base'>Book <br />Now</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;