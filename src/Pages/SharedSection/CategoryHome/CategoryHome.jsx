import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { AuthContext } from "../../../Providers/AuthProvider";

const CategoryHome = () => {

    const [sectionList, setSectionList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cachedSections = localStorage.getItem("sectionList");

        // 👉 1. Check cache first
        if (cachedSections) {
            const parsed = JSON.parse(cachedSections);
            setSectionList(parsed);
            setLoading(false); // instant show
        }

        // 👉 2. Fetch fresh data
        fetch(`https://nishibarta-server.vercel.app/menu`)
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => a.sl - b.sl);

                // 👉 3. Update state
                setSectionList(sortedData);

                // 👉 4. Save to localStorage
                localStorage.setItem("sectionList", JSON.stringify(sortedData));

                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
        
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {
                sectionList.map(section =>
                    <CategoryCard
                        key={section._id}
                        section={section}
                    ></CategoryCard>)
            }

        </div>
    );
};

export default CategoryHome;