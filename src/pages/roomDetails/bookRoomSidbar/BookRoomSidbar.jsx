import PropTypes from 'prop-types'
import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { HiChevronDown } from 'react-icons/hi2';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Link } from 'react-router-dom'

const BookRoomSidbar = ({ room, disabledDates }) => {

    // FOR OPEN AND SELECT DATE
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    // FOR OPEN AND COUNT GUESTS
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0
    });

    // HANDLE GUEST COUNT
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    // COUNT ALL DAYS USER SELECTED FOR GET TOTAL PRICE ROOM SERVICES AND STORE DATA IN MONGODB
    const countAllDateOnRange = (startDateString, endDateString) => {

        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const includedDays = [];

        for (let currentDay = startDate; currentDay <= endDate; currentDay.setDate(currentDay.getDate() + 1)) {

            includedDays.push(new Date(currentDay).getTime());
        }

        return includedDays
    };
    const totalDays = countAllDateOnRange(date[0].startDate, date[0].endDate);

    return (
        <aside className='sticky top-10 border border-gray border-opacity-[0.15] rounded-md bg-white shadow-sm p-7 space-y-5'>

            <h3 className='text-2xl lg:text-3xl primary-font font-bold'>Book Your Room</h3>


            {/* DATE RANGE */}
            <div className='border-b relative z-20'>
                <p className='opacity-50 font-semibold text-xs sm:text-sm pb-3 tracking-wider'>CHECK IN - CHECK OUT</p>
                <p onClick={() => setOpenDate(!openDate)} className='pb-3 font-medium'>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</p>

                <div className='absolute z-10 top-20 -right-7 lg:right-0'>

                    {
                        openDate &&
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            disabledDates={disabledDates}
                            rangeColors={['#b85c47']}
                        />
                    }
                </div>
            </div>

            {/* ROOMS QUANTITY */}
            <div className='border-b relative'>
                <p className='opacity-50 font-semibold text-xs sm:text-sm tracking-wider pb-3'>ROOMS</p>
                <p className='pb-3 font-medium '>{(+room?.beds) < 2 ? `${room?.beds} room` : `${room?.beds} rooms`}</p>
            </div>

            {/* Number Of GUESTS */}
            <div onClick={() => setOpenOptions(!openOptions)} className='border-b relative'>
                <p className='opacity-50 font-semibold text-xs sm:text-base tracking-wider pb-3'>NO OF GUESTS</p>
                <div className='flex items-center justify-between pb-3 relative'>
                    <p className='font-medium'>{options.adult} Adult , {options.children} Children</p>
                    <HiChevronDown />


                    {
                        openOptions &&
                        <div className='absolute z-10 top-12 right-0 bg-white w-full border border-gray border-opacity-20 p-5 rounded'>

                            {/* Adult */}
                            <div className='flex justify-between items-center mb-5'>
                                <span>Adult</span>

                                <div className='flex items-center'>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleOption("adult", "d")
                                        }}
                                        className='text-xl disabled:cursor-not-allowed disabled:opacity-50'
                                        disabled={options.adult <= 1}
                                    >
                                        <FiMinus />
                                    </button>
                                    <span className='mx-3'>{options.adult}</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleOption("adult", "i")
                                        }}
                                        className='text-xl disabled:cursor-not-allowed disabled:opacity-50'
                                        disabled={options.adult === +room?.adult_capacity}
                                    ><FiPlus />
                                    </button>
                                </div>
                            </div>

                            {/* Children */}
                            <div className='flex justify-between items-center'>
                                <span>Children</span>

                                <div className='flex items-center'>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleOption("children", "d")
                                        }}
                                        className='text-xl disabled:cursor-not-allowed disabled:opacity-50'
                                        disabled={options.children <= 0}
                                    >
                                        <FiMinus />
                                    </button>
                                    <span className='mx-3'>{options.children}</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleOption("children", "i")
                                        }}
                                        className='text-xl disabled:cursor-not-allowed disabled:opacity-50'
                                        disabled={options.children === +room.children_capacity}
                                    >
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            {/* Total Price */}
            <div className='relative'>
                <p className='opacity-50 font-semibold text-xs sm:text-sm tracking-wider pb-3'>PRICE</p>

                <div className='flex justify-between items-center'>
                    <h5 className='font-medium'>Total Price </h5>
                    <p className='font-semibold mr-1 text-xl'>${totalDays?.length * room?.price}</p>
                </div>
            </div>

            {
                date[0].startDate.toLocaleTimeString() !== '12:00:00 AM' && date[0].endDate.toLocaleTimeString() !== '12:00:00 AM' ?
                    <button className='w-full bg-primary-color py-2 text-white font-medium tracking-wide sm:text-sm rounded-sm mt-5 cursor-not-allowed px-2'>PLEASE SELECT CHECK OUT</button> :
                    <Link
                        to={`/reservation/${room._id}`}
                        state={
                            {
                                options: options,
                                totalDays: totalDays,
                                date: date,
                                room: room
                            }
                        }
                    >
                        <button className='w-full bg-primary-color py-2 text-white font-medium tracking-wide rounded-sm mt-5'>BOOK NOW</button>
                    </Link>
            }
        </aside>
    );
};

BookRoomSidbar.propTypes = {
    room: PropTypes.array.isRequired
}

export default BookRoomSidbar;