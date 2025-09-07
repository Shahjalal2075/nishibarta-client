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

const Details = () => {

    const data = useLoaderData();
    const shareUrl = `https://preview.nishibarta.com/news/${data._id}`;

    const [news, setNews] = useState([]);

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
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 px-3">
            <div className="lg:col-span-2">
                <div className="">
                    <div className="pb-5">
                        <h2 className='text-[#111] font-extrabold p-2 text-3xl leading-14'>{data.headline}</h2>
                        <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                            <p>{data.journalist}</p>
                            <p>{BanglaDate(data.date)}</p>
                            <p>{data.categoryBn}</p>
                        </div>
                    </div>
                    <div className="w-full max-h-[600px] overflow-hidden rounded-lg">
                        <img className='w-full object-top rounded-lg' src={data.cover} alt="" />
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
    );
};

export default Details;