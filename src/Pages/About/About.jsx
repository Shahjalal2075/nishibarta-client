import React from 'react';
import { FaFacebookF, FaYoutube, FaGoogle } from 'react-icons/fa';

const About = () => {
    const categories = [
        { icon: '🇧🇩', label: 'জাতীয় সংবাদ' },
        { icon: '🌍', label: 'আন্তর্জাতিক সংবাদ' },
        { icon: '⚽', label: 'খেলাধুলা' },
        { icon: '🎬', label: 'বিনোদন' },
        { icon: '💻', label: 'প্রযুক্তি' },
        { icon: '🏛️', label: 'রাজনীতি' },
        { icon: '📈', label: 'অর্থনীতি' },
    ];

    const values = [
        {
            icon: '✅',
            title: 'সত্যনিষ্ঠা',
            desc: 'আমরা কোনো তথ্য যাচাই না করে প্রকাশ করি না। প্রতিটি সংবাদ একাধিক সূত্র থেকে নিশ্চিত করা হয়।',
        },
        {
            icon: '⚖️',
            title: 'নিরপেক্ষতা',
            desc: 'রাজনৈতিক বা বাণিজ্যিক কোনো প্রভাব ছাড়াই আমরা নিরপেক্ষভাবে সংবাদ পরিবেশন করি।',
        },
        {
            icon: '⚡',
            title: 'দ্রুততা',
            desc: 'সর্বশেষ খবর সবার আগে পৌঁছে দেওয়াই আমাদের লক্ষ্য। আমাদের দল সার্বক্ষণিক সক্রিয়।',
        },
        {
            icon: '❤️',
            title: 'পাঠকের প্রতি দায়বদ্ধতা',
            desc: 'পাঠকের আস্থাই আমাদের সবচেয়ে বড় সম্পদ। তাদের জন্যই আমাদের প্রতিদিনের প্রচেষ্টা।',
        },
    ];

    const stats = [
        { number: '২০২২', label: 'প্রতিষ্ঠাকাল' },
        { number: '১৬+', label: 'দক্ষ সাংবাদিক' },
        { number: '৭', label: 'সংবাদ বিভাগ' },
        { number: '২৪/৭', label: 'সংবাদ পরিবেশন' },
    ];

    return (
        <div className="bg-white min-h-screen rounded-2xl">

            {/* Hero Section */}
            <div className="bg-[#1D1D1D] text-white py-16 px-6 rounded-t-2xl">
                <div className="max-w-4xl mx-auto text-center">
                    <img
                        src="https://i.ibb.co/qyvRMH2/logolight.png"
                        alt="নিশি বার্তা"
                        className="mx-auto mb-6 h-16 object-contain"
                    />
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        আমাদের সম্পর্কে
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                        নিশি বার্তা — বাংলাদেশের একটি বিশ্বস্ত অনলাইন সংবাদ মাধ্যম।
                        ২০২২ সাল থেকে আমরা সত্য ও নিরপেক্ষ সংবাদ পরিবেশনে প্রতিশ্রুতিবদ্ধ।
                    </p>
                </div>
            </div>

            <div className="px-6 py-12 space-y-14">

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center"
                        >
                            <p className="text-2xl font-bold text-red-600 mb-1">{stat.number}</p>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Our Story */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-1 h-7 bg-red-600 rounded-full inline-block"></span>
                        আমাদের গল্প
                    </h2>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                        <p>
                            ২০২২ সালে একটি স্বপ্ন থেকে নিশি বার্তার যাত্রা শুরু হয় —
                            বাংলাদেশের মানুষের কাছে দ্রুত, সঠিক এবং নিরপেক্ষ সংবাদ
                            পৌঁছে দেওয়ার স্বপ্ন। ডিজিটাল যুগে যখন ভুল তথ্য ও গুজব
                            দ্রুত ছড়িয়ে পড়ে, তখন একটি বিশ্বস্ত সংবাদ মাধ্যমের প্রয়োজনীয়তা
                            অনুভব করেই আমাদের এই উদ্যোগ।
                        </p>
                        <p>
                            আজ আমাদের ৫ জনেরও বেশি অভিজ্ঞ সাংবাদিক ও কন্টেন্ট বিশেষজ্ঞের
                            দল সার্বক্ষণিক কাজ করে যাচ্ছে। জাতীয় থেকে আন্তর্জাতিক,
                            রাজনীতি থেকে বিনোদন — প্রতিটি বিভাগে আমরা মানসম্পন্ন
                            সংবাদ পরিবেশনে বিশ্বাসী।
                        </p>
                    </div>
                </section>

                {/* Mission */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-1 h-7 bg-red-600 rounded-full inline-block"></span>
                        আমাদের লক্ষ্য ও উদ্দেশ্য
                    </h2>
                    <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
                        <p className="text-gray-800 leading-relaxed text-lg">
                            "প্রতিটি বাংলাভাষী পাঠকের কাছে সঠিক সময়ে সঠিক তথ্য
                            পৌঁছে দেওয়াই নিশি বার্তার মূল লক্ষ্য।"
                        </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        আমরা বিশ্বাস করি সংবাদমাধ্যমের মূল দায়িত্ব হলো জনগণকে
                        সচেতন ও তথ্যসমৃদ্ধ রাখা। তাই আমরা প্রতিটি সংবাদ যাচাই করে,
                        সূত্র উল্লেখ করে এবং নিরপেক্ষভাবে উপস্থাপন করি।
                    </p>
                </section>

                {/* Categories */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-1 h-7 bg-red-600 rounded-full inline-block"></span>
                        আমাদের সংবাদ বিভাগসমূহ
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {categories.map((cat, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:border-red-300 hover:bg-red-50 transition-colors duration-200"
                            >
                                <span className="text-xl">{cat.icon}</span>
                                <span className="text-gray-800 text-sm font-medium">{cat.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-1 h-7 bg-red-600 rounded-full inline-block"></span>
                        আমাদের মূল্যবোধ
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {values.map((val, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow duration-200"
                            >
                                <p className="text-2xl mb-2">{val.icon}</p>
                                <h3 className="font-bold text-gray-900 mb-1">{val.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-1 h-7 bg-red-600 rounded-full inline-block"></span>
                        আমাদের দল
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        নিশি বার্তার পেছনে রয়েছে ৫ জনেরও বেশি নিবেদিতপ্রাণ সাংবাদিক,
                        কন্টেন্ট ক্রিয়েটর ও প্রযুক্তি বিশেষজ্ঞের একটি দল। আমাদের
                        প্রতিটি সদস্য তাদের নিজ নিজ ক্ষেত্রে অভিজ্ঞ এবং মানসম্পন্ন
                        সংবাদ পরিবেশনে প্রতিশ্রুতিবদ্ধ। আমরা একসাথে কাজ করি একটি
                        সাধারণ লক্ষ্যে — পাঠকদের সেরা সংবাদ অভিজ্ঞতা দেওয়া।
                    </p>
                </section>

                {/* Social & Contact */}
                <section className="bg-[#1D1D1D] rounded-2xl p-8 text-white text-center">
                    <h2 className="text-xl font-bold mb-2">আমাদের সাথে যুক্ত থাকুন</h2>
                    <p className="text-gray-400 text-sm mb-6">
                        সোশ্যাল মিডিয়ায় ফলো করুন এবং সর্বশেষ সংবাদ সবার আগে পান
                    </p>
                    <div className="flex justify-center gap-4 mb-6">
                        <a
                            href="https://www.facebook.com/nishibarta"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://www.youtube.com/@NishiBarta"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors duration-200"
                        >
                            <FaYoutube size={18} />
                        </a>
                        <a
                            href="https://g.co/kgs/jUqu3YS"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Google"
                            className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full transition-colors duration-200"
                        >
                            <FaGoogle size={18} />
                        </a>
                    </div>
                    <a
                        href="/contact"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-2.5 rounded-lg transition-colors duration-200"
                    >
                        যোগাযোগ করুন →
                    </a>
                </section>

            </div>
        </div>
    );
};

export default About;