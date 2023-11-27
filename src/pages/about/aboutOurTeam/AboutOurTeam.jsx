
const AboutOurTeam = () => {
    return (
        <>
            <section className='my-container my-20'>
                <h1 className='text-2xl lg:text-3xl xl:text-5xl py-3 xl:py-5 font-bold primary-font text-center'>Meet Our Team</h1>
                <p className='opacity-70 text-center text-lg tracking-wide'>A supportive team always willing to help you</p>

                <div className='grid grid-cols-3 items-center gap-8 my-20'>
                    <div>
                        <img src="/about/staff-1.jpg" alt="staff" />

                        <h5 className='text-2xl primary-font mt-5 font-bold'>Fuooeitima Cambeiro</h5>
                        <span className='opacity-70'>Managing Director</span>
                    </div>
                    <div>
                        <img src="/about/staff-2.jpg" alt="staff" />

                        <h5 className='text-2xl primary-font mt-5 font-bold'>Graham Griffiths</h5>
                        <span className='opacity-70'>Customes Success</span>
                    </div>
                    <div>
                        <img src="/about/staff-3.jpg" alt="staff" />

                        <h5 className='text-2xl primary-font mt-5 font-bold'>Ishaaq El Vohra</h5>
                        <span className='opacity-70'>Head Chef</span>
                    </div>
                </div>
            </section>

            <section className='mb-20'>
                <div className='my-container flex justify-between items-center'>
                    <div>
                        <img src="/about/support-logo-1.png" alt="logo" className='object-cover opacity-60 hover:opacity-100' />
                    </div>
                    <div>
                        <img src="/about/support-logo-2.png" alt="logo" className='object-cover opacity-60 hover:opacity-100' />
                    </div>
                    <div>
                        <img src="/about/support-logo-3.png" alt="logo" className='object-cover opacity-60 hover:opacity-100' />
                    </div>
                    <div>
                        <img src="/about/support-logo-4.png" alt="logo" className='object-cover opacity-60 hover:opacity-100' />
                    </div>
                    <div>
                        <img src="/about/support-logo-5.png" alt="logo" className='object-cover opacity-60 hover:opacity-100' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutOurTeam;