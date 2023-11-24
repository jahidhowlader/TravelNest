import { Link } from "react-router-dom";
import { HiOutlinePlay } from "react-icons/hi2";

const TheHotel = () => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center gap-8 my-container my-20 relative">

            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center">
                {/* Hotel Content */}
                <div className="flex-1 sm:pr-20 md:pr-5 lg:pr-20">
                    <span className="flex items-center gap-8">
                        <span className="w-10 h-[1px] bg-black"></span>
                        <span className="font-medium tracking-widest text-xs lg:text-sm">SINCE 2006</span>
                    </span>
                    <h1 className='text-2xl lg:text-3xl xl:text-5xl py-3 xl:py-5 font-bold primary-font'>The Hotel</h1>
                    <p className="pb-7 sm:pb-10 sm:pt-2 text-base xl:text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et rhoncus lacus. Aliquam porttitor sit amet diam non placerat. Curabitur convallis, risus ac aliquam imperdiet, tellus ante finibus libero...</p>

                    {/* <button className="uppercase">
                        Read more
                    </button> */}

                    <Link href="#_" className="px-5 sm:px-8 py-2 sm:py-2.5 relative rounded-sm group overflow-hidden font-medium text-black inline-block border hover:border-primary-color uppercase text-sm">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-primary-color group-hover:h-full opacity-90 "></span>
                        <span className="relative group-hover:text-white">Read more</span>
                    </Link>
                </div>

                {/* Hotel Video */}
                <div className="flex-1 mt-8 sm:mt-0 relative cursor-pointer">
                    <img src="/home/hotel1.jpg" alt="hotel 1" className="w-full xl:ml-auto object-cover" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            <img src="/home/bg-playvideo.png" alt="bg-playvideo.png" className="object-cover" />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <HiOutlinePlay className="text-white text-4xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Static Image */}
            <div>
                <img src="/home/hotel2.jpg" alt="banner2" className="object-cover w-full" />
            </div>

            {/* Traveler Choice */}
            <span className="tracking-widest sm:absolute sm:bottom-0 md:bottom-auto sm:-right-24 xl:-right-36 sm:rotate-90">2023 Traveler's choice</span>
        </div>
    );
};

export default TheHotel;