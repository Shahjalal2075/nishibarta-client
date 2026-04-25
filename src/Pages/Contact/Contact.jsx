import React, { useState } from 'react';
import { FaFacebookF, FaYoutube, FaGoogle, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // ✅ এখানে আপনার backend API বা EmailJS/Formspree URL দিন
        // নিচে Formspree-র উদাহরণ দেওয়া হয়েছে
        try {
            const res = await fetch('https://formspree.io/f/xwvazlkn', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputClass =
        'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 bg-gray-50 transition-colors duration-200';

    return (
        <div className="bg-white min-h-screen rounded-2xl">

            {/* Hero */}
            <div className="bg-[#1D1D1D] text-white py-14 px-6 text-center rounded-t-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">যোগাযোগ করুন</h1>
                <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
                    কোনো সংবাদ পাঠাতে, ভুল তথ্য জানাতে বা যেকোনো প্রয়োজনে
                    আমাদের সাথে যোগাযোগ করুন। আমরা সাধারণত ২৪ ঘণ্টার মধ্যে সাড়া দিই।
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">

                {/* Left — Info */}
                <div className="md:col-span-2 space-y-6">

                    {/* Email */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-red-600 rounded-full inline-block"></span>
                            সরাসরি যোগাযোগ
                        </h2>
                        <a
                            href="mailto:nishibarta2075@gmail.com"
                            className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 hover:border-red-300 hover:bg-red-50 transition-colors duration-200 group"
                        >
                            <div className="bg-red-600 text-white p-2 rounded-lg group-hover:bg-red-700 transition-colors">
                                <FaEnvelope size={16} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">ইমেইল</p>
                                <p className="text-sm font-medium text-gray-800">
                                    nishibarta2075@gmail.com
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Response Time */}
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                        <p className="text-sm font-semibold text-red-700 mb-1">⏱ সাড়া দেওয়ার সময়</p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            সাধারণত আমরা <strong>২৪ ঘণ্টার মধ্যে</strong> সাড়া দিই।
                            জরুরি বিষয়ে সরাসরি ইমেইল করুন।
                        </p>
                    </div>

                    {/* Social */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-red-600 rounded-full inline-block"></span>
                            সোশ্যাল মিডিয়া
                        </h2>
                        <div className="space-y-3">
                            <a
                                href="https://www.facebook.com/nishibarta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200 group"
                            >
                                <div className="bg-blue-600 text-white p-2 rounded-lg">
                                    <FaFacebookF size={14} />
                                </div>
                                <span className="text-sm text-gray-700 font-medium">
                                    facebook.com/nishibarta
                                </span>
                            </a>
                            <a
                                href="https://www.youtube.com/@NishiBarta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:border-red-300 hover:bg-red-50 transition-colors duration-200 group"
                            >
                                <div className="bg-red-600 text-white p-2 rounded-lg">
                                    <FaYoutube size={14} />
                                </div>
                                <span className="text-sm text-gray-700 font-medium">
                                    youtube.com/@NishiBarta
                                </span>
                            </a>
                            <a
                                href="https://g.co/kgs/jUqu3YS"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:border-yellow-300 hover:bg-yellow-50 transition-colors duration-200 group"
                            >
                                <div className="bg-yellow-500 text-white p-2 rounded-lg">
                                    <FaGoogle size={14} />
                                </div>
                                <span className="text-sm text-gray-700 font-medium">
                                    Google-এ নিশি বার্তা
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right — Form */}
                <div className="md:col-span-3">
                    <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-red-600 rounded-full inline-block"></span>
                        বার্তা পাঠান
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                আপনার নাম <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="আপনার পুরো নাম লিখুন"
                                className={inputClass}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                ইমেইল ঠিকানা <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="example@gmail.com"
                                className={inputClass}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                আপনার বার্তা <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                placeholder="আপনার বক্তব্য, প্রশ্ন বা মতামত লিখুন..."
                                className={inputClass + ' resize-none'}
                            />
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-700 text-sm">
                                ✅ আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই সাড়া দেব।
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
                                ❌ বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে সরাসরি ইমেইল করুন।
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm"
                        >
                            {status === 'sending' ? '⏳ পাঠানো হচ্ছে...' : 'বার্তা পাঠান →'}
                        </button>

                        <p className="text-xs text-gray-400 text-center">
                            এই form পূরণ করে পাঠালে আপনি আমাদের{' '}
                            <a href="/privacy-policy" className="text-red-500 underline">
                                গোপনীয়তা নীতিতে
                            </a>{' '}
                            সম্মত হচ্ছেন।
                        </p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;