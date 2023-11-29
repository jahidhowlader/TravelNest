import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HiArrowLongRight, HiOutlineInformationCircle, HiOutlineXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import './bookingList.css'

const BookingList = () => {

    const { data: bookingList, loading } = useFetchData('/booking/jahidhowlader.info@gmail.com')


    // console.log(bookingList);
    const dateString = "2023-11-29T17:43:07.057Z";
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString('en-GB'); // Adjust the locale as needed

    console.log(new Date(dateString).toLocaleDateString('en-GB'));

    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Booking List | TravelNest</title>
            </Helmet>

            <section className="my-[60px] my-container">

                <div className={`w-full `}>

                    {/* <div className='flex justify-center items-center gap-2'>
                                    <HiOutlineInformationCircle size={30} />
                                    <h3 className='py-24 text-2xl'> You have no items in your cart</h3>
                                </div> */}

                    <>
                        <div className="overflow-x-auto h-3/4 bg-primary-color bg-opacity-5">

                            <table className="w-full" id="cart">
                                {/* head */}
                                <thead className="text-left bg-primary-color text-white" id='cardHead'>
                                    <tr className="primary-font font-semibold text-left">
                                        <th className="">Room Category</th>
                                        <th>Username</th>
                                        <th>Phone</th>
                                        <th>Room No.</th>
                                        <th>Booking Date</th>
                                        <th>Guests</th>
                                        <th>Price</th>
                                        <th>Add. Price</th>
                                        <th>Pdf</th>
                                    </tr>
                                </thead>
                                <tbody className="primary-fot font-semibold text-left">
                                    {/* row 1 */}
                                    {
                                        bookingList && bookingList.map(list => <tr
                                            key={list._id}
                                            className=" px-20">
                                            <td className="">
                                                <Link to='text-base'>{list.title}</Link>

                                            </td>

                                            <td className='text-xs'>{list.username}</td>
                                            <td className='text-xs'>{list.phone}</td>
                                            <td className='text-xs'>{list.roomNumbers}</td>
                                            <td className='text-xs text-center'>{ new Date(list.bookingDate[0]).toLocaleDateString('en-GB')} <br /> to <br />{ new Date(list.bookingDate[list.bookingDate.length - 1]).toLocaleDateString('en-GB')}</td>
                                            <td className='text-xs'>{(+list.guests?.adult) + (+list.guests?.children)}</td>
                                            <td className='text-xs'>{(+list.additionalPrice.airportPickup) + (+list.additionalPrice.laundry)}</td>
                                            <td className='text-xs'>{list.price}</td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </>
                </div>
            </section>
        </>
    );
};

export default BookingList;