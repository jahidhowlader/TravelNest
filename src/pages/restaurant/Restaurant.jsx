import { Helmet } from 'react-helmet-async';
import './restaurant.css'
import RestaurantIntro from './restaurantIntro/RestaurantIntro';
import RestaurantMenu from './restaurantMenu/RestaurantMenu';
import RestaurantTestimonial from './restaurantTestimonial/RestaurantTestimonial';

const Restaurant = () => {
    return (
        <>
            {/* TITLE */}
            <Helmet>
                <title>Restaurant | TravelNest</title>
            </Helmet>

            <section className='restaurant flex justify-center items-center '>
                <div className='bg-text'>
                    <h2 className='text-4xl lg:text-5xl xl:text-6xl text-white primary-font font-bold'>Restaurant</h2>
                </div>
            </section>

            <RestaurantIntro />
            <RestaurantMenu />
            <RestaurantTestimonial />
        </>
    );
};

export default Restaurant;