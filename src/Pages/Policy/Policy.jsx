import React from 'react';

const Policy = () => {
    return (
        <div className="min-h-screen">
            <div className="px-6 py-12">

                {/* Header */}
                <div className="border-b border-gray-200 pb-6 mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        গোপনীয়তা নীতি (Privacy Policy)
                    </h1>
                    <p className="text-gray-500 text-sm">
                        সর্বশেষ আপডেট: ২৫ এপ্রিল ২০২৬
                    </p>
                </div>

                {/* Intro */}
                <p className="text-gray-700 leading-relaxed mb-8">
                    নিশি বার্তা (<strong>www.nishibarta.com</strong>) আপনার গোপনীয়তাকে
                    সর্বোচ্চ গুরুত্ব দেয়। এই নীতিতে আমরা বিস্তারিত জানাচ্ছি যে আমরা
                    কী তথ্য সংগ্রহ করি, কেন করি এবং কীভাবে ব্যবহার করি।
                    এই সাইট ব্যবহার করলে আপনি এই গোপনীয়তা নীতিতে সম্মত হচ্ছেন।
                </p>

                <div className="space-y-8">

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০১</span>
                            আমরা কী তথ্য সংগ্রহ করি
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            আপনি আমাদের সাইট ভিজিট করলে স্বয়ংক্রিয়ভাবে নিচের তথ্যগুলো
                            সংগ্রহ হতে পারে:
                        </p>
                        <ul className="list-none space-y-2 text-gray-700">
                            {[
                                'IP ঠিকানা ও আনুমানিক অবস্থান',
                                'ব্রাউজারের ধরন ও ভার্সন',
                                'আপনি কোন পৃষ্ঠাগুলো দেখেছেন ও কতক্ষণ ছিলেন',
                                'কোন সাইট থেকে আমাদের সাইটে এসেছেন (referrer)',
                                'ডিভাইসের ধরন (মোবাইল, ট্যাবলেট, কম্পিউটার)',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-600 text-sm mt-3 bg-gray-50 p-3 rounded border-l-4 border-red-400">
                            ⚠️ আমরা আপনার নাম, ফোন নম্বর বা ব্যক্তিগত পরিচয় সংগ্রহ করি না,
                            কারণ আমাদের সাইটে কোনো registration বা login সুবিধা নেই।
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০২</span>
                            Google Analytics
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            আমরা সাইটের ট্রাফিক বিশ্লেষণের জন্য <strong>Google Analytics</strong> ব্যবহার
                            করি। এটি আমাদের বুঝতে সাহায্য করে কোন সংবাদ পাঠকদের বেশি পছন্দ
                            এবং সাইটের কোথায় উন্নতি দরকার।
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Google Analytics নিজস্ব cookie ব্যবহার করে আপনার ব্রাউজিং
                            আচরণ ট্র্যাক করে। এই তথ্য সম্পূর্ণ বেনামী এবং কোনো ব্যক্তিগত
                            পরিচয় প্রকাশ করে না।
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৩</span>
                            Google AdSense ও বিজ্ঞাপন Cookies
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            আমাদের সাইটে <strong>Google AdSense</strong>-এর মাধ্যমে বিজ্ঞাপন
                            প্রদর্শিত হয়। Google আপনার আগ্রহ ও ব্রাউজিং ইতিহাসের উপর ভিত্তি
                            করে প্রাসঙ্গিক বিজ্ঞাপন দেখানোর জন্য cookie ব্যবহার করে।
                        </p>
                        <ul className="list-none space-y-2 text-gray-700 mb-3">
                            {[
                                'Google আপনার পূর্ববর্তী সাইট ভিজিটের তথ্য ব্যবহার করতে পারে',
                                'বিজ্ঞাপনের cookie তৃতীয় পক্ষ (Google) দ্বারা নিয়ন্ত্রিত',
                                'নিশি বার্তা এই বিজ্ঞাপন data সংগ্রহ বা সংরক্ষণ করে না',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৪</span>
                            Cookies কী ও কীভাবে ব্যবহার হয়
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Cookie হলো ছোট text ফাইল যা আপনার ব্রাউজারে সংরক্ষিত হয়।
                            আমাদের সাইটে যেসব cookie ব্যবহার হয়:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left px-4 py-3 text-gray-700 font-semibold">Cookie</th>
                                        <th className="text-left px-4 py-3 text-gray-700 font-semibold">উদ্দেশ্য</th>
                                        <th className="text-left px-4 py-3 text-gray-700 font-semibold">প্রদানকারী</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ['_ga, _gid', 'ট্রাফিক বিশ্লেষণ', 'Google Analytics'],
                                        ['_gads', 'বিজ্ঞাপন প্রদর্শন', 'Google AdSense'],
                                        ['IDE, DSID', 'Personalized বিজ্ঞাপন', 'Google'],
                                    ].map(([cookie, purpose, provider], i) => (
                                        <tr key={i} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 font-mono text-gray-600">{cookie}</td>
                                            <td className="px-4 py-3 text-gray-700">{purpose}</td>
                                            <td className="px-4 py-3 text-gray-700">{provider}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-600 text-sm mt-3">
                            আপনার ব্রাউজার settings থেকে যেকোনো সময় cookie বন্ধ করা যাবে,
                            তবে এতে সাইটের কিছু অংশ সঠিকভাবে কাজ নাও করতে পারে।
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৫</span>
                            তৃতীয় পক্ষের সাথে তথ্য শেয়ার
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            নিশি বার্তা আপনার ব্যক্তিগত তথ্য কখনো বিক্রি করে না বা
                            বাণিজ্যিক উদ্দেশ্যে তৃতীয় পক্ষের কাছে হস্তান্তর করে না।
                            শুধুমাত্র নিচের ক্ষেত্রে তথ্য শেয়ার হতে পারে:
                        </p>
                        <ul className="list-none space-y-2 text-gray-700">
                            {[
                                'Google Analytics ও AdSense — সাইট পরিচালনার জন্য',
                                'আইনি বাধ্যবাধকতা — সরকারি বা আদালতের নির্দেশে',
                                'সাইটের নিরাপত্তা রক্ষার প্রয়োজনে',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৬</span>
                            Email Subscription (ভবিষ্যৎ পরিকল্পনা)
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            ভবিষ্যতে আমরা Newsletter বা Email subscription সুবিধা চালু করতে
                            পারি। সেক্ষেত্রে আপনার ইমেইল ঠিকানা শুধুমাত্র সংবাদ পাঠানোর
                            কাজে ব্যবহার করা হবে এবং তৃতীয় পক্ষের সাথে শেয়ার করা হবে না।
                            Subscription চালু হলে এই নীতি আপডেট করা হবে।
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৭</span>
                            আন্তর্জাতিক ব্যবহারকারী (GDPR)
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            আমাদের সাইট সারা বিশ্ব থেকে ভিজিট করা হয়। ইউরোপীয় ইউনিয়নের
                            (EU) ব্যবহারকারীদের জন্য GDPR অনুযায়ী আপনার নিচের অধিকারগুলো রয়েছে:
                        </p>
                        <ul className="list-none space-y-2 text-gray-700">
                            {[
                                'আপনার সম্পর্কে কী তথ্য আছে তা জানার অধিকার',
                                'তথ্য মুছে দেওয়ার অনুরোধ করার অধিকার',
                                'Data processing-এ আপত্তি জানানোর অধিকার',
                                'Google Analytics Opt-out করার অধিকার',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-600 text-sm mt-3">
                            এই অধিকার প্রয়োগ করতে আমাদের সাথে যোগাযোগ করুন।
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৮</span>
                            শিশুদের গোপনীয়তা
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            নিশি বার্তা ১৩ বছরের নিচে কোনো শিশুর ব্যক্তিগত তথ্য সচেতনভাবে
                            সংগ্রহ করে না। আমাদের সাইট সাধারণ পাঠকদের জন্য একটি সংবাদ মাধ্যম।
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded">০৯</span>
                            নীতি পরিবর্তন
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            এই গোপনীয়তা নীতি যেকোনো সময় পরিবর্তিত হতে পারে। পরিবর্তন
                            হলে এই পৃষ্ঠার শীর্ষে "সর্বশেষ আপডেট" তারিখ পরিবর্তন করা হবে।
                            নিয়মিত এই পৃষ্ঠা দেখার পরামর্শ দেওয়া হচ্ছে।
                        </p>
                    </section>

                </div>

                {/* Contact Box */}
                <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">
                        গোপনীয়তা সংক্রান্ত কোনো প্রশ্ন?
                    </h3>
                    <p className="text-gray-700 text-sm mb-1">
                        আপনার তথ্য বা এই নীতি সম্পর্কে কিছু জানতে চাইলে আমাদের সাথে যোগাযোগ করুন:
                    </p>
                    <p className="text-gray-700 text-sm mb-3">
                        📧{' '}
                        <a
                            href="mailto:nishibarta2075@gmail.com"
                            className="text-red-600 underline hover:text-red-800"
                        >
                            nishibarta2075@gmail.com
                        </a>
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-red-600 text-white text-sm px-5 py-2 rounded hover:bg-red-700 transition-colors duration-200"
                    >
                        যোগাযোগ করুন →
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Policy;