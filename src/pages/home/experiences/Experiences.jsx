const Experiences = () => {

    const handleMouseEnter = (event) => {
        event.target.play();
        // event.target.nextSibling.style.display = 'block';
    };

    const handleMouseLeave = (event) => {
        event.target.pause();
        // event.target.nextSibling.style.display = 'block';
    };

    return (
        <section className="my-container">

            <div>
                <span className="flex items-center gap-8">
                    <span className="w-10 h-[1px] bg-black"></span>
                    <span className="font-medium tracking-widest text-xs lg:text-sm text-primary-color">EXPERIENCES</span>
                </span>
                <h1 className='text-2xl lg:text-3xl xl:text-[40px] py-3 xl:py-5 font-bold primary-font'>Indulge Your Playful Side</h1>
            </div>

            <div className="grid grid-cols-3 gap-8 my-20">

                {/* Video 1 */}
                <div className="relative w-full max-w-screen mx-auto mt-20 overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <video
                        className="w-full h-[540px] cursor-pointer object-cover hover:scale-105 duration-1000"
                        loop
                        muted
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    >
                        <source
                            src="/home/video1.mp4"
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

                {/* Video 2 */}
                <div className="relative w-full h-[540px] max-w-screen mx-auto overflow-hidden group:"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >

                    <video
                        className="w-full h-[540px] cursor-pointer object-cover hover:scale-105 duration-1000"
                        loop
                        muted
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    >
                        <source
                            src="/home/video2.mp4"
                            type="video/mp4"
                        />
                    </video>

                    <div
                        className="hover:absolute bottom-10 left-0 w-full text-white p-2 text-center cursor-pointer"
                    >
                        <span className="">A scuba diver primarily moves underwater by using fins attached to the feet</span> <br />
                        <button className="px-5 sm:px-8 py-2 sm:py-2.5 relative rounded-sm font-medium border mt-10">Read More</button>
                    </div>
                </div>

                {/* Video 3 */}
                <div className="relative w-full max-w-screen mx-auto mt-20 overflow-hidden">
                    <video
                        className="w-full h-[540px] cursor-pointer object-cover hover:scale-105 duration-1000"
                        loop
                        muted
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <source
                            src="/home/video3.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>


            </div>

        </section>
    );
};

export default Experiences;