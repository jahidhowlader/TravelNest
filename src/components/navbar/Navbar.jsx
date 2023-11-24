
const Navbar = () => {

    // border-b shadow-sm border-primary-color
    return (
        <nav className='bg-black text-white'> 

            <div className='flex items-center justify-between'>
                {/* Logo */}
                <div className='pl-3 md:pl-20 flex flex-col items-center'>
                    <h1 className='text-3xl font-semibold primary-font'>TravelNest</h1>
                    <p className='text-xs tracking-widest -mt-2 md:mt-0'>Boutiqye Hotel</p>
                </div>


                <div className='flex items-center gap-6'>
                    <div>
                        {/* MOBILE ICON */}
                        <p className='hidden sm:block'>+880 1625 405959</p>
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