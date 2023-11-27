const AboutIntro = () => {
    return (
        <section className='my-container my-20'>

                <div className='w-7/12 mx-auto'>
                    <p className='text-2xl primary-font text-center font-semibold'>Our story is a simple one. We love NUSS. The owners were married here and generations of their family have lived and still live here.</p>

                    <div className='grid grid-cols-3 items-center mt-10  text-center'>
                        <div>
                            <h1 className='text-6xl primary-font font-bold mb-4'>50</h1>
                            <span className='tracking-wider font-semibold opacity-60'>ROOMS</span>
                        </div>
                        <div className='border border-gray border-opacity-[0.15] border-t-0 border-b-0 py-10'>
                            <h1 className='text-6xl primary-font font-bold mb-4'>72</h1>
                            <span className='tracking-wider font-semibold opacity-60'>STAFFS</span>
                        </div>
                        <div>
                            <h1 className='text-6xl primary-font font-bold mb-4'>4</h1>
                            <p className='tracking-wider font-semibold opacity-60'>LOCATIONS</p>
                        </div>
                    </div>
                </div>

                <div className='mt-28 grid grid-cols-2 gap-28 items-center'>
                    <div>
                        <p className='text-2xl primary-font mr-16 font-semibold'>" We believe in something better than whatu2019s currently out there. A place that celebrates life rather than sucks life out of it. A hotel thatu2019s built on creativity and a belief that you donu2019t have to accept the conventional."</p>

                        <img src="/about/sig.png" alt="signeture" className='my-8' />

                        <h6 className='font-medium'>Muler Kay</h6>
                        <span className='opacity-80'>General Manager</span>
                    </div>
                    <div>
                        <img src="/about/about-1.jpg" alt="about" />
                    </div>
                </div>
            </section>
    );
};

export default AboutIntro;