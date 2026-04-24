import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import NewsCardHome from "../NewsCardHome/NewsCardHome";
import { AuthContext } from "../../../Providers/AuthProvider";

const CategoryCard = ({ section }) => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!section?.link) return;

        const cacheKey = `news_${section.link}`;
        const cachedNews = localStorage.getItem(cacheKey);

        // 👉 1. Show cached data instantly (if exists)
        if (cachedNews) {
            setNews(JSON.parse(cachedNews));
            setLoading(false);
        } else {
            setLoading(true);
        }

        // 👉 2. Fetch fresh data
        fetch(`https://nishibarta-server.vercel.app/news/${section.link}`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item =>
                    item.status === "Accept" && item.deleteStatus === "None"
                );

                const sorted = filtered.sort((a, b) =>
                    new Date(b.date) - new Date(a.date)
                );

                const topData = sorted.slice(0, 2);

                // 👉 3. Update state
                setNews(topData);

                // 👉 4. Save cache (per section)
                localStorage.setItem(cacheKey, JSON.stringify(topData));

                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
        
    }, [section.link]);

    return (
        <div className={(section.name === "") && "md:col-span-2"}>
            {
                (section.name !== "")
                    ?
                    <div className="">
                        <hr className="border border-[#D40000] w-full my-3" />
                        <div className="flex justify-between items-center text-[#D40000] text-lg font-bold ">
                            <Link to={section.link}>{section.name}</Link>
                            <Link to={section.link}><FaLongArrowAltRight /></Link>
                        </div>
                        <div className="grid grid-cols-1 gap-4 my-3">

                            {
                                news.map(item =>
                                    <NewsCardHome
                                        key={item._id}
                                        item={item}
                                    ></NewsCardHome>
                                )
                            }
                            <hr className="border border-[#D40000] w-full my-3" />
                        </div>
                    </div>
                    :
                    <div className="w-full">
                        {/* <img className="w-full object-cover" src="https://i.ibb.co/vcztdnh/ad-970x90-2x.jpg" alt="Ads" /> */}
                    </div>
            }
        </div>
    );
};

export default CategoryCard;

CategoryCard.propTypes = {
    section: PropTypes.object,
}