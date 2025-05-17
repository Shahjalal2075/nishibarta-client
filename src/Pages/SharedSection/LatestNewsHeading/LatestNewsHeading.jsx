import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const LatestNewsHeading = () => {

    const { api } = useContext(AuthContext);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`${api}/news`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item =>
                    item.status === "Accept" && item.deleteStatus === "None"
                );

                const sorted = filtered.sort((a, b) =>
                    new Date(b.date) - new Date(a.date)
                );

                const top11Data = sorted.slice(0, 11);
                setNews(top11Data);
            });
    }, [api]);


    return (
        <div>
            <div className="flex items-center">
                <h2 className="bg-[#1D1D1D] text-[#fff] px-8 py-3 text-base font-medium">সর্বশেষ</h2>
                <marquee className="bg-[#FAFAFA] text-[#999] text-base px-8 py-3" direction="left">
                    {
                        news && news.length > 0 ?
                            news.map((j) => (
                                <Link className="mr-10" key={j._id}>{j.headline}</Link>
                            ))
                            :
                            <Link className="mr-10">No News.</Link>
                    }
                </marquee>
            </div>
        </div>
    );
};

export default LatestNewsHeading;