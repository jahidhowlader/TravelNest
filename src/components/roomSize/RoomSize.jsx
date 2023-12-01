import { BsBoxSeam } from 'react-icons/bs';
import { IoBedOutline } from 'react-icons/io5';
import { LiaBathSolid } from 'react-icons/lia';

const RoomSize = ({room}) => {
    return (
        <span className="flex flex-wrap items-center gap-5 gap-y-2 sm:gap-y-0 sm:gap-7 text-lg tracking-wide ">
            <span className='flex items-center gap-2'> <BsBoxSeam className="text-lg" />{room?.size}m<sup className="-ml-2">2</sup></span>
            <span className='flex items-center gap-2'> <IoBedOutline className="text-lg" />{`${room?.beds < 2 ? `${room?.beds} bed` : `${room?.beds} beds`}`}</span>
            <span className='flex items-center gap-2'> <LiaBathSolid className="text-lg" />{`${room?.bathroom < 2 ? `${room?.bathroom} bathroom` : `${room?.bathroom} bathrooms`}`}</span>
        </span>
    );
};

export default RoomSize;