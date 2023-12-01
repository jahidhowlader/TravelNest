import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';
import error404 from './Error404.json'

const Error = () => {
    return (

        <>
            <Helmet>
                <title>Error 404 | TravelNest</title>
            </Helmet>

            <div className="max-w-[1520px] 2xl:mx-auto mx-5">
                <div className="grid xl:grid-cols-3">
                    <div></div>
                    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
                        <Lottie animationData={error404} loop={true} className="animation" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;