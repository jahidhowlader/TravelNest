import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './roomAndSuite.css'
import useFetchData from "../../../hooks/useFetchData";
import { useEffect } from "react";
import { useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

// SETTING FOR SLICK SLIDER
const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
            }
        }
    ]

};

const RoomAndSuite = () => {

    const { data: rooms, loading } = useFetchData('/rooms')

    return (
        <section className="mb-20 overflow-hidden">
            <div className="my-container grid sm:grid-cols-3 items-center mb-16">
                <div>
                    <span className="flex items-center gap-8">
                        <span className="w-10 h-[1px] bg-black"></span>
                        <span className="font-medium tracking-widest text-xs lg:text-sm uppercase text-primary-color">Explore</span>
                    </span>
                    <h1 className='text-2xl lg:text-3xl xl:text-[40px] py-3 xl:py-5 font-bold primary-font'>Rooms & Suites</h1>
                </div>
                <span></span>
                <p className='tracking-wide'>Our hotel offers 30 double, and 5 single rooms as well as 36 suites and junior suites. View All Rooms</p>
            </div>

            <Slider {...settings} className="roomSuiteSlider">

                {
                    rooms && rooms.map(room => <div
                        key={room.roomNumbers}
                        className="">
                        <img src={room.photos[0]} alt="room" className="h-full w-full object-cover" />

                        <Link to={`/room/${room._id}`}><h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">{room.title}</h3></Link>

                        <span className="flex flex-wrap items-center gap-5 gap-y-2 sm:gap-y-0 sm:gap-7 text-lg tracking-wide ">
                            <span className='flex items-center gap-2'> <BsBoxSeam className="text-lg" />{room?.size}m<sup className="-ml-2">2</sup></span>
                            <span className='flex items-center gap-2'> <IoBedOutline className="text-lg" />{`${room?.beds < 2 ? `${room?.beds} bed` : `${room?.beds} beds`}`}</span>
                            <span className='flex items-center gap-2'> <LiaBathSolid className="text-lg" />{`${room?.bathroom < 2 ? `${room?.bathroom} bathroom` : `${room?.bathroom} bathrooms`}`}</span>
                        </span>
                    </div>)
                }
            </Slider>
        </section>
    );
};

export default RoomAndSuite;

