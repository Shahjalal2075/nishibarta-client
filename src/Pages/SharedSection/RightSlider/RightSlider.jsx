import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LatestNewsCard from "../../LatestNewsCard/LatestNewsCard";
import { AuthContext } from "../../../Providers/AuthProvider";

const RightSlider = () => {

    const { api } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [latestNews, setLatestNews] = useState([]);
    const [ojanaNews, setOjanaNews] = useState([]);
    const [chakriNews, setChakriNews] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [newsRes, ojanaRes, chakriRes] = await Promise.all([
                    fetch(`https://nishibarta-server.vercel.app/news`),
                    fetch(`https://nishibarta-server.vercel.app/news/ojana`),
                    fetch(`https://nishibarta-server.vercel.app/news/job`)
                ]);

                const [news, ojana, chakri] = await Promise.all([
                    newsRes.json(),
                    ojanaRes.json(),
                    chakriRes.json()
                ]);

                const filterAndSort = (items, limit) =>
                    items
                        .filter(item => item.status === "Accept" && item.deleteStatus === "None")
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .slice(0, limit);

                setLatestNews(filterAndSort(news, 8));
                setOjanaNews(filterAndSort(ojana, 6));
                setChakriNews(filterAndSort(chakri, 6));
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setLoading(false); // ✅ Ensure loading is turned off
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[300px]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#4101d8]"></div>
            </div>
        );
    }
    return (
        <div className="ml-6">
            {/* Ads */}
            {/* <div className="bg-[#F8F8F8] flex justify-center items-center p-2">
                <div className="w-full h-[250px] overflow-hidden rounded">
                    <img
                        src="https://i.ibb.co/YPNL48R/ad-300x250.jpg"
                        alt="Advertisement"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div> */}


            {/* Latest News */}
            <div className="bg-[#F8F8F8] my-6 p-4">
                <div className="bg-[#DA0000] text-[#fff] font-medium text-lg py-1 ">
                    <h2 className="text-center">সর্বশেষ</h2>
                </div>
                <div className="mt-3">

                    {
                        latestNews.map(news => <LatestNewsCard
                            key={news._id}
                            news={news}
                        ></LatestNewsCard>)
                    }

                </div>
            </div>

            {/* Ads */}
            {/* <div className="bg-[#F8F8F8] flex justify-center items-center p-2">
                <div className="w-full h-[250px] overflow-hidden rounded">
                    <img
                        src="https://i.ibb.co/YPNL48R/ad-300x250.jpg"
                        alt="Advertisement"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div> */}

            {/* Facebook page */}
            <div className="bg-[#F8F8F8] flex justify-center items-center my-10">
                <div className="p-4">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnishibarta%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="340"
                        height="500"
                        style={{ border: 'none', overflow: 'hidden' }}
                        allow="encrypted-media"
                    ></iframe>
                </div>
            </div>

            {/* Ads */}
            {/* <div className="bg-[#F8F8F8] flex justify-center items-center p-2">
                <div className="w-full h-[250px] overflow-hidden rounded">
                    <img
                        src="https://i.ibb.co/YPNL48R/ad-300x250.jpg"
                        alt="Advertisement"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div> */}

            {/* Chakrir News */}
            <div className="bg-[#F8F8F8] my-6 p-4">
                <div className="bg-[#DA0000] text-[#fff] font-medium text-lg py-1 ">
                    <h2 className="text-center">চাকরির সর্বশেষ খবর</h2>
                </div>
                <div className="mt-3">
                    {
                        chakriNews.map(news => <LatestNewsCard
                            key={news._id}
                            news={news}
                        ></LatestNewsCard>)
                    }
                </div>
            </div>

            {/* Ads */}
            {/* <div className="bg-[#F8F8F8] flex justify-center items-center p-2">
                <div className="w-full h-[250px] overflow-hidden rounded">
                    <img
                        src="https://i.ibb.co/YPNL48R/ad-300x250.jpg"
                        alt="Advertisement"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div> */}

            {/* Chakrir News */}
            <div className="bg-[#F8F8F8] my-6 p-4">
                <div className="bg-[#DA0000] text-[#fff] font-medium text-lg py-1 ">
                    <h2 className="text-center">অজানা কিছু কথা</h2>
                </div>
                <div className="mt-3">
                    {
                        ojanaNews.map(news => <LatestNewsCard
                            key={news._id}
                            news={news}
                        ></LatestNewsCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default RightSlider;