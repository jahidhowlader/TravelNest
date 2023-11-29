import { Helmet } from 'react-helmet-async';
import './spa.css'
import SpaIntro from './spaIntro/SpaIntro';
import SpaService from './spaService/SpaService';
import SpaTestimonial from './spaTestimonial/SpaTestimonial';

const Spa = () => {
    return (
        <>
            {/* TITLE */}
            <Helmet>
                <title>Spa | TravelNest</title>
            </Helmet>

            <section className='spa flex justify-center items-center '>
                <div className='bg-text'>
                    <h2 className='text-4xl lg:text-5xl xl:text-6xl text-white primary-font font-bold'>Spa & Wellness</h2>
                </div>
            </section>

            <SpaIntro />
            <SpaService />
            <SpaTestimonial />
        </>
    );
};

export default Spa;