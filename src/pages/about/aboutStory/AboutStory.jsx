import { Link } from "react-router-dom";

const AboutStory = () => {
    return (
        <section className='grid lg:grid-cols-2 items-center pt-10'>
            <div>
                <img src="/about/about-2.jpg" alt="about" className="w-full max-h-[450px] lg:max-h-[600px] object-cover"/>
            </div>

            {/* Hotel Content */}
            <div className="flex-1 m-5 mt-10 lg:m-0 lg:pl-20 lg:pr-28">
                <span className="flex items-center gap-8">
                    <span className="w-10 h-[1px] bg-black"></span>
                    <span className="font-medium tracking-widest text-xs lg:text-sm text-primary-color">SINCE 2006</span>
                </span>
                <h1 className='text-2xl lg:text-3xl xl:text-5xl py-3 xl:py-5 font-bold primary-font'>The Story</h1>
                <p className="text-lg pb-7 sm:pb-10 sm:pt-2 tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. </p>

                {/* <button className="uppercase">
                Read more
            </button> */}

                <Link href="#_" className="px-5 sm:px-8 py-2 sm:py-2.5 relative rounded-sm group overflow-hidden font-medium text-black inline-block border hover:border-primary-color uppercase text-sm">
                    <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform bg-primary-color group-hover:h-full opacity-90 "></span>
                    <span className="relative group-hover:text-white">Read more</span>
                </Link>

            </div>
        </section>
    );
};

export default AboutStory;