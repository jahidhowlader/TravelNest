// import 

import { Link } from "react-router-dom";

const OurStory = () => {
    return (
        <section className='my-container my-20 xl:my-40'>

            <div className='grid md:grid-cols-2 md:gap-10 '>

                <div className="">
                    <span className="flex items-center gap-8">
                        <span className="w-10 h-[1px] bg-black"></span>
                        <span className='text-primary-color font-medium tracking-widest text-xs lg:text-sm'>OUR STORY</span>
                    </span>
                    <h1 className='text-2xl lg:text-3xl xl:text-[40px] py-3 xl:py-5 font-bold primary-font'>Life. Well Lived.</h1>
                    <p className='pr-5 sm:pr-20 pb-20 tracking-wide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ipsa. Facilis ex id officiis. Rem eaque necessitatibus a fugit inventore.</p>

                    <div className="pb-20 relative">
                        <Link to="#">
                            <span className="absolute w-[1px] h-20 left-0 top-0 bg-primary-color"></span>
                            <h3 className="primary-font text-2xl lg:text-3xl xl:text-4xl font-semibold rotate-90 absolute -left-14 lg:-left-[78px] xl:-left-[92px] top-36 lg:top-40 xl:top-44 ">The Breakfast</h3>
                            <img src="https://i.ibb.co/H2gZkxM/breafast-paxtpxnsdcnkzqpp0y81q4qxd15ys5lajm422h29p4.jpg" alt="Hosts" className="pl-10 object-cover" />
                        </Link>
                    </div>

                    <div className="relative pb-20 md:pb-0">
                        <Link to="/meeting_room">
                            <span className="absolute w-[1px] h-20 left-0 top-0 bg-primary-color"></span>
                            <h3 className="primary-font text-2xl lg:text-3xl xl:text-4xl font-semibold rotate-90 absolute -left-14 lg:-left-[78px] xl:-left-[92px] top-36 lg:top-40 xl:top-44">Work Station</h3>
                            <img src="https://i.ibb.co/42sZHhT/work-paxtq2czbitsf5l5j2s75r886f54cabh6v6cno9b7s.jpg" alt="Hosts" className="pl-10 object-cover" />
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="pb-20 relative">
                        <Link to="/about">
                            <span className="absolute w-[1px] h-20 left-0 top-0 bg-primary-color"></span>
                            <h3 className="primary-font text-2xl lg:text-3xl xl:text-4xl font-semibold rotate-90 absolute -left-11 md:-left-12 lg:-left-[62px] xl:-left-[74px] top-36 lg:top-40 xl:top-44">Your Hosts</h3>
                            <img src="https://i.ibb.co/xLB2GKh/host-paxtq800gj1wofhyneaojow00fa9ilbp12xqyelfic.jpg" alt="Hosts" className="pl-10 object-cover" />
                        </Link>
                    </div>
                    <div className="sm:pb-20 relative">
                        <Link to="/spa">
                            <span className="absolute w-[1px] h-20 left-0 top-0 bg-primary-color"></span>
                            <h3 className="primary-font text-2xl lg:text-3xl xl:text-4xl font-semibold rotate-90 absolute -left-[51px] md:-left-14 lg:-left-[70px] xl:-left-[85px] top-36 lg:top-40 xl:top-44">Things to do</h3>
                            <img src="https://i.ibb.co/FbnpnVS/photo-1601568870191-8c417f7e0077-1-p9ve6hd9ee0s00fagvefg9jav4d4q28izr05l6xz4s-paxtxxaegnlu3cpr9vd3li.jpg" alt="Hosts" className="pl-10 object-cover" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;