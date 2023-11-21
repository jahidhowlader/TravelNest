
const Navbar = () => {

    // border-b shadow-sm border-primary-color
    return (
        <div className='bg-black text-white'> 

            <div className='flex items-center justify-between'>
                {/* Logo */}
                <div className='pl-3 md:pl-20 primary-font flex flex-col items-center'>
                    <h1 className='text-3xl font-semibold'>TravelNest</h1>
                    <p className='text-xs tracking-custom -mt-2 md:mt-0'>Apartments</p>
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
        </div>
    );
};

export default Navbar;