import { useEffect, useState } from "react";
import axios from "axios";
import { dataContext } from "./dataContext";

const UserContext = ({ children }) => {

    const serverUrl = "http://localhost:8000";

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const checkAuth = async () => {

            try {

                const res = await axios.get(
                    `${serverUrl}/api/me`,
                    {
                        withCredentials: true
                    }
                );

                setUserData(res.data.user);

            } catch {

                setUserData(null);

            } finally {

                setLoading(false);

            }
        };

        checkAuth();

    }, []);

    const value = {
        serverUrl,
        userData,
        setUserData,
        loading
    };

    return (
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    );
};

export default UserContext;