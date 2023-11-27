import { BsTv } from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi2';
import { IoWifiOutline } from 'react-icons/io5';
import { PiPaintBucketThin } from 'react-icons/pi';

const MeetingRoomIntro = () => {
    return (
        <section className='my-container mt-20 mb-28'>

                <div className='lg:w-7/12 mx-auto'>
                    <p className='text-2xl primary-font text-center font-semibold'>Our Hotel board room offers a private, elegant meeting space in the heart of New York for groups of 8 to 10 persons. For your comfort and convenience, coffee break packages are available..</p>

                    <div className='grid grid-cols-2 sm:grid-cols-4 items-center gap-10 sm:gap-0 mt-10  text-center'>
                        <div className='flex flex-col justify-center items-center gap-5 '>
                            <div className='text-5xl opacity-50 border border-gray border-opacity-30 flex justify-center items-center w-28 h-28 rounded-full'>
                                <HiOutlineUsers />
                            </div>

                            <div>
                                <h6 className='primary-font font-semibold mb-2'>CAPACITY</h6>
                                <span className='opacity-80'>8 - 10 Persons</span>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className='text-5xl opacity-50 border border-gray border-opacity-30 flex justify-center items-center w-28 h-28 rounded-full'>
                            <PiPaintBucketThin />
                            </div>

                            <div>
                                <h6 className='primary-font font-semibold mb-2'>CATERING</h6>
                                <span className='opacity-80'>Coffe, Tea</span>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className='text-5xl opacity-50 border border-gray border-opacity-30 flex justify-center items-center w-28 h-28 rounded-full'>
                                <IoWifiOutline />
                            </div>

                            <div>
                                <h6 className='primary-font font-semibold mb-2'>Internet</h6>
                                <span className='opacity-80'>Free Wifi</span>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className='text-5xl opacity-50 border border-gray border-opacity-30 flex justify-center items-center w-28 h-28 rounded-full'>
                                <BsTv />
                            </div>

                            <div>
                                <h6 className='primary-font font-semibold mb-2'>LED TV</h6>
                                <span className='opacity-80'>with HDMI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default MeetingRoomIntro;