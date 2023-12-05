import PropTypes from 'prop-types';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import RoomSize from '../../../components/roomSize/RoomSize';
import Balcony from '../../../components/icons/Balcony';
import Breakfast from '../../../components/icons/Breakfast';
import Tv from '../../../components/icons/Tv';
import Hairdryer from '../../../components/icons/Hairdryer';
import Iron from '../../../components/icons/Iron';
import Kettle from '../../../components/icons/Kettle';
import Locker from '../../../components/icons/Locker';
import { motion } from "framer-motion"

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
}


const variants = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const RoomCart = ({ room }) => {

    const { _id, title, photos, description, price } = room



    return (
        <motion.div
            className='border border-gray border-opacity-[0.15] grid lg:grid-cols-12 items-center'
            variants={variants} initial="initial" whileInView="animate"

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
            <div className='lg:col-span-5 pl-5 space-y-5 mt-5 lg:mt-0 pr-5'>
                <Link to={`/room/${_id}`}>
                    <h3 className='text-2xl sm:text-3xl lg:text-3xl xl:text-[40px] primary-font font-bold hover:text-primary-color'>{title}</h3>
                </Link>
                {/* Use Room Size COMPONENT */}
                <RoomSize room={room} />

                <p className='text-lg opacity-80 mr-5'>{description.substring(0, 110)}...</p>

                <div className='flex flex-wrap items-center gap-6 mr-5 sm:mr-0'>
                    <Balcony className='w-6 h-auto' />
                    <Breakfast className='w-6 h-auto' />
                    <Tv className='w-6 h-auto' />
                    <Hairdryer className='w-6 h-auto' />
                    <Iron className='w-6 h-auto' />
                    <Kettle className='w-6 h-auto' />
                    <Locker className='w-6 h-auto' />
                </div>
            </div>

            {/* Confirmation */}
            <div className='lg:col-span-3 lg:border-l border-gray border-opacity-[0.15] h-full flex flex-col justify-center lg:items-center m-5 ml-5 mt-5 sm:mt-10 lg:m-0'>
                <h4 className='text-xl font-medium text-primary-color'>${price}<span className='text-black opacity-70'> / NIGHT</span></h4>

                <Link to={`/room/${_id}`}>
                    <button className='mt-5 px-8 py-2 text-white font-medium bg-primary-color rounded-sm'>
                        CHECK IN
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

RoomCart.propTypes = {
    room: PropTypes.object.isRequired,
}

export default RoomCart;