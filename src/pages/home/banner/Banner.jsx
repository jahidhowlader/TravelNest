import { BiLogoFacebook, BiLogoInstagram, BiSolidEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const variantsLink = {
    initial: {
        x: -50,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const variantsContent = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const variantsPhoto = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}

const Banner = () => {

    return (
        <section className="bg-black pb-10 md:pb-12 lg:pb-20 text-white relative">

            <div className="ml-5 mr-10 sm:mx-10 md:mx-28 lg:mx-48 grid grid-cols-12 items-center relative">

                <motion.div
                    className="absolute z-10"
                    variants={variantsContent} initial="initial" whileInView="animate"
                >
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl 3xl:text-8xl primary-font font-bold">Unique <span className="italic">Botique Hotel</span> <br />in chicago</h1>
                    <p className="text-xs sm:text-base lg:text-lg my-5 xl:my-12 2xl:my-16">From $64 per person and night</p>
                    <button className="bg-primary-color px-3 py-1 sm:px-6 2xl:px-10 sm:py-2 2x:py-3 font-medium uppercase text-xs sm:text-sm xl:text-base rounded-sm">explorer rooms</button>
                </motion.div>

                {/* Banner Content */}
                <div className="col-span-3">
                </div>

                <motion.div
                    className="col-span-9"
                    variants={variantsPhoto} initial="initial" whileInView="animate"
                >
                    <img src='/home/banner1.jpg' alt="banner" className="object-cover h-[300px] sm:h-full" />
                </motion.div>


            </div>

            <motion.div
                className="absolute right-3 md:right-12 lg:right-20 top-0 my-5 md:my-10 2xl:my-16 h-full z-10"
                variants={variantsLink} initial="initial" whileInView="animate"
            >
                <div className="flex flex-col items-center justify-between h-[80%] md:h-[70%] 2xl:h-[75%] 3x:h-[80%]">

                    <div className="flex flex-col items-center gap-2 xl:gap-5 text-xs lg:text-sm font-medium">
                        <p>EN</p>
                        <p>BN</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 xl:gap-5">
                        <Link to={'https://www.facebook.com/jahidhowlader.info/'} target="_blank">
                            <BiLogoFacebook size={24} className="w-4 md:w-5 h-4 lg:h-5" />
                        </Link>

                        <Link to={'https://www.instagram.com/jahidhowlader.info/'} target="_blank">
                            <BiLogoInstagram size={20} className="w-4 md:w-5 h-4 lg:h-5" />
                        </Link>

                        <Link to={'jahidhowlader.info@gmail.com'}>
                            <BiSolidEnvelope size={20} className="w-4 md:w-5 h-4 lg:h-5" />
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* <div className="absolute bg-primary-color w-0.5 h-16 -bottom-8 left-1/2 -translate-x-1/2 z-[999]">
            </div> */}
        </section>
    );
};

export default Banner;