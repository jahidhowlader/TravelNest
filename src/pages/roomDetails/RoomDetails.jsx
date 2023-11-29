import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import { BsBoxSeam } from 'react-icons/bs';
import { IoBedOutline } from 'react-icons/io5';
import { LiaBathSolid } from 'react-icons/lia';
import BookRoomSidbar from './bookRoomSidbar/BookRoomSidbar';
import { Helmet } from 'react-helmet-async';


const RoomDetails = () => {

    // ALL STATE ARE HERE
    const { id } = useParams()


    // FETCH SINGLE DATA THROUG BACKEND
    const { data: room, loading } = useFetchData(`/room/${id}`)



    return (
        <>
            {/* TITLE */}
            <Helmet>
                <title>{`${room?.title} | TravelNest`}</title>
            </Helmet>

            <section className='my-container mt-14 mb-24 rounded-xl'>

                {/* Banner */}
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <img src="/rooms/rooms1.jpeg" alt="room" className='object-cover h-full w-full rounded-xl rounded-r-none cursor-pointer' />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>

                        <div>
                            <img src="/rooms/rooms1.jpeg" alt="room" className='object-cover h-full w-full' />
                        </div>
                        <div>
                            <img src="/rooms/rooms11.jpeg" alt="room" className='object-cover h-full w-full rounded-tr-xl' />
                        </div>
                        <div>
                            <img src="/rooms/rooms111.jpeg" alt="room" className='object- h-full w-full' />
                        </div>
                        <div>
                            <img src="/rooms/rooms1111.jpeg" alt="room" className='object-cover h-full w-full rounded-ee-xl' />
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className='mt-16 grid grid-cols-7 relative'>

                    <div className='col-span-5 space-y-12 mr-20'>
                        <div className='space-y-3'>
                            <h5 className='tracking-wider font-medium text-primary-color'>${room?.price} PER NIGHT</h5>

                            <h2 className='primary-font text-[42px] font-bold'>{room?.title}</h2>
                            <span className="flex flex-wrap items-center gap-5 gap-y-2 sm:gap-y-0 sm:gap-7 text-lg tracking-wide ">
                                <span className='flex items-center gap-2'> <BsBoxSeam className="text-lg" />{room?.size}m<sup className="-ml-2">2</sup></span>
                                <span className='flex items-center gap-2'> <IoBedOutline className="text-lg" />{`${room?.beds < 2 ? `${room?.beds} bed` : `${room?.beds} beds`}`}</span>
                                <span className='flex items-center gap-2'> <LiaBathSolid className="text-lg" />{`${room?.bathroom < 2 ? `${room?.bathroom} bathroom` : `${room?.bathroom} bathrooms`}`}</span>
                            </span>

                            <p className='text-lg tracking-wide py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.
                            </p>
                        </div>

                        {/* Room Facilities */}
                        <div>
                            <h3 className='text-3xl primary-font font-bold'>Room Facilities</h3>
                        </div>

                        {/* Additional Services */}
                        <div className='space-y-8'>
                            <h3 className='text-3xl primary-font font-bold'>Additional Services</h3>

                            <div className='flex items-center gap-5'>
                                <div>
                                    <img src="/airport.jpeg" alt="airport" className='h-[100px] w-[100px] object-cover' />
                                </div>

                                <div>
                                    <h6 className='text-xl font-bold primary-font'>Airport Pick-up</h6>
                                    <p className='text-sm text-primary-color font-semibold tracking-wider mt-1 mb-2'>$12 <span className='text-black opacity-80'>/ PACKAGE</span></p>
                                    <span>Various versions have evolved over the years, sometimes by accident</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-5'>
                                <div>
                                    <img src="/laundry.webp" alt="airport" className='h-[100px] w-[100px] object-cover' />
                                </div>

                                <div>
                                    <h6 className='text-xl font-bold primary-font'>Laundry Service</h6>
                                    <p className='text-sm text-primary-color font-semibold tracking-wider mt-1 mb-2'>$8 <span className='text-black opacity-80'>/ PERSON</span></p>
                                    <span>Many desktop publishing packages and web page editors</span>
                                </div>
                            </div>
                        </div>

                        {/* Room Rules */}
                        <div>
                            <h3 className='text-3xl primary-font font-bold pb-8'>Room Rules</h3>
                            <ul className='text-lg tracking-wide opacity-80 space-y-1.5'>
                                <li>- Checkin: After 2:00 PM</li>
                                <li>- Check-out: 11:00 AM</li>
                                <li>- Self-check-in with lockbox</li>
                                <li>- No smoking</li>
                                <li>- Pets are allowed</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-span-2 ml-5'>

                        <BookRoomSidbar room={room} />
                    </div>
                </div>
            </section >
        </>
    );
};

export default RoomDetails;