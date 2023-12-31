import { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const AboutIntro = () => {

    const [countingStarted, setCountingStarted] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible && !countingStarted) {
            setCountingStarted(true);
        }
    };

    return (
        <section className='my-container my-20'>

            <div className='lg:w-7/12 mx-auto'>
                <p className='text-2xl primary-font text-center font-semibold'>Our story is a simple one. We love TravelNest. The owners were married here and generations of their family have lived and still live here.</p>

                <div className='grid grid-cols-3 gap-5 sm:gap-0 items-center mt-10  text-center'>

                    <VisibilitySensor onChange={handleVisibilityChange}>
                        <div>
                            <h1 className='text-5xl lg:text-6xl primary-font font-bold mb-4'><CountUp end={50} duration={3} /> </h1>
                            <span className='text-sm sm:text-base tracking-wider font-semibold opacity-60'>ROOMS</span>
                        </div>
                    </VisibilitySensor>

                    <VisibilitySensor onChange={handleVisibilityChange}>
                        <div className='border border-gray border-opacity-[0.15] border-t-0 border-b-0 py-10'>
                            <h1 className='text-5xl lg:text-6xl primary-font font-bold mb-4'><CountUp end={72} duration={3} /></h1>
                            <span className='text-sm sm:text-base tracking-wider font-semibold opacity-60'>STAFFS</span>
                        </div>
                    </VisibilitySensor>

                    <VisibilitySensor onChange={handleVisibilityChange}>
                        <div>
                            <h1 className='text-5xl lg:text-6xl primary-font font-bold mb-4'><CountUp end={4} duration={3} /></h1>
                            <p className='text-sm sm:text-base tracking-wider font-semibold opacity-60'>LOCATIONS</p>
                        </div>
                    </VisibilitySensor>
                </div>
            </div>

            <div className='mt-20 lg:mt-28 grid lg:grid-cols-2 gap-10 lg:gap-28 items-center'>
                <div className="order-2 lg:order-1">
                    <p className='text-2xl primary-font lg:mr-16 font-semibold'>" We believe in something better than whatu2019s currently out there. A place that celebrates life rather than sucks life out of it. A hotel thatu2019s built on creativity and a belief that you donu2019t have to accept the conventional."</p>

                    <img src="/about/sig.png" alt="signeture" className='my-8 h-auto w-auto' />

                    <h6 className='font-medium'>Muler Kay</h6>
                    <span className='opacity-80'>General Manager</span>
                </div>
                <div className="order-1 lg:order-2">
                    <img src="/about/about-1.jpg" alt="about" className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover " />
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;