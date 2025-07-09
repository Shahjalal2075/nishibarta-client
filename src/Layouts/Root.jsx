import { Outlet } from "react-router-dom";
import Header from "../Pages/SharedSection/Header/Header";
import Footer from "../Pages/SharedSection/Footer/Footer";

const Root = () => {

    return (
        <div className="bg-gradient-to-r from-[#d0d1e7] to-[#c9cbf0] min-h-[100vh] overflow-hidden">
            <div className="">
                <Header></Header>
            </div>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;