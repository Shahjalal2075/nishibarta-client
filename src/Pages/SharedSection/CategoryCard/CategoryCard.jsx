import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import NewsCardHome from "../NewsCardHome/NewsCardHome";
import { AuthContext } from "../../../Providers/AuthProvider";

const CategoryCard = ({ section }) => {

    const { api } = useContext(AuthContext);
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
                const top3Data = sorted.slice(0, 2);
                setNews(top3Data);
            });
    }, [section.link])

    return (
        <div className={(section.name === "") && "col-span-2"}>
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