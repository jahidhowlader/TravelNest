import React from 'react';

const RoomDetails = () => {
    return (
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
                        <h5 className='tracking-wider font-medium text-primary-color'>$173 PER NIGHT</h5>

                        <h2 className='primary-font text-[42px] font-bold'>Family Suite</h2>
                        <span className="flex flex-wrap items-center gap-x-5 sm:gap-10 text-lg tracking-wide ">
                            <span>38m<sup>2</sup></span>
                            <span>2 beds</span>
                            <span>1 bathroom</span>
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
                                <img src="/public/airport.jpeg" alt="airport" className='h-[100px] w-[100px] object-cover' />
                            </div>

                            <div>
                                <h6 className='text-xl font-bold primary-font'>Airport Pick-up</h6>
                                <p className='text-sm text-primary-color font-semibold tracking-wider mt-1 mb-2'>$12 <span className='text-black opacity-80'>/ PACKAGE</span></p>
                                <span>Various versions have evolved over the years, sometimes by accident</span>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div>
                                <img src="/public/laundry.webp" alt="airport" className='h-[100px] w-[100px] object-cover' />
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

                <div className='col-span-2 ml-5 '>
                    <div className='sticky top-10 border border-gray border-opacity-[0.15] rounded-md bg-white shadow-sm p-7 space-y-5'>

                        <h3 className='text-3xl primary-font font-bold'>Book Your Room</h3>

                        <p className='opacity-50 font-semibold text-sm'>CHECK IN - CHECK OUT</p>

                        <button className='w-full bg-primary-color py-2 text-white font-medium tracking-wide rounded-sm'>CHECK AVAILABILITY</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomDetails;