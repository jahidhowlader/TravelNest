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

    const {data: rooms, loading} = useFetchData('/rooms')

    // const [rooms, setRooms] = useState([])
    // useEffect(() => {

    //     fetch('/roomData.json')
    //         .then(res => res.json())
    //         .then(data => setRooms(data))
    // }, [])

    console.log(44, rooms);

    // TODO: remaining DYNAMIC
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
                        <img src={room.photos[0]} alt="room" className="h-[400px] w-full" />

                        <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">{room.title}</h3>

                        {/* <div className="flex flex-wrap items-center gap-x-5 sm:gap-10 "> */}
                        <span className="flex flex-wrap items-center gap-5 gap-y-2 sm:gap-y-0 sm:gap-7 text-lg tracking-wide ">
                            <span className='flex items-center gap-2'> <BsBoxSeam className="text-lg" />{room?.size}m<sup className="-ml-2">2</sup></span>
                            <span className='flex items-center gap-2'> <IoBedOutline className="text-lg" />{`${room?.beds < 2 ? `${room?.beds} bed` : `${room?.beds} beds`}`}</span>
                            <span className='flex items-center gap-2'> <LiaBathSolid className="text-lg" />{`${room?.bathroom < 2 ? `${room?.bathroom} bathroom` : `${room?.bathroom} bathrooms`}`}</span>
                        </span>
                        {/* </div> */}

                    </div>)
                }



                {/* <div className="">
                    <img src="/home/room2.jpg" alt="room" className="h-auto w-auto" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room3.jpg" alt="room" className="h-auto w-auto" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room4.jpg" alt="room" className="h-auto w-auto" />
                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>


                </div>
                <div className="">
                    <img src="/home/room5.jpg" alt="room" className="h-auto w-auto" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room6.jpg" alt="room" className="h-auto w-auto" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room7.jpg" alt="room" className="h-auto w-auto" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room8.jpg" alt="room" className="h-auto w-auto" />
                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>


                </div> */}
            </Slider>
        </section>
    );
};

export default RoomAndSuite;