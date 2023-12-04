import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './roomAndSuite.css'
import useFetchData from "../../../hooks/useFetchData";
import { Link } from "react-router-dom";
import RoomSize from "../../../components/roomSize/RoomSize";
import HomeRoomSkeleton from "../../../components/skeleton/homeRoomSkeleton/HomeRoomSkeleton";

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

    const { data: rooms, loading } = useFetchData('/rooms?room=all')

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

            {
                loading ? <HomeRoomSkeleton /> : (
                    <Slider {...settings} className="roomSuiteSlider">

                        {
                            rooms && rooms.map(room => <div
                                key={room.roomNumbers}
                                className="">
                                <img src={room.photos[0]} alt="room" className="h-full w-full object-cover" />

                                <Link to={`/room/${room._id}`}><h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">{room.title}</h3></Link>

                                {/* Room size use from component */}
                                <RoomSize room={room} />
                            </div>)
                        }
                    </Slider>
                )
            }
        </section>
    );
};

export default RoomAndSuite;

