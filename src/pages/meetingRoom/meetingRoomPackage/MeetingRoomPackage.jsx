import { HiOutlineUsers } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { BsBoxSeam, BsFilePdf } from "react-icons/bs";
import { Link } from "react-router-dom";

const MeetingRoomPackage = () => {
    return (
        <>
            <section className='grid grid-cols-2 my-container items-center'>

                <div>
                    <img src="/meeting_room/meeting_room1.jpg" alt="meeting_room" className='w-[540px] h-[510px]' />
                </div>

                <div className='space-y-4 mx-16'>
                    <h2 className='text-4xl primary-font font-bold'>Package 1</h2>
                    <p className='text-primary-color tracking-wider font-medium'>$5 / PERSION</p>
                    <p className="text-lg">Our distinctive style helps inspire and ignite creativity for every meeting and special event.</p>

                    <ul className="space-y-3">
                        <li className="flex items-center gap-5 text-lg opacity-80">
                            <IoCheckmark className="text-3xl" />
                            Freshly brewed teas and coffees
                        </li>
                        <li className="flex items-center gap-5 text-lg opacity-80">
                            <IoCheckmark className="text-3xl" />
                            Still and sparkling water
                        </li>
                        <li className="flex items-center gap-5 text-lg opacity-80">
                            <IoCheckmark className="text-3xl" />
                            Assorted homemade cookies and muffins
                        </li>
                    </ul>
                    <br />
                    <button className="bg-primary-color px-5 py-2 rounded-sm text-white">EMAIL TO BOOK</button>
                </div>
            </section>


            <section className='grid grid-cols-2 my-container items-center my-20'>

                <div className='space-y-4 mx-16'>
                    <h2 className='text-4xl primary-font font-bold'>Package 11</h2>
                    <p className='text-primary-color tracking-wider font-medium'>$12 / PERSION</p>
                    <p className="text-lg">Our distinctive style helps inspire and ignite creativity for every meeting and special event.</p>

                    <ul className="space-y-3">
                        <li className="flex items-center gap-5 text-lg opacity-80">
                            <IoCheckmark className="text-3xl" />
                            Freshly brewed teas and coffees
                        </li>
                        <li className="flex items-center gap-5 text-lg opacity-80">
                            <IoCheckmark className="text-3xl" />
                            Still and sparkling water
                        </li>
                        <li className="flex items-center gap-5 text-lg opacity-80">
                            <IoCheckmark className="text-3xl" />
                            Assorted homemade cookies and muffins
                        </li>
                        <li className="flex items-center gap-5 text-lg opacity-80">
                            <IoCheckmark className="text-3xl" />
                            Personal Discussion Room
                        </li>
                    </ul>
                    <br />
                    <button className="bg-primary-color px-5 py-2 rounded-sm text-white ">EMAIL TO BOOK</button>
                </div>

                <div>
                    <img src="/meeting_room/meeting_room2.jpg" alt="meeting_room" className='w-[540px] h-[510px]' />
                </div>
            </section>

            <section className='bg-[#f6f6fa] mt-20 p-20'>
                <div className="my-container  grid grid-cols-2 items-center">
                    <div>
                        <img src="/meeting_room/meeting_room3.jpg" alt="meeting_room" className='w-[540px] h-[510px]' />
                    </div>

                    <div className='space-y-4 mx-16'>
                        <h2 className='text-5xl primary-font font-bold'>Floor Plans</h2>
                        <p className="text-lg">A space where your meetings are productive and comfortable, exactly what you are looking for.</p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-5 text-lg opacity-80">
                                <HiOutlineUsers className="text-lg" />
                                Capacity: 8
                            </li>
                            <li className="flex items-center gap-5 text-lg opacity-80">
                                <BsBoxSeam className="text-lg" />
                                Sq. Ft: 239
                            </li>
                            <li className="flex items-center gap-5 text-lg opacity-80">
                                <CiViewTable className="text-lg" />
                                Round Table: 10
                            </li>

                        </ul>
                        <br />
                        <Link href="#_" className="px-5 sm:px-8 py-2 sm:py-2.5 relative rounded-sm group overflow-hidden font-medium text-black inline-block border hover:border-primary-color uppercase text-sm">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform bg-primary-color group-hover:h-full opacity-90 "></span>
                            <span className="relative group-hover:text-white flex items-center gap-2"><BsFilePdf /> DOWNLOAD PDF</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>

    );
};

export default MeetingRoomPackage;