import './about.css'
import AboutIntro from './aboutIntro/AboutIntro';
import AboutStory from './aboutStory/AboutStory';
import AboutOurTeam from './aboutOurTeam/AboutOurTeam';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            {/* TITLE */}
            <Helmet>
                <title>About Us | TravelNest</title>
            </Helmet>

            <section className='aboutUs flex justify-center items-center'>
                <h2 className='text-4xl lg:text-5xl xl:text-6xl text-white primary-font font-bold'>About Us</h2>
            </section>

            <AboutIntro />

            <AboutStory />

            <AboutOurTeam />
        </>
    );
};

export default About;