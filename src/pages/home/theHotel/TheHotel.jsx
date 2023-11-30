import { Link } from "react-router-dom";
import { HiBars3CenterLeft, HiOutlinePlay } from "react-icons/hi2";
import { useState } from "react";
import ReactPlayer from "react-player";
import { TfiClose } from "react-icons/tfi";


const xs = window.innerWidth < 640
const sm = window.innerWidth < 768
const md = window.innerWidth < 1024
const lg = window.innerWidth < 1280
const xl = window.innerWidth < 1520

const TheHotel = () => {

    const [playVideo, setPlayVideo] = useState(false)


    return (
        <section className="grid sm:grid-cols-2 md:grid-cols-3 items-center gap-8 my-container my-20 relative">

            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center">
                {/* Hotel Content */}
                <div className="flex-1 sm:pr-20 md:pr-5 lg:pr-20">
                    <span className="flex items-center gap-8">
                        <span className="w-10 h-[1px] bg-black"></span>
                        <span className="font-medium tracking-widest text-xs lg:text-sm text-primary-color">SINCE 2006</span>
                    </span>
                    <h1 className='text-2xl lg:text-3xl xl:text-5xl py-3 xl:py-5 font-bold primary-font'>The Hotel</h1>
                    <p className="pb-7 sm:pb-10 sm:pt-2 text-base tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et rhoncus lacus. Aliquam porttitor sit amet diam non placerat. Curabitur convallis, risus ac aliquam imperdiet, tellus ante finibus libero...</p>

                    <Link to="/about" className="px-5 sm:px-8 py-2 sm:py-2.5 relative rounded-sm group overflow-hidden font-medium text-black inline-block border hover:border-primary-color uppercase text-sm">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform bg-primary-color group-hover:h-full opacity-90 "></span>
                        <span className="relative group-hover:text-white">Read more</span>
                    </Link>

                </div>

                {/* Hotel Video */}
                <div onClick={() => setPlayVideo(true)} className="flex-1 mt-8 sm:mt-0 relative cursor-pointer">
                    <img src="/home/hotel1.jpg" alt="hotel 1" className="xl:h-[380px] xl:w-[340px] xl:ml-auto object-cover" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            <img src="/home/bg-playvideo.png" alt="bg-playvideo.png" className="object-cover" />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <HiOutlinePlay className="text-white text-4xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {
                    playVideo && (
                        <>
                            <div className="fixed bg-black w-full h-full top-0 left-0 z-50 flex justify-center items-center">

                                <TfiClose onClick={() => setPlayVideo(false)} className="text-2xl sm:text-3xl lg:text-4xl z-50 absolute top-10 right-10 cursor-pointer text-white" />
                                <ReactPlayer

                                    url='https://youtu.be/k9tX-MrxT3k?si=VTURTppB73kNZXnX'
                                    config={{
                                        youtube: {
                                            playerVars: { showinfo: 1 }
                                        }
                                    }}
                                    width={xs ? 280 : sm ? 600 : md ? 700 : lg ? 700 : 850}
                                    height={xs ? 150 : sm ? 335 : md ? 390 : lg ? 400 : 500}
                                    light={true}
                                    controls={true}
                                    className="rounded-xl"
                                />
                            </div>

                        </>
                    )
                }
            </div>

            {/* Static Image */}
            <div>
                <img src="/home/hotel2.jpg" alt="banner2" className="object-cover xl:h-[465px] xl:w-[360px]" />
            </div>

            {/* Traveler Choice */}
            <span className="tracking-widest sm:absolute sm:bottom-0 md:bottom-auto sm:-right-24 xl:-right-36 sm:rotate-90">2023 Traveler's choice</span>
        </section>
    );
};

export default TheHotel;