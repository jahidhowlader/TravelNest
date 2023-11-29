import PropTypes from 'prop-types';
import { BsBoxSeam } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import Slider from "react-slick";
import RoomFeatureLogo from "../../../components/roomFeaturesLogo/RoomFeatureLogo";
import { Link, useNavigate } from "react-router-dom";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
}

const RoomCart = ({ room, setOpenModal, handlerReservation, isAvailable }) => {

    const { _id, title, size, beds, bathroom, photos, description, price, unavailableDates } = room



    return (
        <div
            className='border border-gray border-opacity-[0.15] grid lg:grid-cols-12 items-center'
        >
            {/* IMAGE */}

            <div className='lg:col-span-4  overflow-hidden'>
                <Slider {...settings} className='roomsSilder overflow-hidden'>

                    {
                        photos.map((photo, idx) => <img
                            key={idx}
                            src={photo} alt="room list" className='object-cover h-[200px] sm:h-[370px] lg:h-[300px] xl:h-[370px] w-full'
                        ></img>)
                    }
                </Slider>
            </div>

            {/* CONTENT */}
            <div className='lg:col-span-5 pl-5 space-y-5 mt-5 lg:mt-0'>
                <Link to={`/room/${_id}`}>
                    <h3 className='text-3xl md:text-4xl primary-font font-bold hover:text-primary-color'>{title}</h3>
                </Link>
                <span className="flex flex-wrap items-center gap-5 gap-y-2 sm:gap-y-0 sm:gap-7 text-lg tracking-wide ">
                    <span className='flex items-center gap-2'> <BsBoxSeam className="text-lg" />{size}m<sup className="-ml-2">2</sup></span>
                    <span className='flex items-center gap-2'> <IoBedOutline className="text-lg" />{`${beds < 2 ? `${beds} bed` : `${beds} beds`}`}</span>
                    <span className='flex items-center gap-2'> <LiaBathSolid className="text-lg" />{`${bathroom < 2 ? `${bathroom} bathroom` : `${bathroom} bathrooms`}`}</span>
                </span>

                <p className='text-lg opacity-80 mr-5'>{description.substring(0, 110)}...</p>

                <div className='flex flex-wrap items-center gap-6 mr-5 sm:mr-0'>

                    <RoomFeatureLogo />
                </div>
            </div>

            {/* Confirmation */}
            <div className='lg:col-span-3 lg:border-l border-gray border-opacity-[0.15] h-full flex flex-col justify-center lg:items-center m-5 ml-5 mt-5 sm:mt-10 lg:m-0'>
                <h4 className='text-xl font-medium text-primary-color'>${price}<span className='text-black opacity-70'> / NIGHT</span></h4>

                <button
                    // onClick={handlerReservation} className='mt-5 px-8 py-2 text-white font-medium bg-primary-color rounded-sm'
                    onClick={() => isAvailable(unavailableDates)} className='mt-5 px-8 py-2 text-white font-medium bg-primary-color rounded-sm'
                    // disabled={!isAvailable(unavailableDates)}
                    
                >
                    {/* <Link to={`/room/${_id}`}> */}
                    BOOK NOW
                    {/* </Link> */}
                </button>
            </div>
        </div>
    );
};

RoomCart.propTypes = {
    room: PropTypes.object.isRequired,
}

export default RoomCart;