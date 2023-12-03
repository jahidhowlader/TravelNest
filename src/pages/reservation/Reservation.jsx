import { useLocation } from "react-router-dom";
import { GoGift } from "react-icons/go";
import BillingForm from "./billingForm/BillingForm";
import { format } from "date-fns";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Reservation = () => {

    // GET LOCATION PATH
    const location = useLocation()

    // ALL STATE ARE HERE
    const [pickUp, setPickUp] = useState(false)
    const [laundry, setLaundry] = useState(false)

    // DISTRUCTURE VALUE FROM BOOKING ROOM SIDEBAR, WHICH ARE HOLD LOCATION STATE
    const { date, options, totalDays, room, setDate } = location?.state || {}

    // ADD TOTAL ADDITIONAL COST
    const additionalPrice = {

        totalPickUp: pickUp ? 12 : 0,
        totalLaundry: laundry ? 8 * (options?.adult + options?.children) : 0,
    }

    const subTotalPrice = additionalPrice.totalPickUp + additionalPrice.totalLaundry
    const totalPrice = (totalDays?.length * room?.price) + additionalPrice.totalPickUp + additionalPrice.totalLaundry

    return (

        <>
            <section className="my-container my-28 min-h-scree">
                {
                    !location.state?.options ?
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-6xl primary-font font-bold">
                                Booking Checkout
                            </h1>
                            <h3 className="text-3xl primary-font font-semibold pt-5 pb-20">You had a mistake, Please go to your back space!</h3>
                        </div> : (
                            <>
                                <div>

                                    <h1 className="text-5xl primary-font font-bold text-center mb-20">
                                        Booking Checkout
                                    </h1>

                                    <div className="grid grid-cols-12">
                                        <div className="col-span-8 mr-20">
                                            <h2 className="text-4xl primary-font font-bold">Billing Details</h2>

                                            <div className="border flex items-center gap-3 rounded-sm p-4 my-8">
                                                <GoGift className="text-primary-color text-xl" />
                                                <p className="text-lg font-medium">Your promotion code <span className="text-primary-color">HNY24</span></p>
                                            </div>


                                            {/* Additional Services */}
                                            <div className='space-y-8'>

                                                <h4 className="text-3xl primary-font font-semibold ">Choose Additional Services</h4>

                                                <div className='flex justify-between items-center gap-5 border border-gray border-opacity-20 rounded-sm'>
                                                    <div className="flex items-center gap-5">
                                                        <div>
                                                            <img src="/airport.jpeg" alt="airport" className='h-[100px] w-[100px] object-cover' />
                                                        </div>

                                                        <div>
                                                            <h6 className='text-xl font-bold primary-font'>Airport Pick-up</h6>
                                                            <p className='text-sm text-primary-color font-semibold tracking-wider mt-1 mb-2'>$12 <span className='text-black opacity-80'>/ PACKAGE</span></p>
                                                        </div>
                                                    </div>

                                                    {/* Icon */}
                                                    <div className="mr-10">
                                                        {
                                                            !pickUp ?
                                                                <FiPlus onClick={() => setPickUp(true)} className="text-2xl cursor-pointer" /> :
                                                                <MdClose onClick={() => setPickUp(false)} className="text-2xl cursor-pointer" />
                                                        }
                                                    </div>
                                                </div>

                                                <div className='flex justify-between items-center gap-5 border border-gray border-opacity-20 rounded-sm'>
                                                    <div className="flex items-center gap-5">
                                                        <div>
                                                            <img src="/laundry.webp" alt="laundry" className='h-[100px] w-[100px] object-cover' />
                                                        </div>

                                                        <div>
                                                            <h6 className='text-xl font-bold primary-font'>Laundry Service</h6>
                                                            <p className='text-sm text-primary-color font-semibold tracking-wider mt-1 mb-2'>$8 <span className='text-black opacity-80'>/ Person</span></p>
                                                        </div>
                                                    </div>

                                                    {/* Icon */}
                                                    <div className="mr-10">
                                                        {
                                                            !laundry ?
                                                                <FiPlus onClick={() => setLaundry(true)} className="text-2xl cursor-pointer" /> :
                                                                <MdClose onClick={() => setLaundry(false)} className="text-2xl cursor-pointer" />
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Client Details */}
                                            <BillingForm
                                                room={room}
                                                totalDays={totalDays}
                                                guests={options}
                                                additionalPrice={additionalPrice}
                                                totalPrice={totalPrice}
                                                date={date}
                                                setDate={setDate}
                                            />
                                        </div>

                                        <aside className="col-span-4">
                                            <div className="sticky top-10 border border-gray border-opacity-[0.15] rounded-md bg-white shadow-sm p-7">

                                                <h2 className="text-4xl primary-font font-bold">Your Stay</h2>

                                                {/* Checkin */}
                                                <div className="flex items-center gap-16 mt-5">
                                                    <div>
                                                        <p className='opacity-50 text-sm pb-1 font-medium'>CHECK IN</p>
                                                        <p className='font-medium'>{`${format(date[0].startDate, "dd/MM/yyyy")}`}</p>
                                                    </div>

                                                    <div>
                                                        <p className='opacity-50 text-sm pb-1 font-medium'>CHECK OUT</p>
                                                        <p className='font-medium'>{`${format(date[0].endDate, "dd/MM/yyyy")}`}</p>
                                                    </div>
                                                </div>

                                                {/* Guest */}
                                                <div className="flex justify-between items-center border border-gray border-opacity-[0.15] border-l-0 border-r-0 my-2 py-3">
                                                    <span className='opacity-50 text-sm font-medium'>GUEST</span>
                                                    <span className='font-medium'>{options?.adult} Adult, {options?.children} Childrens</span>
                                                </div>

                                                {/* Rooms */}
                                                <div className="border-b border-gray border-opacity-[0.15] my-2 py-3">
                                                    <span className='opacity-50 text-sm font-medium'>ROOMS</span>

                                                    <div className="flex justify-between mt-2">
                                                        <div>
                                                            <span className='font-medium'>{room?.title}</span><br />
                                                            <span className='opacity-50 text-sm font-medium'>{totalDays?.length} NIght</span>
                                                        </div>
                                                        <span className="font-medium text-primary-color">${totalDays?.length * room?.price}</span>
                                                    </div>
                                                </div>

                                                {/* subtotal price */}
                                                <div className="flex justify-between border-b border-gray border-opacity-[0.15] my-2 py-3">
                                                    <div>
                                                        <span className='font-medium'>SUBTOTAL PRICE</span><br />
                                                        <span className={`${pickUp ? 'block' : 'hidden'}`}>Airport Pick-up <span className="text-primary-color font-medium">$12</span><br /></span>
                                                        <span className={`${laundry ? 'block' : 'hidden'}`}>Laundry Service <span className="text-primary-color font-medium">${additionalPrice.totalLaundry}</span></span>

                                                    </div>
                                                    <span className="font-medium text-primary-color">${subTotalPrice}</span>
                                                </div>

                                                {/* total price */}
                                                <div className="flex justify-between items-center  mt-4 ">
                                                    <span className='font-medium text-lg'>SUBTOTAL PRICE</span>
                                                    <span className="font-medium text-primary-color">${totalPrice}</span>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </>
                        )
                }
            </section>
        </>
    );
};

export default Reservation;