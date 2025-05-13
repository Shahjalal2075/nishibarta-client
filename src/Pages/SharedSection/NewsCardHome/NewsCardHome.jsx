import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsCardHome = ({ item }) => {
    return (
        <div className="">
            <div className="relative overflow-hidden rounded-md shadow group">
                <Link to={''}>
                    <img
                        src={item.cover}
                        alt="cover"
                        className="w-full h-full object-cover group-hover:scale-105 duration-300"
                    />
                </Link>

                <Link
                    to={''}
                    className="bg-[#1D1D1D] text-[#fff] px-3 py-1 text-xs font-medium absolute top-2 left-2 rounded"
                >
                    {item.categoryBn}
                </Link>

                <div className="absolute bottom-0 bg-[#11111190] w-full py-2">
                    <div className="flex gap-4 text-xs text-white font-bold px-2 items-center">
                        <h2>{item.journalist}</h2>
                        <p>১৫ ই জুন, ২০২২</p>
                    </div>
                    <div className="text-white font-bold p-2 text-sm leading-tight">
                        <Link to={''}>{item.headline}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCardHome;

NewsCardHome.propTypes = {
    item: PropTypes.object,
};
