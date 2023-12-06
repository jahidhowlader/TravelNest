import { Helmet } from 'react-helmet-async';
import Loader from '../../components/loader/Loader';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import './bookingList.css'

const BookingList = () => {

    const { user } = useAuth()

    const [bookingList, setDataList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        fetch(`https://travelnest-server-production.up.railway.app/api/bookingList/${user?.email}`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => setDataList(data))

        setLoading(false)

    }, [user])

    // handlerPDF
    const handlerPDF = id => {
        console.log(id);
    }

    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Booking List | TravelNest</title>
            </Helmet>

            {
                loading ? <Loader /> : (
                    <section className="my-20 my-container">

                        {
                            !bookingList?.length ? (<>
                                <div className="flex flex-col justify-center items-center ">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl primary-font font-bold text-center mb-10 lg:mb-20">
                                        Booking List
                                    </h1>
                                    <h3 className="text-3xl primary-font font-semibold pt-5 pb-20">You have not add booking yet!</h3>
                                </div>

                            </>) : (
                                <>
                                    <div className={`w-full min-h-[600px]`}>

                                        <h1 className="text-4xl md:text-5xl lg:text-6xl primary-font font-bold text-center mb-10 lg:mb-20">
                                            Booking List
                                        </h1>

                                        <div className="overflow-x-auto bg-opacity-5">

                                            <table className="w-full" id="cart">
                                                {/* head */}
                                                <thead className="text-left bg-primary-color text-white" id='cardHead'>
                                                    <tr className="primary-font font-semibold text-left">
                                                        <th style={{ paddingLeft: '10px' }}>#</th>
                                                        <th>Room Category</th>
                                                        <th>Username</th>
                                                        <th>Phone</th>
                                                        <th>Room No.</th>
                                                        <th>Booking Date</th>
                                                        <th>Guests</th>
                                                        <th>Room Bill</th>
                                                        <th>Ex: Price</th>
                                                        <th>Total Bill</th>
                                                        {/* <th>Pdf</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody className="primary-fot font-semibold text-left">
                                                    {/* row 1 */}
                                                    {
                                                        bookingList && bookingList.map((list, idx) => <tr
                                                            key={list._id}
                                                            className="">
                                                            <td style={{ paddingLeft: '10px' }}>{idx + 1}.</td>
                                                            <td>
                                                                {/* TODO: course ID */}
                                                                {/* <Link to={`/room/${list._id}`}> */}
                                                                {list.title}
                                                                {/* </Link> */}

                                                            </td>

                                                            <td className='text-xs'>{list.username}</td>
                                                            <td className='text-xs'>{list.phone}</td>
                                                            <td className='text-xs'>{list.roomNumbers}</td>
                                                            <td className='text-xs'>{new Date(list.bookingDate[0]).toLocaleDateString('en-GB')} <br /> to <br />{new Date(list.bookingDate[list.bookingDate.length - 1]).toLocaleDateString('en-GB')}</td>
                                                            <td className='text-xs'>{(+list.guests?.adult) + (+list.guests?.children)}</td>
                                                            <td className='text-xs'>${list.price} (Day)</td>
                                                            <td className='text-xs'>${(+list.additionalPrice.airportPickup) + (+list.additionalPrice.laundry)}</td>
                                                            <td className='text-xs font-bold'>${list.totalPrice}</td>
                                                            {/* <td className='text-xs'><BsFiletypePdf onClick={() => handlerPDF(list._id)} /></td> */}
                                                        </tr>)
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            )
                        }

                    </section>
                )
            }
        </>
    );
};

export default BookingList;