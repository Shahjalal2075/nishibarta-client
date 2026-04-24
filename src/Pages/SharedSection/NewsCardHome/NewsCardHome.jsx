import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import moment from "moment";
import 'moment/locale/bn';

const NewsCardHome = ({ item }) => {

    const MONTHS = ["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"];
const BN_DIGITS = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];

function toBnNum(n) {
  return String(n).split("").map(c => BN_DIGITS[+c] ?? c).join("");
}

function getSuffix(d) {
  if (d === 1 || d === 21 || d === 31) return " লা";
  if (d === 2 || d === 22 || d === 3 || d === 23) return " রা";
  return " ই";
}

function toBanglaDate(iso) {
  const dt = new Date(iso);
  const d = dt.getDate(), m = dt.getMonth(), y = dt.getFullYear();
  return toBnNum(d) + getSuffix(d) + " " + MONTHS[m] + ", " + toBnNum(y);
}

    return (
        <div className="">
            <div className="relative overflow-hidden rounded-md shadow group">
                <Link to={`/details/${item._id}`}>
                    <div className=" h-[286px]">
                        <img
                            src={item.cover}
                            alt="cover"
                            className="w-full h-full object-cover group-hover:scale-105 duration-300"
                        />
                    </div>
                </Link>

                <Link
                    to={`/${item.category}`}
                    className="bg-[#1D1D1D] text-[#fff] px-3 py-1 text-xs font-medium absolute top-2 left-2 rounded"
                >
                    {item.categoryBn}
                </Link>

                <div className="absolute bottom-0 bg-[#11111190] w-full py-2">
                    <div className="flex gap-4 text-xs text-white font-bold px-2 items-center">
                        <h2>নিশি বার্তা</h2>
                        <p>{toBanglaDate(item.date)}</p>
                    </div>
                    <div className="text-white font-bold p-2 text-sm leading-tight hover:text-[#fa7676]">
                        <Link to={`/details/${item._id}`}>{item.headline}</Link>
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
