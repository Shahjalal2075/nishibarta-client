import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const api = "http://localhost:5000";

    const internalData = {
        headerAds: "https://i.ibb.co/LY8TWzz/ad-728x90.jpg",
        logoDark:"https://i.ibb.co/jzHTFgY/logodark.png",
        temperature: 25,
        facebook: "https://facebook.com",
        twitter: "https://facebook.com",
        youtube: "https://facebook.com",
        google: "https://facebook.com",
    }

    useEffect(() => {
        setUser({ name: "Shahjalal" });
        setLoading(false);
    }, []);

    const authInfo = { user, loading, api,internalData }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;