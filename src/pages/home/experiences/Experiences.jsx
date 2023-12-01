import { Link } from "react-router-dom";

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

            <div className="grid sm:grid-cols-3 gap-8 my-20">

                {/* Video 1 */}
                <div>

                    <div className="relative w-full max-w-screen mx-auto overflow-hidden sm:h-[540px]"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to={'/spa'}>
                            <video
                                className="w-full sm:h-[540px] cursor-pointer object-cover hover:scale-105 duration-1000"
                                loop
                                muted
                            >
                                <source
                                    src="/home/video1.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </Link>
                    </div>

                    <p className="text-center tracking-widest mt-3">A Sanctuary For The Senses</p>

                </div>


                {/* Video 2 */}
                <div className="relative w-full h-[540px] max-w-screen mx-auto overflow-hidden group sm:mt-12"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to={'/about'}>
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
                    </Link>

                </div>

                {/* Video 3 */}
                <div>
                    <div className="relative w-full max-w-screen mx-auto overflow-hidden h-[540px]">
                        <Link to={'/restaurant'}>
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
                            </video>
                        </Link>

                    </div>
                    <p className="text-center tracking-widest mt-3">2023 Traveler's choice</p>
                </div>
            </div>

        </section>
    );
};

export default Experiences;