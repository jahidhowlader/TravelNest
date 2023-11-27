import Slider from "react-slick";
import './spaTestimonial.css'

const SpaTestimonial = () => {

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
        <section className="bg-[#f6f6fa] pt-20 lg:p-20 pb-32">
            <div className="my-container">
                <Slider {...settings} className="spaTestimonialSlider">

                    <div className="flex flex-col justify-center items-center text-center">
                        <img src="/spa/spaLogo.png" alt="logo" className="w-14 h-auto mx-auto" />
                        <p className="my-10 text-2xl font-medium primary-font sm:w-9/12 mx-auto"> " I would like to know if it is possible to place neighborhoods, my listing is only for a specific city, and I want users to find places by neighborhoods "</p>

                        <div>
                            <h5 className="text-lg primary-font font-bold">Critinia Linda</h5>
                            <p>San Diego, California</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <img src="/spa/spaLogo.png" alt="logo" className="w-14 h-auto mx-auto" />
                        <p className="my-10 text-2xl font-medium primary-font sm:w-9/12 mx-auto"> " I would like to know if it is possible to place neighborhoods, my listing is only for a specific city, and I want users to find places by neighborhoods "</p>

                        <div>
                            <h5 className="text-lg primary-font font-bold">Critinia Linda</h5>
                            <p>San Diego, California</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <img src="/spa/spaLogo.png" alt="logo" className="w-14 h-auto mx-auto" />
                        <p className="my-10 text-2xl font-medium primary-font sm:w-9/12 mx-auto"> " I would like to know if it is possible to place neighborhoods, my listing is only for a specific city, and I want users to find places by neighborhoods "</p>

                        <div>
                            <h5 className="text-lg primary-font font-bold">Critinia Linda</h5>
                            <p>San Diego, California</p>
                        </div>
                    </div>
                    
                </Slider>

            </div>
        </section>
    );
};

export default SpaTestimonial;