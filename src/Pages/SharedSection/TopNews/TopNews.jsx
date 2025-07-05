import { useContext, useEffect, useState } from "react";
import TopNewsCard from "../TopNewsCard/TopNewsCard";
import { AuthContext } from "../../../Providers/AuthProvider";

const TopNews = () => {

    const { api } = useContext(AuthContext);
    const [topHeadNews, setTopHeadNews] = useState([]);
    const [topNews, setTopNews] = useState([]);
    useEffect(() => {
        fetch(`https://nishibarta-server.vercel.app/news`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item =>
                    item.status === "Accept" && item.deleteStatus === "None"
                );

                const sorted = filtered.sort((a, b) =>
                    new Date(b.date) - new Date(a.date)
                );

                const topHeadData = sorted.filter(item => item.isTopHead === true);
                const topNewsData = sorted.filter(item => item.isTopNews === true);
                const top1Data = topHeadData.slice(0, 1);
                const top4Data = topNewsData.slice(0, 4);
                setTopHeadNews(top1Data);
                setTopNews(top4Data);
            });
    }, [])

    return (
        <div className="grid grid-cols-4 gap-3">

            {
                topHeadNews.map(news => <TopNewsCard
                    key={news._id}
                    news={news}
                ></TopNewsCard>)
            }

            {
                topNews.map(news => <TopNewsCard
                    key={news._id}
                    news={news}
                ></TopNewsCard>)
            }
        </div>
    );
};

export default TopNews;