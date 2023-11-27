import './meetingRoom.css'
import MeetingRoomPackage from './meetingRoomPackage/MeetingRoomPackage';
import MeetingRoomIntro from './meetingRoomIntro/MeetingRoomIntro';

const MeetingRoom = () => {
    return (
        <>
            <section className='meeting_room flex justify-center items-center'>
                <h2 className='text-6xl text-white primary-font font-bold'>Meeting Room</h2>
            </section>

            <MeetingRoomIntro />
            <MeetingRoomPackage />
        </>
    );
};

export default MeetingRoom;