import Slider from "react-slick";
import './restaurantIntro.css'

const RestaurantIntro = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,

    };

    return (
        <section className='my-20 my-container'>


            <div className='lg:w-7/12 mx-5 lg:mx-auto'>
                <p className='text-2xl primary-font text-center font-semibold'>Feeling healthy and well is not a luxury but an absolute necessity. Heal both your soul and body with our miraculous treatments and return home as a new person, calm and refreshed.</p>
            </div>

            <div className="flex items-center justify-center mt-10">
                <div className="flex flex-col md:flex-row text-center md:text-left gap-8 md:gap-0">
                    <div className="px-10">
                        <p className='font-medium text-primary-color md:mb-4'>OPENING DATES</p>
                        <p className='text-2xl primary-font font-bold'>Monday – Sunday</p>
                    </div>
                    <div className="border border-gray border-opacity-[0.15] md:border-t-0 md:border-b-0 border-l-0 md:border-l border-r-0 md:border-r py-5 md:py-0 mx-auto px-10">
                        <p className='font-medium text-primary-color mb-4'>OPENING HOURS</p>
                        <p className='text-2xl primary-font font-bold'>06:00 am – 22:30 pm</p>
                    </div>
                    <div className="px-10">
                        <p className='font-medium text-primary-color md:mb-4'>PRICE RANGE</p>
                        <p className='text-2xl primary-font font-bold'>$50 – $450</p>
                    </div>
                </div>
            </div>

            {/* Call Us */}
            <p className="text-center mt-10 text-lg tracking-wide">calll us: +880 1625 405959</p>

            <Slider {...settings} className="restaurantIntroSlider mt-20 lg:mt-28">

                <div>
                    <img src="/restaurant/restaurant1.jpeg" alt="restaurant slider" className="w-full h-auto lg:h-[530px] object-cover" />
                </div>
                <div>
                    <img src="/restaurant/restaurant2.jpeg" alt="restaurant slider" className="w-full h-auto lg:h-[530px] object-cover" />
                </div>
                <div>
                    <img src="/restaurant/restaurant3.jpeg" alt="restaurant slider" className="w-full h-auto lg:h-[530px] object-cover" />
                </div>

            </Slider>
        </section>
    );
};

export default RestaurantIntro;