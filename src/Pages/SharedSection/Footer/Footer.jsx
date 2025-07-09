import { FaFacebookF, FaGoogle, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" bg-[#1D1D1D] mt-8 text-[#fff]">
            <div className="p-10 flex flex-col justify-center items-center gap-2">
                <img src="https://i.ibb.co/qyvRMH2/logolight.png" alt="Nishi Barta" />
                <p className="font-bold text-center">
                    সকল ধরনের সংবাদসহ যাবতীয় খবর পেতে চোখ রাখুন নিশি বার্তাতে
                </p>
                <p className="text-center">© ২০২৫ - সমস্ত অধিকার নিশি বার্তা দ্বারা সংরক্ষিত</p>
                <div className="grid grid-flow-col gap-4">
                    <a target="_blank" href="https://www.facebook.com/nishibarta"><FaFacebookF /></a>
                    <a target="_blank" href="https://www.youtube.com/@NishiBarta"><FaYoutube /></a>
                    <a target="_blank" href="https://g.co/kgs/jUqu3YS"><FaGoogle /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;