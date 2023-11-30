import Slider from "react-slick";
import './testimonial.css'

const Testimonial = () => {

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
        <section className="bg-primary-color bg-opacity-5">

            <div className="grid sm:grid-cols-2 my-container">

                <div className="py-20 sm:pr-10 md:pr-20 sm:border-r border-gray border-opacity-30">
                    <span className="flex items-center gap-8">
                        <span className="w-10 h-[1px] bg-black"></span>
                        <span className="font-medium tracking-widest text-xs lg:text-sm uppercase text-primary-color">NEWS & OFFERS</span>
                    </span>

                    <div className="mt-10 dm:mt-20">
                        <img src="https://i.ibb.co/9GpHDrF/interior-design-bedroom-with-modern-decoration-181624-46706.jpg" alt="room1" className="w-full h-auto object-cover" />

                        <span className="flex items-center gap-8 mt-5">
                            <span className="">Offer</span>
                            <span className="text-xs lg:text-sm opacity-60">February 5, 2024</span>
                        </span>

                        <h3 className="primary-font text-xl sm:text-2xl mt-5 mb-3 font-bold hover:text-primary-color">Hotel June’s Upcoming Artist in Residence</h3>
                        <p className="tracking-wide">At is a long established fact that a reader will be distracted by the readable...</p>
                    </div>
                </div>

                <div className="pb-20 sm:py-20 sm:ml-10 md:ml-20 overflow-hidden">

                    <span className="flex items-center gap-8 mb-10 md:mb-20">
                        <span className="w-10 h-[1px] bg-black"></span>
                        <span className="font-medium tracking-widest text-xs lg:text-sm uppercase text-primary-color">PEOPLE LOVE US</span>
                    </span>

                    <Slider {...settings} className="testimonialSlider">
                        <div className="">
                            <h6 className="text-xl md:text-2xl primary-font font-semibold"> {`" It was amazing staying in this hotel! Very helpful staff, clean nice rooms, perfect location and fantastic view from the room! Food and drinks in the restaurant of the hotel were delicious. "`}</h6>

                            <div className="flex items-center gap-5 my-10">
                                <div>
                                    <img src="https://i.ibb.co/GMH7KrC/portrait-handsome-man-23-2150770971.jpg" alt="profile" className="rounded-full w-14 md:w-16 h-14 md:h-16 object-cover" />
                                </div>

                                <div>
                                    <h4 className="font-medium text-lg">Catherine Kastner</h4>
                                    <span>San Diego, California</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h6 className="text-xl md:text-2xl primary-font font-semibold"> {`" It was amazing staying in this hotel! Very helpful staff, clean nice rooms, perfect location and fantastic view from the room! Food and drinks in the restaurant of the hotel were delicious. "`}</h6>

                            <div className="flex items-center gap-5 my-10">
                                <div>
                                    <img src="https://i.ibb.co/Gpsjtr4/confident-businesswoman-suit-elegance-beauty-generated-by-ai-24640-81238.jpg" alt="profile" className="rounded-full w-14 md:w-16 h-14 md:h-16 object-cover" />
                                </div>

                                <div>
                                    <h4 className="font-medium text-lg">Catherine Kastner</h4>
                                    <span>San Diego, California</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h6 className="text-xl md:text-2xl primary-font font-semibold"> {`" It was amazing staying in this hotel! Very helpful staff, clean nice rooms, perfect location and fantastic view from the room! Food and drinks in the restaurant of the hotel were delicious. "`}</h6>

                            <div className="flex items-center gap-5 my-10">
                                <div>
                                    <img src="https://i.ibb.co/12Q88Fb/close-up-businessman-smiling-23-2150771063.jpg" alt="profile" className="rounded-full w-14 md:w-16 h-14 md:h-16 object-cover" />
                                </div>

                                <div>
                                    <h4 className="font-medium text-lg">Catherine Kastner</h4>
                                    <span>San Diego, California</span>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;