import { AuthContext } from '../../Providers/AuthProvider';
import TopNews from '../SharedSection/TopNews/TopNews';
import CategoryHome from '../SharedSection/CategoryHome/CategoryHome';
import RightSlider from '../SharedSection/RightSlider/RightSlider';
import { Helmet } from 'react-helmet';

const Home = () => {

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization",
        "name": "নিশি বার্তা",
        "url": "https://www.nishibarta.com",
        "logo": "https://i.ibb.co/jzHTFgY/logodark.png",
        "sameAs": [
            "https://www.facebook.com/nishibarta",
            "https://www.youtube.com/@NishiBarta"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <Helmet>
                {/* Title Tag */}
                <title>নিশিবার্তা</title>

                {/* Meta Description — AdSense এর জন্য গুরুত্বপূর্ণ */}
                <meta
                    name="description"
                    content="নিশিবার্তা"
                />

            </Helmet>
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
        </>
    );
};

export default Home;