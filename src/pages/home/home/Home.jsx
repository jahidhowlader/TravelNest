import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import TheHotel from "../theHotel/TheHotel";
import RoomAndSuite from "../roomAndSuite/RoomAndSuite";
import Experiences from "../experiences/Experiences";
import Equipements from "../equipements/Equipements";
import Testimonial from "../testimonial/Testimonial";
import OurServices from "../ourServices/OurServices";

const Home = () => {
    return (
        <>
            {/* Title */}
            <Helmet>
                <title>Home | TravelNest</title>
            </Helmet>

            <Banner />
            <TheHotel />
            <OurServices />
            <RoomAndSuite />
            <Equipements />
            <Experiences />
            <Testimonial />
        </>
    );
};

export default Home;