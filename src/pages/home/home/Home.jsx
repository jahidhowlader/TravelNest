import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import OurStory from "../ourStory/OurStory";
import TheHotel from "../theHotel/TheHotel";
import RoomAndSuite from "../../roomAndSuite/RoomAndSuite";

const Home = () => {
    return (
        <>
            {/* Title */}
            <Helmet>
                <title>Home | TravelNest</title>
            </Helmet>

            <Banner />
            <TheHotel />
            <OurStory />
            <RoomAndSuite />
        </>
    );
};

export default Home;