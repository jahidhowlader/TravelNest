import React from 'react';

const AllRooms = () => {
    return (
        <section className='my-container mt-20 mb-40'>

            <div className='text-center'>
                <h2 className='text-[42px] primary-font pb- font-bold'>Search Results</h2>
                <span className='text-lg opacity-80 '>We have found <span className='font-semibold text-primary-color'>8</span> rooms that your needs.</span>
            </div>

            <div className='space-y-8'>
                <div className='border border-gray border-opacity-[0.15] grid grid-cols-12 items-center'>
                    {/* IMAGE */}
                    <div className='col-span-4'>
                        <img src="/rooms/rooms1.jpeg" alt="room list" />
                    </div>

                    {/* CONTENT */}
                    <div className='col-span-5 pl-5 space-y-5 '>
                        <h3 className='text-4xl primary-font font-bold'>Family Suite</h3>
                        <span className="flex flex-wrap items-center gap-x-5 sm:gap-10 text-lg tracking-wide ">
                            <span>38m<sup>2</sup></span>
                            <span>2 beds</span>
                            <span>1 bathroom</span>
                        </span>

                        <p className='text-lg opacity-80'>It is a long established fact that a reader will be distracted by the readable...</p>
                    </div>

                    {/* Confirmation */}
                    <div className='col-span-3 border-l border-gray border-opacity-[0.15] h-full flex flex-col justify-center items-center ml-5'>
                        <h4 className='text-xl font-medium text-primary-color'>$173<span className='text-black opacity-70'> / NIGHT</span></h4>
                        <button className='mt-5 px-8 py-2 text-white font-medium bg-primary-color rounded-sm'>BOOK NOW</button>
                    </div>
                </div>
                <div className='border border-gray border-opacity-[0.15] grid grid-cols-12 items-center'>
                    {/* IMAGE */}
                    <div className='col-span-4'>
                        <img src="/rooms/rooms2.jpeg" alt="room list" />
                    </div>

                    {/* CONTENT */}
                    <div className='col-span-5 pl-5 space-y-5 '>
                        <h3 className='text-4xl primary-font font-bold'>Family Suite</h3>
                        <span className="flex flex-wrap items-center gap-x-5 sm:gap-10 text-lg tracking-wide ">
                            <span>38m<sup>2</sup></span>
                            <span>2 beds</span>
                            <span>1 bathroom</span>
                        </span>

                        <p className='text-lg opacity-80'>It is a long established fact that a reader will be distracted by the readable...</p>
                    </div>

                    {/* Confirmation */}
                    <div className='col-span-3 border-l border-gray border-opacity-[0.15] h-full flex flex-col justify-center items-center ml-5'>
                        <h4 className='text-xl font-medium text-primary-color'>$173<span className='text-black opacity-70'> / NIGHT</span></h4>
                        <button className='mt-5 px-8 py-2 text-white font-medium bg-primary-color rounded-sm'>BOOK NOW</button>
                    </div>
                </div>
                <div className='border border-gray border-opacity-[0.15] grid grid-cols-12 items-center'>
                    {/* IMAGE */}
                    <div className='col-span-4'>
                        <img src="/rooms/rooms3.jpeg" alt="room list" />
                    </div>

                    {/* CONTENT */}
                    <div className='col-span-5 pl-5 space-y-5 '>
                        <h3 className='text-4xl primary-font font-bold'>Family Suite</h3>
                        <span className="flex flex-wrap items-center gap-x-5 sm:gap-10 text-lg tracking-wide ">
                            <span>38m<sup>2</sup></span>
                            <span>2 beds</span>
                            <span>1 bathroom</span>
                        </span>

                        <p className='text-lg opacity-80'>It is a long established fact that a reader will be distracted by the readable...</p>
                    </div>

                    {/* Confirmation */}
                    <div className='col-span-3 border-l border-gray border-opacity-[0.15] h-full flex flex-col justify-center items-center ml-5'>
                        <h4 className='text-xl font-medium text-primary-color'>$173<span className='text-black opacity-70'> / NIGHT</span></h4>
                        <button className='mt-5 px-8 py-2 text-white font-medium bg-primary-color rounded-sm'>BOOK NOW</button>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default AllRooms;