import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <nav className="bg-black text-white">
            <div className="my-container pt-20 pb-10">
                <div className="grid md:grid-cols-11">

                    <div className="col-span-4">
                        {/* Logo */}
                        <Link to="/">
                            <div className='flex flex-col justify-center mb-3 sm:mb-5 md:mb-8'>
                                <h1 className='text-2xl sm:text-3xl font-semibold primary-font hover:text-primary-color'>TravelNest</h1>
                                <p className='sm:pl-2 text-xs tracking-widest md:mt-0'>Boutique Hotel</p>
                            </div>
                        </Link>

                        <ul className="space-y-2 md:space-y-5 font-medium text-sm sm:text-base">
                            <li ><span>E.</span> jahidhowlader.info@gmail.com</li>
                            <li><span>T.</span> +880 1625 405959</li>
                            <li>32 East Bashabo, Dhaka - 1214</li>
                        </ul>
                    </div>

                    <div className="col-span-3 md:pl-5 lg:pl-0">

                        <h5 className="text-2xl font-bold primary-font mb-3 sm:mb-5 md:mb-8 mt-10 md:mt-3">General</h5>
                        <ul className="space-y-2 md:space-y-5 text-sm sm:text-base">
                            <li className="hover:hover:text-primary-color"><Link to="/about">Accommodation</Link></li>
                            <li className="hover:hover:text-primary-color"><Link to="/restaurant">Dine & Drink</Link></li>
                            <li className="hover:hover:text-primary-color"><Link to="/spa">Spa & Leisure</Link></li>
                            <li className="hover:hover:text-primary-color"><Link to="/service">Services</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-4">
                        <h4 className="text-xl sm:text-3xl font-semibold primary-font mt-10 md:mt-0 mb-5 md:mb-8">Sign up for our newsletter to receive special offers, news, and events.</h4>

                        <div className="relative max-w-sm">
                            <input type="text" placeholder="Your Email Address" className="pl-10 pr-16 py-3 sm:py-5 border rounded-sm w-full focus:border-primary-color focus:outline-0" />

                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <HiArrowLongRight className="text-3xl text-black" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-[0.px] border-gray opacity-20" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
                    <ul className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                        <li>Copyright 2023 by Jahidhowlader</li>
                        <li className="hover:text-primary-color"><Link to="/privacy">Privacy</Link></li>
                        <li className="hover:text-primary-color"><Link to="/sitemap">sitemap</Link></li>
                    </ul>

                    <ul className="flex items-center gap-2 xl:gap-5">
                        <li>
                            <Link to={'https://www.facebook.com/jahidhowlader.info/'} target="_blank">
                                <BiLogoFacebook size={24} className="w-5 h-5 hover:hover:text-primary-color" />
                            </Link>
                        </li>

                        <li>
                            <Link to={'https://www.instagram.com/jahidhowlader.info/'} target="_blank">
                                <BiLogoInstagram size={20} className="w-5 h-5 hover:hover:text-primary-color" />
                            </Link>
                        </li>

                        <li>
                            <Link to={'https://twitter.com/JahidHowlader10'} target="_blank">
                                <BiLogoTwitter size={20} className="w-5 h-5 hover:hover:text-primary-color" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Footer;