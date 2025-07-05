import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaSearch, FaFacebookF, FaTwitter, FaYoutube, FaGoogle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import LatestNewsHeading from "../LatestNewsHeading/LatestNewsHeading";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {

    const { api,internalData } = useContext(AuthContext);
    const currentDate = new Date();

    const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const week = weekNames[currentDate.getDay()];
    const month = monthNames[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    const [menu, setMenu] = useState([]);
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
                <div className="container mx-auto py-2">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-6 text-sm text-[#fff] items-center">
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
                        <div className="flex gap-4 items-center text-sm text-[#fff]">
                            <a href="https://www.facebook.com/nishibarta"><FaFacebookF /></a>
                            <a href="https://www.youtube.com/@NishiBarta"><FaYoutube /></a>
                            <a href="https://g.co/kgs/jUqu3YS"><FaGoogle /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logobar */}
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4">
                    <Link to={"/"} className="">
                        <img src={internalData.logoDark} alt="Nishi Barta" />
                    </Link>
                    {/* <div className="">
                        <img src={internalData.headerAds} alt="Ads" />
                    </div> */}
                </div>
            </div>

            {/* Navbar */}
            <div className="bg-[#DA0000]">
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

            <div className="container mx-auto py-6">
                <LatestNewsHeading></LatestNewsHeading>
            </div>
        </div>
    );
};

export default Header;