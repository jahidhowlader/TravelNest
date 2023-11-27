
const SpaIntro = () => {

    const handleMouseEnter = (event) => {
        event.target.play();
        // event.target.nextSibling.style.display = 'block';
    };

    const handleMouseLeave = (event) => {
        event.target.pause();
        // event.target.nextSibling.style.display = 'block';
    };

    return (
        <section className='my-20'>


            <div className='lg:w-7/12 2xl:w-5/12 xl:mx-auto my-container mx-5'>
                <p className='text-2xl primary-font text-center font-semibold'>Feeling healthy and well is not a luxury but an absolute necessity. Heal both your soul and body with our miraculous treatments and return home as a new person, calm and refreshed.</p>
            </div>

            <div className="my-container">
                <div className="flex items-center justify-center mt-10">
                    <div className="flex flex-col md:flex-row text-center md:text-left gap-8 md:gap-0">
                        <div className="px-10">
                            <p className='font-medium text-primary-color md:mb-4'>OPENING DATES</p>
                            <p className='text-2xl primary-font font-bold'>Monday – Sunday</p>
                        </div>
                        <div className="border border-gray border-opacity-[0.15] md:border-t-0 md:border-b-0 border-l-0 md:border-l border-r-0 md:border-r py-5 md:py-0 mx-auto px-10">
                            <p className='font-medium text-primary-color md:mb-4'>OPENING HOURS</p>
                            <p className='text-2xl primary-font font-bold'>06:00 am – 22:30 pm</p>
                        </div>
                        <div className="px-10">
                            <p className='font-medium text-primary-color md:mb-4'>PRICE RANGE</p>
                            <p className='text-2xl primary-font font-bold'>$50 – $450</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video */}
            <div className="relative w-full max-w-screen mx-auto mt-20 overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <video
                    className="w-full h-[360px] cursor-pointer object-cover "
                    loop
                    muted
                >
                    <source
                        src="https://nuss.uxper.co/boutique-hotel/wp-content/uploads/sites/2/2021/06/video-spa.mp4"
                        type="video/mp4"
                    />
                </video>

                <div
                    className="absolute bottom-10 left-0 w-full  text-white p-2 text-center hidden cursor-pointer"
                >
                    <h3 className="primary-font text-xl sm:text-4xl mb-10 font-bold">Scuba Diving</h3>
                    <span className="">A scuba diver primarily moves underwater by using fins attached to the feet</span> <br />
                    <button className="px-5 sm:px-8 py-2 sm:py-2.5 relative rounded-sm font-medium border mt-10">Read More</button>
                </div>

            </div>
        </section>
    );
};

export default SpaIntro;