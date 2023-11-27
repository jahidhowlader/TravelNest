import './about.css'
import AboutIntro from './aboutIntro/AboutIntro';
import AboutStory from './aboutStory/AboutStory';
import AboutOurTeam from './aboutOurTeam/AboutOurTeam';

const About = () => {
    return (
        <>

            <section className='aboutUs flex justify-center items-center'>
                <h2 className='text-6xl text-white primary-font font-bold'>About Us</h2>
            </section>

            <AboutIntro />

            <AboutStory />

            <AboutOurTeam />
        </>
    );
};

export default About;