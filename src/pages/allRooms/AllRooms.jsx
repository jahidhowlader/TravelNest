import './allRooms.css'
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import useFetchData from '../../hooks/useFetchData';
import RoomCart from './roomCart/RoomCart';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const AllRooms = () => {

    // ALL STATE ARE HERE
    const [openDate, setOpenDate] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    // Fetch rooms data Through custom hooks
    const { data: rooms, loading } = useFetchData('/rooms')

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    const alldates = getDatesInRange(date[0].startDate, date[0].endDate);

    // Check Avaiable Room with User date
    const isAvailable = (unavailableDates) => {

        const isFound = unavailableDates.some(date => alldates.includes(new Date(date).getTime()))
        return isFound // !isFound;
    };

    // Handle Resevervation
    const handlerReservation = async (id) => {

        try {

            const res = await axios.put(`http://localhost:3000/api/rooms/availability/${id}`, {
                dates: alldates
            })

            return res.data

        } catch (err) {

            console.log(err);
        }
    }

    return (
        <>
            {/* TITLE */}
            <Helmet>
                <title>Rooms | TravelNest</title>
            </Helmet>

            <section className='my-container mt-20 mb-40'>

                <div className='text-center'>
                    <h2 className='text-[42px] primary-font pb- font-bold'>Search Results</h2>
                    <span className='text-lg opacity-80 '>We have found <span className='font-semibold text-primary-color'>8</span> rooms that your needs.</span>
                </div>

                <div className='my-12'>

                    <div className='flex flex-col sm:flex-row justify-center sm:items-end gap-8'>

                        <div className='border-b pr-16 relative'>
                            <p className='opacity-50 text-sm pb-4 font-medium'>CHECK IN - CHECK OUT</p>
                            <p onClick={() => setOpenDate(!openDate)} className='pb-5 font-medium'>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</p>

                            <div className='absolute z-10 top-24'>

                                {
                                    openDate &&
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        minDate={new Date()}
                                    />
                                }
                            </div>
                        </div>

                        <div className='border-b pr-16'>
                            <p className='opacity-50 text-sm pb-4 font-medium'>ROOMS / GUESTS</p>
                            <p className='pb-5 font-medium'>2 Room , 1 Adult , 0 Children</p>
                        </div>

                        <button className='text-white px-12 py-2.5 rounded-sm bg-primary-color font-medium'>SEARCH</button>
                    </div>


                </div>


                <div className='space-y-8'>
                    {
                        loading ? 'loading' : (

                            rooms && rooms.map(room => <RoomCart
                                key={room._id}
                                room={room}
                                setOpenModal={setOpenModal}
                                handlerReservation={() => handlerReservation(room._id)}
                                isAvailable={isAvailable}
                            />)
                        )
                    }
                </div>
            </section>

        </>

    );
};

export default AllRooms;
