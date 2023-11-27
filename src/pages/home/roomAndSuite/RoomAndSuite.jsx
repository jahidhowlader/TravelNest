import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './roomAndSuite.css'


const RoomAndSuite = () => {

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
                <div className="">
                    <img src="/home/room1.jpg" alt="room1" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10 ">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room2.jpg" alt="room1" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room3.jpg" alt="room1" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room4.jpg" alt="room1" />
                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>


                </div>
                <div className="">
                    <img src="/home/room5.jpg" alt="room1" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room6.jpg" alt="room1" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room7.jpg" alt="room1" />

                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>

                </div>
                <div className="">
                    <img src="/home/room8.jpg" alt="room1" />
                    <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Deluxe Double Room</h3>

                    <div className="flex flex-wrap items-center gap-x-5 sm:gap-10">
                        <span>38m<sup>2</sup></span>
                        <span>2 beds</span>
                        <span>1 bathroom</span>
                    </div>


                </div>
            </Slider>
        </section>
    );
};

export default RoomAndSuite;