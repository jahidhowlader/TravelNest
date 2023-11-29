import './meetingRoom.css'
import MeetingRoomPackage from './meetingRoomPackage/MeetingRoomPackage';
import MeetingRoomIntro from './meetingRoomIntro/MeetingRoomIntro';
import { Helmet } from 'react-helmet-async';

const MeetingRoom = () => {
    return (
        <>
            {/* TITLE */}
            <Helmet>
                <title>Meeting Room | TravelNest</title>
            </Helmet>

            <section className='meeting_room flex justify-center items-center'>
                <h2 className='text-4xl lg:text-5xl xl:text-6xl text-white primary-font font-bold'>Meeting Room</h2>
            </section>

            <MeetingRoomIntro />
            <MeetingRoomPackage />
        </>
    );
};

export default MeetingRoom;