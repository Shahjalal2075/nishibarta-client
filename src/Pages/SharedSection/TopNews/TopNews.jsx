import { useEffect, useState } from "react";
import TopNewsCard from "../TopNewsCard/TopNewsCard";

const TopNews = () => {
    const [topHeadNews, setTopHeadNews] = useState([]);
    const [topNews, setTopNews] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4); // Default for desktop

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setVisibleCount(3); // Tablet
            } else {
                setVisibleCount(4); // Desktop
            }
        };

        handleResize(); // Call on mount
        window.addEventListener('resize', handleResize); // Listen for resize

        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);

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

                setTopHeadNews(topHeadData.slice(0, 1));
                setTopNews(topNewsData); // Don't slice here, we'll slice in render
            });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {
                topHeadNews.map(news => (
                    <TopNewsCard key={news._id} news={news} />
                ))
            }

            {
                topNews.slice(0, visibleCount).map(news => (
                    <TopNewsCard key={news._id} news={news} />
                ))
            }
        </div>
    );
};

export default TopNews;
