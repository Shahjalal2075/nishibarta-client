import React from 'react';

const Terms = () => {
    return (
        <div className="rounded-2xl min-h-screen">
            <div className="px-6 py-12">
                
                {/* Header */}
                <div className="border-b border-gray-200 pb-6 mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        ব্যবহারের শর্তাবলী
                    </h1>
                    <p className="text-gray-500 text-sm">
                        সর্বশেষ আপডেট: ২৫ এপ্রিল ২০২৬
                    </p>
                </div>

                {/* Intro */}
                <p className="text-gray-700 leading-relaxed mb-8">
                    নিশি বার্তা (<strong>www.nishibarta.com</strong>) ওয়েবসাইটে আপনাকে স্বাগতম।
                    এই ওয়েবসাইট ব্যবহার করার আগে অনুগ্রহ করে নিচের শর্তাবলী মনোযোগ দিয়ে পড়ুন।
                    সাইটটি ব্যবহার করলে আপনি স্বয়ংক্রিয়ভাবে এই শর্তাবলী মেনে নিয়েছেন বলে গণ্য হবে।
                </p>

                <div className="space-y-8">

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০১</span>
                            সেবার পরিচিতি
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            নিশি বার্তা একটি বাংলাদেশ ভিত্তিক অনলাইন সংবাদ মাধ্যম। আমরা জাতীয়,
                            আন্তর্জাতিক, খেলাধুলা, বিনোদন ও প্রযুক্তিসহ বিভিন্ন বিষয়ে সংবাদ
                            পরিবেশন করি। এখানে প্রকাশিত তথ্য শুধুমাত্র সাধারণ জ্ঞান ও সংবাদের
                            উদ্দেশ্যে প্রদান করা হয়।
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০২</span>
                            কপিরাইট ও মেধাস্বত্ব
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            এই ওয়েবসাইটে প্রকাশিত সকল লেখা, ছবি, ভিডিও, গ্রাফিক্স ও অন্যান্য
                            কন্টেন্ট নিশি বার্তার মেধাস্বত্বাধীন। নিচের কাজগুলো সম্পূর্ণ নিষিদ্ধ:
                        </p>
                        <ul className="list-none space-y-2 text-gray-700">
                            {[
                                'অনুমতি ছাড়া কোনো কন্টেন্ট অন্য কোথাও প্রকাশ করা',
                                'বাণিজ্যিক উদ্দেশ্যে আমাদের কন্টেন্ট ব্যবহার করা',
                                'কন্টেন্ট পরিবর্তন বা বিকৃত করে প্রচার করা',
                                'লেখকের নাম বা সূত্র উল্লেখ না করে কন্টেন্ট শেয়ার করা',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">✕</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                            তবে সূত্র উল্লেখ করে সংবাদ শেয়ার করা সম্পূর্ণ বৈধ ও উৎসাহিত।
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৩</span>
                            তথ্যের নির্ভুলতা ও দায়বদ্ধতা
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            নিশি বার্তা সর্বদা সঠিক ও নির্ভরযোগ্য তথ্য প্রকাশের চেষ্টা করে।
                            তবে কোনো সংবাদে অনিচ্ছাকৃত ভুল থাকলে আমরা তা সংশোধন করে থাকি।
                            এই সাইটের তথ্যের উপর ভিত্তি করে নেওয়া যেকোনো ব্যক্তিগত, আর্থিক
                            বা আইনি সিদ্ধান্তের জন্য নিশি বার্তা দায়ী থাকবে না।
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৪</span>
                            বিজ্ঞাপন ও স্পনসরড কন্টেন্ট
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            নিশি বার্তায় Google AdSense-সহ তৃতীয় পক্ষের বিজ্ঞাপন প্রদর্শিত হতে পারে।
                            ভবিষ্যতে Affiliate লিংক বা স্পনসরড কন্টেন্ট যুক্ত হলে তা স্পষ্টভাবে
                            চিহ্নিত করা থাকবে। বিজ্ঞাপনদাতাদের পণ্য বা সেবার মান সম্পর্কে
                            নিশি বার্তা কোনো নিশ্চয়তা দেয় না।
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৫</span>
                            তৃতীয় পক্ষের লিংক
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            আমাদের সংবাদে অন্য ওয়েবসাইটের লিংক থাকতে পারে। সেসব সাইটের
                            কন্টেন্ট, গোপনীয়তা নীতি বা কার্যক্রমের জন্য নিশি বার্তা
                            দায়ী নয়। বাইরের লিংকে প্রবেশের আগে সেই সাইটের শর্তাবলী
                            দেখে নেওয়ার পরামর্শ দেওয়া হচ্ছে।
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৬</span>
                            নিষিদ্ধ ব্যবহার
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            এই ওয়েবসাইট ব্যবহার করার সময় নিচের কাজগুলো করা সম্পূর্ণ নিষিদ্ধ:
                        </p>
                        <ul className="list-none space-y-2 text-gray-700">
                            {[
                                'সাইটের কোনো অংশ hacking বা unauthorized access করার চেষ্টা',
                                'ভুয়া বা বিভ্রান্তিকর তথ্য ছড়ানোর উদ্দেশ্যে ব্যবহার',
                                'অন্য ব্যবহারকারীদের ক্ষতি করার উদ্দেশ্যে সাইট ব্যবহার',
                                'Automated bot দিয়ে অতিরিক্ত traffic তৈরি করা',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">✕</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৭</span>
                            শর্তাবলী পরিবর্তন
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            নিশি বার্তা যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার রাখে।
                            পরিবর্তন হলে এই পৃষ্ঠায় আপডেট তারিখ পরিবর্তন করা হবে।
                            নিয়মিত এই পৃষ্ঠাটি দেখার পরামর্শ দেওয়া হচ্ছে।
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৮</span>
                            প্রযোজ্য আইন
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            এই শর্তাবলী বাংলাদেশের প্রচলিত আইন অনুযায়ী পরিচালিত হবে।
                            যেকোনো বিরোধ বাংলাদেশের আদালতে নিষ্পত্তি করা হবে।
                        </p>
                    </section>

                </div>

                {/* Contact Box */}
                <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">কোনো প্রশ্ন আছে?</h3>
                    <p className="text-gray-700 text-sm">
                        শর্তাবলী সম্পর্কে কিছু জানার থাকলে আমাদের সাথে যোগাযোগ করুন।
                    </p>
                    <a
                        href="/contact"
                        className="inline-block mt-3 bg-red-600 text-white text-sm px-5 py-2 rounded hover:bg-red-700 transition-colors duration-200"
                    >
                        যোগাযোগ করুন →
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Terms;