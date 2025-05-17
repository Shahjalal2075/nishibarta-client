import { Link } from "react-router-dom";

const LatestNewsCard = ({ news }) => {
    return (
        <div className="">
            <hr className="border border-[#969595] w-full" />
            <div className="py-3 grid grid-cols-3 gap-3">
                <div className="">
                    <Link to={''}>
                        <div className="w-full h-[86px]">
                            <img className="w-full h-full object-cover" src={news.cover} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col justify-center col-span-2">
                    <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                        <h2>{news.journalist}</h2>
                        <p>১৫ ই জুন, ২০২২</p>
                    </div>
                    <div className="text-[#111] font-bold p-2 text-[13px]">
                        <Link>{news.headline}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNewsCard;