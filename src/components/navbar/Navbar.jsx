import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { CiMobile2 } from "react-icons/ci";

const Navbar = () => {

    const { user } = useAuth()
    console.log(user);

    // border-b shadow-sm border-primary-color
    return (
        <nav className='bg-black text-white'>

            <div className='flex items-center justify-between'>
                {/* Logo */}
                <Link to='/' className='pl-3 md:pl-20 flex flex-col items-center'>
                    <h1 className='text-3xl font-semibold primary-font'>TravelNest</h1>
                    <p className='text-xs tracking-widest -mt-2 md:mt-0'>Boutique Hotel</p>
                </Link>


                <div className='flex items-center gap-6'>
                    <div className="sm:flex items-center gap-2 hidden">
                        {/* MOBILE ICON */}
                        <CiMobile2 />
                        <span> +880 1625 405959</span>
                    </div>

                    <div className='bg-primary-color p-2 md:p-3 lg:p-6'>
                        <p className='uppercase font-medium text-sm lg:text-base'>Book <br />Now</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;