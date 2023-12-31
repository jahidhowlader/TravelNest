import { PiCar } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoWifiOutline } from "react-icons/io5";
import { BsTv } from "react-icons/bs";
import { GiSpoon, GiTowel } from "react-icons/gi";

const Equipements = () => {
    return (
        <section className="my-container mb-20 sm:pt-20">

            <div className="grid sm:grid-cols-3 items-center gap-8">
                <div>
                    <span className="flex items-center gap-8">
                        <span className="w-10 h-[1px] bg-black"></span>
                        <span className="font-medium tracking-widest text-xs lg:text-sm uppercase text-primary-color">FACILITIES</span>
                    </span>
                    <h1 className='text-2xl lg:text-3xl xl:text-[40px] py-3 xl:py-5 font-bold primary-font'>Equipements</h1>

                    <ul className="space-y-5 sm:space-y-10 mt-5 sm:mt-10 group">
                        <li className="flex items-center gap-5 text-lg tracking-wide"><PiCar className="text-3xl  md:text-4xl hover:text-primary-color" /> Airport Transfer</li>
                        <li className="flex items-center gap-5 text-lg tracking-wide"><GiSpoon className="text-3xl  md:text-4xl hover:text-primary-color" /> Fully Equipped Kitchen</li>
                        <li className="flex items-center gap-5 text-lg tracking-wide"><CiCreditCard1 className="text-3xl  md:text-4xl hover:text-primary-color" /> Card Access Lift</li>
                        <li className="flex items-center gap-5 text-lg tracking-wide"><IoWifiOutline className="text-3xl  md:text-4xl hover:text-primary-color" /> Fibre Internet</li>
                        <li className="flex items-center gap-5 text-lg tracking-wide"><BsTv className="text-3xl  md:text-4xl hover:text-primary-color" /> Smart TV</li>
                        <li className="flex items-center gap-5 text-lg tracking-wide"><GiTowel className="text-3xl md:text-4xl hover:text-primary-color" /> Weekly Housekeeping</li>
                    </ul>
                </div>
                <div className="mt-12 sm:mt-0">
                    <div className="flex flex-col gap-8">
                        <img src="/home/equipements4.jpg" alt="Equipements" className="object-cover max-h-[312px] w-full" />
                        <img src="/home/equipements3.jpg" alt="Equipements" className="object-cover max-h-[312px] w-full" />
                    </div>
                </div>
                <div className="h-full">
                    <img src="/home/equipements1.jpg" alt="Equipements" className="object-cover h-full w-full" />
                </div>
            </div>
        </section>
    );
};

export default Equipements;