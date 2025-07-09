import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import TopNews from '../SharedSection/TopNews/TopNews';
import CategoryHome from '../SharedSection/CategoryHome/CategoryHome';
import RightSlider from '../SharedSection/RightSlider/RightSlider';

const Home = () => {

    const [loading, setLoading] = useState(false);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[300px]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#4101d8]"></div>
            </div>
        );
    }

    return (
        <div className="px-3" >
            <div>
                <TopNews></TopNews>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
                <div className="lg:col-span-2">
                    <CategoryHome></CategoryHome>
                </div>
                
                <div className="lg:my-6">
                    <RightSlider></RightSlider>
                </div>
            </div>
        </div>
    );
};

export default Home;