import PropTypes from 'prop-types'
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const BillingForm = ({ room, totalDays, additionalPrice, totalPrice, guests }) => {

    const [btnDisable, setBtnDisable] = useState(false)

    const navigate = useNavigate()
    const { user } = useAuth()

    const updateRoomDetails = useFetchData(`/room/${room?._id}`)

    // TEST
    const [unavailableDates, setUnavailableDates] = useState([])
    useEffect(() => {

        setUnavailableDates(updateRoomDetails?.data?.unavailableDates)
    }, [updateRoomDetails])

    const checkUnavailableDates = unavailableDates && unavailableDates.map(date => new Date(date).getTime())

    const isUnavailable = totalDays.some(date => checkUnavailableDates && checkUnavailableDates.includes(date))

    // handleReservation
    const handleReservation = async (e) => {

        e.preventDefault();

        const form = e.target

        const firstname = form.firstname.value
        const secondname = form.secondname.value
        const email = form.email.value
        const phone = form.phone.value
        const address = form.address.value
        const city = form.city.value
        const country = form.country.value
        const zipcode = form.zipcode.value

        // console.log(firstname, secondname, email, phone, address, city, country, zipcode);

        try {

            setBtnDisable(true)

            if (isUnavailable) {

                setBtnDisable(false)
                return toast.error('These dates are not allowed for booking!')
            }

            try {

                await axios.put(`https://travelnest-server-production.up.railway.app/api/room/availability/${room._id}`, {
                    dates: totalDays
                }) //updateRoomAvailability

                try {
                    await axios.post(`https://travelnest-server-production.up.railway.app/api/booking`, {
                        roomNumbers: room?.roomNumbers,
                        roomId: room?._id,
                        title: room?.title,
                        additionalPrice: {
                            airportPickup: additionalPrice.totalPickUp + '',
                            laundry: additionalPrice.totalLaundry + ''
                        },
                        price: room?.price,
                        totalPrice,
                        guests: {
                            adult: guests?.adult,
                            children: guests?.children
                        },
                        username: `${firstname} ${secondname}`,
                        email,
                        phone,
                        address,
                        city,
                        country,
                        zipcode,
                        bookingDate: totalDays
                    }) // createBooking

                    form.reset()

                    // NAVIGATE BOOKING LIST PAGE
                    navigate('/bookingList')

                    toast.success('Succefully Booking')

                } catch (err) {
                    console.log(err);
                    toast.error('Semothing Wrong')
                }

            } catch (err) {
                console.log(err);
                toast.error('Semothing Wrong')
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleReservation} className="my-10">
            <h3 className="text-2xl lg:text-3xl primary-font font-bold">Your Imformation</h3>

            <div className="grid lg:grid-cols-2 gap-8 mt-8">

                {/* First NAme */}
                <div className="w-full">
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name *"
                        className="w-full py-3 border-b bg-[#f6f6fa] focus:border-primary-color outline-none px-2"
                        required
                    />
                </div>

                {/* Second NAme */}
                <div className="w-full">
                    <input
                        type="text"
                        name="secondname"
                        placeholder="Second Name *"
                        className="w-full py-3 border-b bg-[#f6f6fa] focus:border-primary-color outline-none px-2"
                        required
                    />
                </div>

                {/* email */}
                <div className="w-full">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        defaultValue={user?.email}
                        className="w-full py-3 border-b bg-[#f6f6fa] focus:border-primary-color outline-none px-2"
                        disabled
                    />
                </div>

                {/* phone */}
                <div className="w-full">
                    <input
                        type="number"
                        name="phone"
                        placeholder="Phone *"
                        className="w-full py-3 border-b bg-[#f6f6fa] focus:border-primary-color outline-none px-2"
                        required
                    />
                </div>

                {/* address */}
                <div className="w-full">
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="w-full py-3 border-b bg-[#f6f6fa] focus:border-primary-color outline-none px-2"
                    />
                </div>

                {/* City */}
                <div className="w-full">
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="w-full py-3 border-b bg-[#f6f6fa] focus:border-primary-color outline-none px-2"
                    />
                </div>

                {/* Country */}
                <div className="w-full">
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="w-full py-3 border-b bg-[#f6f6fa] focus:border-primary-color outline-none px-2"
                    />
                </div>

                {/* zipcode */}
                <div className="w-full">
                    <input
                        type="text"
                        name="zipcode"
                        placeholder="Zipcode"
                        className="w-full py-3 border-b bg-[#f6f6fa] focus:border-primary-color outline-none px-2"
                    />
                </div>
            </div>

            {/* TODO: ADD CUPON FEATURE */}
            {/* <div className="my-8">
                <h3 className="text-3xl primary-font font-bold">Have a coupon?</h3>

                <div className="flex gap-8 mt-5">
                    <input type="text" className="py-2.5 px-4 border rounded-sm outline-none focus:border-primary-color w-6/12" placeholder="Enter cupon code if you have one" />
                    <button className="px-8 py-2.5 rounded-sm bg-primary-color text-white font-medium h-full border">APPLY COUPON</button>
                </div>
            </div> */}

            <button type="submit" className="px-8 py-2 bg-primary-color text-white uppercase rounded-sm font-medium mt-10" disabled={btnDisable} >{btnDisable ? 'Proccessing' : 'Reservation'}</button>
        </form>
    );
};

BillingForm.propTypes = {
    room: PropTypes.object.isRequired,
    totalDays: PropTypes.array.isRequired,
    additionalPrice: PropTypes.object.isRequired,
    totalPrice: PropTypes.number.isRequired,
    guests: PropTypes.object.isRequired
}

export default BillingForm;