import Lottie from 'lottie-react';
import loader from './loader.json'

const Loader = () => {
    return (
        <div className="max-w-[1520px] 2xl:mx-auto mx-5">
            <div className="grid xl:grid-cols-3">
                <div></div>
                <div className="flex justify-center items-center h-[calc(100vh-100px)]">
                    <Lottie animationData={loader} loop={true} className="animation" />
                </div>
            </div>
        </div>
    );
};

export default Loader;