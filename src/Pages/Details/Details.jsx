import { useLoaderData } from 'react-router-dom';
import RightSlider from '../SharedSection/RightSlider/RightSlider';
import BanglaDate from '../SharedSection/BanglaDate/BanglaDate';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdContentCopy } from "react-icons/md";
import { IoPrint } from "react-icons/io5";
import { useEffect, useState } from 'react';
import NewsCardHome from '../SharedSection/NewsCardHome/NewsCardHome';
import { Helmet } from 'react-helmet';

const Details = () => {

    const data = useLoaderData();
    const shareUrl = `https://preview.nishibarta.com/news/${data._id}`;

    const [news, setNews] = useState([]);

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": data.headline,           // সংবাদের শিরোনাম
        "image": data.cover,          // সংবাদের ছবি
        "datePublished": data.date,       // প্রকাশের তারিখ
        "author": {
            "@type": "Organization",
            "name": "নিশি বার্তা"
        },
        "publisher": {
            "@type": "Organization",
            "name": "নিশি বার্তা",
            "logo": {
                "@type": "ImageObject",
                "url": "https://i.ibb.co/jzHTFgY/logodark.png"
            }
        },
        "url": `https://nishibarta-server.vercel.app/news-details/${data._id}`
    };

    useEffect(() => {
        fetch(`https://nishibarta-server.vercel.app/news/${data.category}`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item =>
                    item.status === "Accept" && item.deleteStatus === "None"
                );

                const sorted = filtered.sort((a, b) =>
                    new Date(b.date) - new Date(a.date)
                );
                setNews(sorted.slice(0, 2));
            });
    }, [data.category])

    const handlePrint = () => {
        window.print();
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            toast.success("লিংক কপি হয়েছে!");
        }).catch(() => {
            toast.error("লিংক কপি করা যায়নি!");
        });
    };


    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Helmet>
                {/* Title Tag */}
                <title>{data.headline} | নিশিবার্তা</title>

                {/* Meta Description — AdSense এর জন্য গুরুত্বপূর্ণ */}
                <meta
                    name="description"
                    content={data.details.substring(0, 155) + '...'}
                />

                {/* Open Graph — Facebook/Social sharing */}
                <meta property="og:title" content={data.headline} />
                <meta property="og:description" content={data.details} />
                <meta property="og:image" content={data.cover} />
                <meta property="og:url" content={`https://nishibarta-server.vercel.app/news-details/${data._id}`} />
                <meta property="og:type" content="data.categoryBn" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={data.headline} />
                <meta name="twitter:description" content={data.details} />
                <meta name="twitter:image" content={data.cover} />

                {/* Canonical Tag */}
                <link rel="canonical" href={`https://nishibarta-server.vercel.app/news-details/${data._id}`} />
            </Helmet>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 px-3">
                <div className="lg:col-span-2">
                    <div className="">
                        <div className="pb-5">
                            <h1 className='text-[#111] font-extrabold p-2 text-3xl leading-14'>{data.headline}</h1>
                            <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                <p>{data.journalist}</p>
                                <p>{BanglaDate(data.date)}</p>
                                <p>{data.categoryBn}</p>
                            </div>
                        </div>
                        <div className="w-full max-h-[600px] overflow-hidden rounded-lg">
                            <img className='w-full object-top rounded-lg' src={data.cover} alt="data.headline" />
                        </div>
                        <div className="flex flex-wrap gap-4 mt-6 px-2 items-center">
                            <FacebookShareButton url={shareUrl}><FacebookIcon size={32} round /></FacebookShareButton>
                            <WhatsappShareButton url={shareUrl}><WhatsappIcon size={32} round /></WhatsappShareButton>
                            <TwitterShareButton url={shareUrl}><TwitterIcon size={32} round /></TwitterShareButton>
                            <LinkedinShareButton url={shareUrl}><LinkedinIcon size={32} round /></LinkedinShareButton>
                            <button onClick={handlePrint} title="Print this page" className='cursor-pointer'>
                                <IoPrint className='text-3xl' />
                            </button>
                            <button onClick={handleCopyLink} title="Copy Link" className='cursor-pointer'>
                                <MdContentCopy className='text-3xl' />
                            </button>
                        </div>
                        <div className="mt-10">
                            {data.details.split('/n').map((para, index) => (
                                <p key={index} className="mb-4 leading-relaxed text-justify font-medium text-base ">
                                    {para.trim()}
                                </p>
                            ))}

                        </div>
                    </div>
                    <div className="mt-20">
                        <h2 className='text-lg font-bold text-[#111] my-4'>জনপ্রিয়</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            {
                                news.map((item) => (
                                    <NewsCardHome
                                        key={item._id}
                                        item={item}
                                    ></NewsCardHome>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-5 lg:mt-0">
                    <RightSlider></RightSlider>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Details;