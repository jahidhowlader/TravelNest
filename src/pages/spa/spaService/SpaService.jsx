import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const SpaService = () => {

    const [accordion, setAccordion] = useState({
        accordion1: true,
        accordion2: false,
        accordion3: false,
        accordion4: false
    })

    console.log({ ...accordion });

    // handleAccordion
    const handleAccordionClick = (accordionKey) => {
        setAccordion((prevAccordion) => ({
            ...Object.fromEntries(Object.entries(prevAccordion).map(([key, value]) => [key, key === accordionKey])),
        }));
    }

    // TODO: FIX ACCORDION
    return (
        <section className="my-container">
            <h1 className="text-4xl lg:text-[44px] primary-font text-center font-bold ">Our Services</h1>
            <p className="text-center text-lg tracking-wide opacity-70">Our tranquility experts help you access the key <br />elements of wellness.</p>

            <div className="my-20 grid lg:grid-cols-2 items-center">
                <div>
                    <img src="/spa/massage.jpeg" alt="message" className="w-full lg:w-[540px] h-[510px] object-cover" />
                </div>

                <div className="space-y-5 lg:ml-16 mt-5 lg:mt-0">
                    <h1 className="text-3xl lg:text-4xl primary-font font-bold">Massage & Body Treatments</h1>
                    <p className="text-lg tracking-wide opacity-70">Our tranquility experts help you access the key <br /> elements of wellness..</p>

                    <div className="lg:max-w-[400px]">
                        <div onClick={() => handleAccordionClick('accordion1')} className="border-b border-gray border-opacity-20 pb-3">
                            <div className="flex items-center justify-between">
                                <h4 className="text-lg primary-font font-medium pb-1 cursor-pointer">Massage & Body Treatments</h4>
                                <MdKeyboardArrowDown className={`text-2xl opacity-70 ${!accordion.accordion1 ? 'block' : 'hidden'}`} />
                                <MdKeyboardArrowUp className={`text-2xl opacity-70 ${accordion.accordion1 ? 'block' : 'hidden'}`} />
                            </div>
                            <p className={`text-lg tracking-wide opacity-80 my-2 ${accordion.accordion1 ? 'block' : 'hidden'}`}>50 minutes $135 | 80 minutes $195 | 110 minutes $255 <br />Our signature massage incorporating our exclusive essential oils is designed to transform you by soothing sore muscles.</p>
                        </div>

                        <div onClick={() => handleAccordionClick('accordion2')} className="mt-3 ">
                            <div className="flex items-center justify-between ">
                                <h4 className="text-lg primary-font font-medium pb-1 cursor-pointer">La Vidorra Body Glow</h4>
                                <MdKeyboardArrowDown className={`text-2xl opacity-70 ${!accordion.accordion2 ? 'block' : 'hidden'}`} />
                                <MdKeyboardArrowUp className={`text-2xl opacity-70 ${accordion.accordion2 ? 'block' : 'hidden'}`} />
                            </div>
                            <p className={`text-lg tracking-wide opacity-80 my-2 ${accordion.accordion2 ? 'block transition duration-150' : 'hidden'}`}>50 minutes $135 | 80 minutes $195 | 110 minutes $255 <br />Our signature massage incorporating our exclusive essential oils is designed to transform you by soothing sore muscles.</p>
                        </div>
                    </div>

                    <br />
                    <button className="bg-primary-color px-5 py-2 rounded-sm text-white ">EMAIL TO BOOK</button>
                </div>
            </div>

            <div className="my-28 grid lg:grid-cols-2 items-center">
                <div>
                    <img src="/spa/yoga.jpeg" alt="message" className="w-full lg:w-[540px] h-[510px] object-cover" />
                </div>

                <div className="space-y-5 lg:ml-16 mt-5 lg:mt-0">
                    <h1 className="text-3xl lg:text-4xl primary-font font-bold">Yoga and Meditation</h1>
                    <p className="text-lg tracking-wide opacity-70">Our tranquility experts help you access the key <br /> elements of wellness..</p>

                    <div className="lg:max-w-[400px]">
                        <div onClick={() => handleAccordionClick('accordion3')} className="border-b border-gray border-opacity-20 pb-3">
                            <div className="flex items-center justify-between">
                                <h4 className="text-lg primary-font font-medium pb-1 cursor-pointer">Skin Care Enhancements</h4>
                                <MdKeyboardArrowDown className={`text-2xl opacity-70 ${!accordion.accordion3 ? 'block' : 'hidden'}`} />
                                <MdKeyboardArrowUp className={`text-2xl opacity-70 ${accordion.accordion3 ? 'block' : 'hidden'}`} />
                            </div>
                            <p className={`text-lg tracking-wide opacity-80 my-2 ${accordion.accordion3 ? 'block' : 'hidden'}`}>50 minutes $135 | 80 minutes $195 | 110 minutes $255 <br />Our signature massage incorporating our exclusive essential oils is designed to transform you by soothing sore muscles.</p>
                        </div>

                        <div onClick={() => handleAccordionClick('accordion4')} className="mt-3 ">
                            <div className="flex items-center justify-between ">
                                <h4 className="text-lg primary-font font-medium pb-1 cursor-pointer">Beauty Boosts</h4>
                                <MdKeyboardArrowDown className={`text-2xl opacity-70 ${!accordion.accordion4 ? 'block' : 'hidden'}`} />
                                <MdKeyboardArrowUp className={`text-2xl opacity-70 ${accordion.accordion4 ? 'block' : 'hidden'}`} />
                            </div>
                            <p className={`text-lg tracking-wide opacity-80 my-2 ${accordion.accordion4 ? 'block transition duration-150' : 'hidden'}`}>50 minutes $135 | 80 minutes $195 | 110 minutes $255 <br />Our signature massage incorporating our exclusive essential oils is designed to transform you by soothing sore muscles.</p>
                        </div>
                    </div>

                    <br />
                    <button className="bg-primary-color px-5 py-2 rounded-sm text-white ">EMAIL TO BOOK</button>
                </div>
            </div>
        </section>
    );
};

export default SpaService;