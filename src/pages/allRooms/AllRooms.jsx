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
import { useEffect } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

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
    // FOR OPEN AND COUNT GUESTS
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        room: 1,
        adult: 1,
        children: 0,
    });

    // Fetch rooms data Through custom hooks
    const { data: roomData, loading } = useFetchData('/rooms?room=all')
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        setRooms(roomData); // Update rooms when roomData changes
    }, [roomData]);

    console.log('room', rooms);
    console.log('room', roomData);


    // Handle Resevervation
    const handleSearch = async () => {

        setOpenOptions(false)

        const searchResult = await axios(`http://localhost:3000/api/rooms?room=${options.room}&adult=${options.adult}&children=${options.children}`)
        setRooms(searchResult.data)
    }

    // HANDLE GUEST COUNT
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };


    return (
        <>
            {/* TITLE */}
            <Helmet>
                <title>Rooms | TravelNest</title>
            </Helmet>

            <section className='my-container mt-20 mb-40'>

                <div className='text-center'>
                    <h2 className='text-[42px] primary-font pb- font-bold'>Search Results</h2>
                    <span className='text-lg opacity-80 '>We have found <span className='font-semibold text-primary-color'>{rooms.length}</span> rooms that your needs.</span>
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

                        <div onClick={() => setOpenOptions(!openOptions)} className='border-b pr-16 relative'>
                            <p className='opacity-50 text-sm pb-4 font-medium'>ROOMS / GUESTS</p>
                            <p className='pb-5 font-medium'>{options.room} Room , {options.adult} Adult , {options.children} Children</p>

                            {
                                openOptions &&
                                <div className='absolute z-10 top-24 right-0 bg-white w-full border border-gray border-opacity-20 p-5 rounded'>

                                    {/* Room */}
                                    <div className='flex justify-between items-center mb-5'>
                                        <span>Room</span>

                                        <div className='flex items-center'>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleOption("room", "d")
                                                }}
                                                className='text-xl disabled:cursor-not-allowed disabled:opacity-50'
                                                disabled={options.room <= 1}
                                            >
                                                <FiMinus />
                                            </button>
                                            <span className='mx-3'>{options.room}</span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleOption("room", "i")
                                                }}
                                                className='text-xl disabled:cursor-not-allowed disabled:opacity-50'
                                            ><FiPlus />
                                            </button>
                                        </div>
                                    </div>

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
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                        <button onClick={handleSearch} className='text-white px-12 py-2.5 rounded-sm bg-primary-color font-medium'>SEARCH</button>
                    </div>


                </div>


                <div className='space-y-8'>
                    {
                        loading ? 'loading' : (

                            rooms && rooms.map(room => <RoomCart
                                key={room._id}
                                room={room}
                                setOpenModal={setOpenModal}
                            />)
                        )
                    }
                </div>
            </section>

        </>

    );
};

export default AllRooms;
