import Slider from 'react-slick';
import './allRooms.css'
import { BsBoxSeam } from 'react-icons/bs';
import { IoBedOutline } from 'react-icons/io5';
import { LiaBathSolid } from "react-icons/lia";

const AllRooms = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }


    return (
        <section className='my-container mt-20 mb-40'>

            <div className='text-center'>
                <h2 className='text-[42px] primary-font pb- font-bold'>Search Results</h2>
                <span className='text-lg opacity-80 '>We have found <span className='font-semibold text-primary-color'>8</span> rooms that your needs.</span>
            </div>

            <div className='my-16'></div>


            <div className='space-y-8'>
                <div className='border border-gray border-opacity-[0.15] grid lg:grid-cols-12 items-center'>
                    {/* IMAGE */}

                    <div className='lg:col-span-4  overflow-hidden'>
                        <Slider {...settings} className='roomsSilder overflow-hidden'>
                            <img src="/rooms/rooms1.jpeg" alt="room list" className='object-cover h-[200px] sm:h-[370px] lg:h-[300px] xl:h-[370px] w-full' />
                            <img src="/rooms/rooms11.jpeg" alt="room list" className='object-cover h-[200px] sm:h-[370px] lg:h-[300px] xl:h-[370px] w-full' />
                            <img src="/rooms/rooms111.jpeg" alt="room list" className='object-cover h-[200px] sm:h-[370px] lg:h-[300px] xl:h-[370px] w-full' />
                            <img src="/rooms/rooms1111.jpeg" alt="room list" className='object-cover h-[200px] sm:h-[370px] lg:h-[300px] xl:h-[370px] w-full' />
                            <img src="/rooms/rooms11111.jpeg" alt="room list" className='object-cover h-[200px] sm:h-[370px] lg:h-[300px] xl:h-[370px] w-full' />
                        </Slider>
                    </div>

                    {/* CONTENT */}
                    <div className='lg:col-span-5 pl-5 space-y-5 mt-5 lg:mt-0'>
                        <h3 className='text-3xl md:text-4xl primary-font font-bold'>Family Suite</h3>
                        <span className="flex flex-wrap items-center gap-5 gap-y-2 sm:gap-y-0 sm:gap-7 text-lg tracking-wide ">
                            <span className='flex items-center gap-2'> <BsBoxSeam className="text-lg" /> 38m<sup>2</sup></span>
                            <span className='flex items-center gap-2'> <IoBedOutline className="text-lg"/>2 beds</span>
                            <span className='flex items-center gap-2'> <LiaBathSolid className="text-lg" />1 bathroom</span>
                        </span>

                        <p className='text-lg opacity-80'>It is a long established fact that a reader will be distracted by the readable...</p>

                        <div className='flex flex-wrap items-center gap-6 mr-5 sm:mr-0'>
                            <img src="https://nuss.uxper.co/boutique-hotel/wp-content/uploads/sites/2/2021/04/dresser-drawers-2.svg" alt="logo" className='w-4 sm:w-6 h-4 sm:h-6 object-cover' />
                            <img src="https://nuss.uxper.co/boutique-hotel/wp-content/uploads/sites/2/2021/06/breakfast-cereal.svg" alt="logo" className='w-4 sm:w-6 h-4 sm:h-6 object-cover' />
                            <img src="https://nuss.uxper.co/boutique-hotel/wp-content/uploads/sites/2/2021/04/modern-tv-flat.svg" alt="logo" className='w-4 sm:w-6 h-4 sm:h-6 object-cover' />
                            <img src="https://nuss.uxper.co/boutique-hotel/wp-content/uploads/sites/2/2021/04/bathroom-hair-dryer.svg" alt="logo" className='w-4 sm:w-6 h-4 sm:h-6 object-cover' />
                            <img src="https://nuss.uxper.co/boutique-hotel/wp-content/uploads/sites/2/2021/04/laundry-iron.svg" alt="logo" className='w-4 sm:w-6 h-4 sm:h-6 object-cover' />
                            <img src="https://nuss.uxper.co/boutique-hotel/wp-content/uploads/sites/2/2021/04/tea-kettle-1.svg" alt="logo" className='w-4 sm:w-6 h-4 sm:h-6 object-cover' />
                            <img src="https://nuss.uxper.co/boutique-hotel/wp-content/uploads/sites/2/2021/04/saving-safe-1.svg" alt="logo" className='w-4 sm:w-6 h-4 sm:h-6 object-cover' />
                        </div>
                    </div>

                    {/* Confirmation */}
                    <div className='lg:col-span-3 lg:border-l border-gray border-opacity-[0.15] h-full flex flex-col justify-center lg:items-center m-5 ml-5 mt-5 sm:mt-10 lg:mt-5 lg:m-0'>
                        <h4 className='text-xl font-medium text-primary-color'>$173<span className='text-black opacity-70'> / NIGHT</span></h4>
                        <button className='mt-5 px-8 py-2 text-white font-medium bg-primary-color rounded-sm'>BOOK NOW</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllRooms;
