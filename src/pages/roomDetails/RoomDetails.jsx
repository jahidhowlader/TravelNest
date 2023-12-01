import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import BookRoomSidbar from './bookRoomSidbar/BookRoomSidbar';
import { Helmet } from 'react-helmet-async';
import RoomSize from '../../components/roomSize/RoomSize';
import Balcony from '../../components/icons/Balcony';
import Tv from '../../components/icons/Tv';
import Iron from '../../components/icons/Iron';
import Locker from '../../components/icons/Locker';
import Telephone from '../../components/icons/Telephone';
import Wifi from '../../components/icons/Wifi';
import Breakfast from '../../components/icons/Breakfast';
import Hairdryer from '../../components/icons/Hairdryer';
import Kettle from '../../components/icons/Kettle';
import Shower from '../../components/icons/Shower';
import Towel from '../../components/icons/Towel';
import Desk from '../../components/icons/Desk';
import { DateRange } from 'react-date-range';
import { parseISO } from 'date-fns';
import './roomDetails.css'
import Loader from '../../components/loader/Loader';


const RoomDetails = () => {

    const { id } = useParams()

    // FETCH SINGLE DATA THROUG BACKEND
    const { data: room, loading } = useFetchData(`/room/${id}`)
    console.log(room);

    // CHECK UNAVAIABLE DATE
    const disabledDates = room?.unavailableDates && room?.unavailableDates.map((dateString) => parseISO(dateString));

    // console.log('1', room?.unavailableDates[0]);  // 2023-12-01T04:58:20.141Z
    // console.log('2', parseISO(room?.unavailableDates[0])); // Fri Dec 01 2023 10:58:20 GMT+0600 (Bangladesh Standard Time)
    // console.log('3', new Date()); // Fri Dec 01 2023 10:58:20 GMT+0600 (Bangladesh Standard Time)
    // console.log('3', room?.unavailableDates[0]?.getTime()); 

    const bookingDate = room?.unavailableDates?.length && room?.unavailableDates.map(date => parseISO(date).getTime())
    
    // console.log('TOday', new Date().getTime()); 
    console.log('bookingDate', bookingDate); 

    return (
        <>
            {/* TITLE */}
            <Helmet>
                <title>{`${room?.title} | TravelNest`}</title>
            </Helmet>

            {
                loading ? <Loader /> : room?._id && (
                <section className='my-container mt-14 mb-24'>

                        {/* TODO: REMAINING Dynamic */}
                        {/* Banner */}
                        <div className='grid sm:grid-cols-2 gap-2 overflow-hidden'>
                            <div>
                                <img src={room?.photos[0]} alt="room" className='object-cover h-[200px] sm:h-full w-full  cursor-pointer' />
                            </div>
                            <div className='grid grid-cols-2 gap-2'>

                                <div>
                                    <img src={room?.photos[1] || '/rooms/tv.jpg'} alt="room" className='object-cover h-[100px] sm:h-[150px] md:h-[208px] w-full' />
                                </div>
                                <div>
                                    <img src={room?.photos[2] || '/rooms/bathroom.jpg'} alt="room" className='object-cover h-[100px] sm:h-[150px] md:h-[208px] w-full' />
                                </div>
                                <div>
                                    <img src={room?.photos[3] || '/rooms/balcony.jpg'} alt="room" className='object-cover h-[100px] sm:h-[150px] md:h-[208px] w-full' />
                                </div>
                                <div>
                                    <img src={room?.photos[4] || '/rooms/dressing.jpg'} alt="room" className='object-cover h-[100px] sm:h-[150px] md:h-[208px] w-full' />
                                </div>
                            </div>
                        </div>

                        {/* Details */}
                        <div className='mt-16 grid xl:grid-cols-7 relative'>

                            <div className='col-span-5 space-y-12 mr-20'>
                                <div className='space-y-3'>
                                    <h5 className='tracking-wider font-medium text-primary-color'>${room?.price} PER NIGHT</h5>

                                    <h2 className='primary-font text-[42px] font-bold'>{room?.title}</h2>

                                    {/* Use Room Size COMPONENT */}
                                    <RoomSize room={room} />

                                    <p className='text-lg tracking-wide py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.
                                    </p>
                                </div>

                                {/* Room Facilities */}
                                <div>
                                    <h3 className='text-3xl primary-font font-bold'>Room Facilities</h3>

                                    <div className='grid xl:grid-cols-2 w-9/12 gap-20 mt-5'>

                                        <div className='space-y-8'>
                                            <div className='flex items-center gap-5'>
                                                <Balcony className={'w-8'} />
                                                <span className='text-lg'>Balcony or Terrace</span>
                                            </div>
                                            <div className='flex items-center gap-5'>
                                                <Tv className={'w-8'} />
                                                <span className='text-lg'>Flat Screen TV</span>
                                            </div>
                                            <div className='flex items-center gap-5'>
                                                <Iron className={'w-8'} />
                                                <span className='text-lg'>Iron / Ironing Board</span>
                                            </div>
                                            <div className='flex items-center gap-5'>
                                                <Locker className={'w-8'} />
                                                <span className='text-lg'>Saving Safe</span>
                                            </div>
                                            <div className='flex items-center gap-5'>
                                                <Telephone className={'w-8'} />
                                                <span className='text-lg'>Telephone</span>
                                            </div>
                                            <div className='flex items-center gap-5'>
                                                <Wifi className={'w-8'} />
                                                <span className='text-lg'>Wifi Access</span>
                                            </div>
                                        </div>

                                        <div className='space-y-8'>
                                            <div className='flex items-center gap-5'>
                                                <Breakfast className={'w-8'} />
                                                <span className='text-lg'>Breakfast Included</span>
                                            </div>
                                            <div className='flex items-center gap-5'>
                                                <Hairdryer className={'w-8'} />
                                                <span className='text-lg'>Hairdryer</span>
                                            </div>
                                            <div className='flex items-center gap-5'>
                                                <Kettle className={'w-8'} />
                                                <span className='text-lg'>Kettle, Tea & Coffee</span>
                                            </div>
                                            <div className='flex items-center gap-5'>
                                                <Shower className={'w-8'} />
                                                <span className='text-lg'>Shower bathtub</span>
                                            </div>
                                            <div className='flex items-center gap-5'>
                                                <Towel className={'w-8'} />
                                                <span className='text-lg'>Towel Warmer</span>
                                            </div>
                                            <div className='flex items-center gap-5'>
                                                <Desk className={'w-8'} />
                                                <span className='text-lg'>Writing Desk</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Availability DATES */}
                                {/* <div>
                                    <h3 className='text-3xl primary-font font-bold mb-2'>Availability</h3>
                                    <div id='availability'>


                                        <DateRange
                                            months={2}
                                            minDate={new Date()}
                                            disabledDates={disabledDates}
                                            rangeColors={['#b85c47']}
                                            direction="horizontal"
                                        />
                                    </div>
                                </div> */}



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
                )
            }
        </>
    );
};

export default RoomDetails;