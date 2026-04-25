import { FaFacebookF, FaGoogle, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#1D1D1D] mt-8 text-[#fff]">
            <div className="p-10 flex flex-col justify-center items-center gap-4">
                <img src="https://i.ibb.co/qyvRMH2/logolight.png" alt="Nishi Barta" />
                <p className="font-bold text-center">
                    সকল ধরনের সংবাদসহ যাবতীয় খবর পেতে চোখ রাখুন নিশি বার্তাতে
                </p>

                {/* Legal Links */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
                    <Link
                        to="/about"
                        className="transition-colors duration-200 hover:text-[#da0000]"
                    >
                        আমাদের সম্পর্কে
                    </Link>
                    <span className="text-gray-600">|</span>
                    <Link
                        to="/contact"
                        className="transition-colors duration-200 hover:text-[#da0000]"
                    >
                        যোগাযোগ
                    </Link>
                    <span className="text-gray-600">|</span>
                    <Link
                        to="/privacy-policy"
                        className="transition-colors duration-200 hover:text-[#da0000]"
                    >
                        গোপনীয়তা নীতি
                    </Link>
                    <span className="text-gray-600">|</span>
                    <Link
                        to="/terms"
                        className="transition-colors duration-200 hover:text-[#da0000]"
                    >
                        শর্তাবলী
                    </Link>
                </div>

                <p className="text-center text-sm text-gray-400">
                    © ২০২৬ - সমস্ত অধিকার নিশি বার্তা দ্বারা সংরক্ষিত
                </p>

                {/* Social Icons */}
                <div className="grid grid-flow-col gap-4">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/nishibarta"
                        aria-label="Facebook"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/@NishiBarta"
                        aria-label="YouTube"
                        className="hover:text-red-500 transition-colors duration-200"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://g.co/kgs/jUqu3YS"
                        aria-label="Google"
                        className="hover:text-yellow-400 transition-colors duration-200"
                    >
                        <FaGoogle />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;