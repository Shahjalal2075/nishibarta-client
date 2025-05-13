import { useEffect, useState } from "react";
import TopNewsCard from "../TopNewsCard/TopNewsCard";

const TopNews = () => {

    const [topHeadNews, setTopHeadNews] = useState([]);
    const [topNews, setTopNews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/news`)
            .then(res => res.json())
            .then(data => {
                const topHeadData = data.filter(item => item.isTopHead === true);
                const topNewsData = data.filter(item => item.isTopNews === true);
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