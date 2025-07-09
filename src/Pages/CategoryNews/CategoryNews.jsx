import React, { useEffect, useState } from 'react';
import CategoryHome from '../SharedSection/CategoryHome/CategoryHome';
import RightSlider from '../SharedSection/RightSlider/RightSlider';
import { Link, useLoaderData } from 'react-router-dom';
import moment from 'moment';

const CategoryNews = () => {
    
    const [loading, setLoading] = useState(true);
    const section = useLoaderData();
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://nishibarta-server.vercel.app/news/${section.link}`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item =>
                    item.status === "Accept" && item.deleteStatus === "None"
                );

                const sorted = filtered.sort((a, b) =>
                    new Date(b.date) - new Date(a.date)
                );
                setNews(sorted);
                setLoading(false);
            });
    }, [section.link])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[300px]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#4101d8]"></div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 px-3">
            <div className="lg:col-span-2">
                <div className="pb-6">
                    <div className="flex justify-between items-center text-[#D40000] text-3xl font-bold ">
                        <h2>{section.name} সংবাদ</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {
                        news.map((data) => (
                            <Link key={data._id} to={`/details/${data._id}`} className="p-3 grid grid-cols-1 lg:grid-cols-3 lg:gap-3 bg-[#fff] rounded-lg hover:bg-[#fff8f8]">
                                <div className="">
                                    <div>
                                        <div className="w-full ">
                                            <img className="w-full h-full object-cover rounded-lg" src={data.cover} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center col-span-2 mt-5 lg:mt-0">
                                    <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                        <p>{moment(data.date).locale('bn').format('D MMMM, YYYY')}</p>
                                    </div>
                                    <div className="text-[#111] font-bold p-2 text-xl">
                                        <h2 className="">{data.headline}</h2>
                                    </div>
                                    <div className="text-[#111] font-medium p-2 text-[12px]">
                                        <h2 className="">{data.details.split(" ").slice(0, 40).join(" ")}{data.details.split(" ").length > 100 && '...'}</h2>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="my-6 lg:my-0">
                <RightSlider></RightSlider>
            </div>
        </div>
    );
};

export default CategoryNews;