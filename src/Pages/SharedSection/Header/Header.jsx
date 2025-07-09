import { Link, NavLink } from "react-router-dom";
import { IoClose, IoHome, IoMenu } from "react-icons/io5";
import { FaSearch, FaFacebookF, FaTwitter, FaYoutube, FaGoogle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import LatestNewsHeading from "../LatestNewsHeading/LatestNewsHeading";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {

    const { api, internalData } = useContext(AuthContext);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [menu, setMenu] = useState([]);

    const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDate = new Date();
    const week = weekNames[currentDate.getDay()];
    const month = monthNames[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    useEffect(() => {
        fetch(`https://nishibarta-server.vercel.app/menu`)
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.name.trim() !== "");
                const sortedData = filteredData.sort((a, b) => a.sl - b.sl);
                setMenu(sortedData);
            });
    }, [])

    return (
        <div className="">
            {/* TopBar */}
            <div className="bg-[#1D1D1D]">
                <div className="container mx-auto py-2 px-3 lg:px-0 flex justify-between items-center">
                    <div className="flex lg:gap-6 lg:text-sm text-xs text-[#fff] items-center justify-between lg:justify-start w-full">
                        <div className="flex gap-1 items-center">
                            <p><FaLocationDot /></p>
                            <p>Bangladesh</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <p><TiWeatherPartlySunny /></p>
                            <p>{internalData.temperature}°</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <p><MdOutlineDateRange /></p>
                            <p>Today ({week}, {date} {month}, {year})</p>
                        </div>

                    </div>
                    <div className="hidden lg:flex gap-4 items-center text-sm text-[#fff]">
                        <a target="_blank" href="https://www.facebook.com/nishibarta"><FaFacebookF /></a>
                        <a target="_blank" href="https://www.youtube.com/@NishiBarta"><FaYoutube /></a>
                        <a target="_blank" href="https://g.co/kgs/jUqu3YS"><FaGoogle /></a>
                    </div>
                </div>
            </div>

            {/* Logobar */}
            <div className="container mx-auto px-3 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 py-4 gap-5 lg:gap-0">
                    <div className="flex justify-between items-center ">
                        <button onClick={() => setIsDrawerOpen(true)} className="lg:hidden text-4xl text-[#DA0000]">
                            <IoMenu />
                        </button>

                        <Link to={"/"} className="">
                            <img className="w-72 md:w-90" src={internalData.logoDark} alt="Nishi Barta" />
                        </Link>
                    </div>
                    {/* <div className="flex justify-end">
                        <img src={internalData.headerAds} alt="Ads" />
                    </div> */}
                </div>
            </div>

            {/* Navbar */}
            <div className="bg-[#DA0000] hidden lg:flex">
                <div className="container mx-auto">
                    <div className="flex justify-between py-6 items-center">
                        <div className="flex gap-8 items-center">
                            <NavLink to={'/'} className=" text-lg text-[#fff] font-medium"><IoHome /></NavLink>
                            {
                                menu.map(nav => <NavLink key={nav._id} to={`/${nav.link}`} className=" text-base text-[#fff] font-medium">{nav.name}</NavLink>)
                            }

                        </div>
                        <div className="">
                            <button className="text-lg text-[#fff] font-medium"><FaSearch /></button>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`fixed top-0 left-0 h-full bg-white z-50 w-[65%] shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold text-[#DA0000]">Menu</h2>
                    <button onClick={() => setIsDrawerOpen(false)} className="text-2xl text-gray-800"><IoClose /></button>
                </div>
                <div className="flex flex-col gap-4 p-4">
                    <NavLink to={'/'} className=" text-lg text-gray-800 font-medium"><IoHome /></NavLink>
                    {
                        menu.map(nav => (
                            <NavLink key={nav._id} to={`/${nav.link}`} onClick={() => setIsDrawerOpen(false)} className="text-base text-gray-800 font-medium">{nav.name}</NavLink>
                        ))
                    }
                    <div className="flex gap-4 mt-6 text-[#DA0000]">
                        <a target="_blank" href="https://www.facebook.com/nishibarta"><FaFacebookF /></a>
                        <a target="_blank" href="https://www.youtube.com/@NishiBarta"><FaYoutube /></a>
                        <a target="_blank" href="https://g.co/kgs/jUqu3YS"><FaGoogle /></a>
                    </div>
                </div>
            </div>

            {/* Overlay when drawer is open */}
            {isDrawerOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-[#a8626263] z-40" onClick={() => setIsDrawerOpen(false)}></div>
            )}


            <div className="container mx-auto lg:py-6 pb-6">
                <LatestNewsHeading></LatestNewsHeading>
            </div>
        </div>
    );
};

export default Header;