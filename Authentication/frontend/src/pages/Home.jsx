import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const {
        userData,
        setUserData,
        serverUrl
    } = useContext(dataContext);

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {

            await axios.post(
                `${serverUrl}/api/logout`,
                {},
                {
                    withCredentials: true
                }
            );

            setUserData(null);

            navigate("/login");

        } catch (error) {

            console.log(
                "Logout Error:",
                error.response?.data?.message
            );
        }
    };

    return (

        <div className="min-h-screen bg-gray-100">

            <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">

                <h1 className="text-xl font-bold">
                    My Auth App
                </h1>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
                >
                    Logout
                </button>

            </nav>

            <main className="flex flex-col items-center justify-center min-h-[80vh]">

                {userData?.profileImage && (

                    <img
                        src={userData.profileImage}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover mb-5"
                    />

                )}

                <h2 className="text-3xl font-bold">

                    Welcome {userData?.firstName}!

                </h2>

                <p className="text-gray-600 mt-2">
                    You are successfully logged in.
                </p>

            </main>

        </div>
    );
};

export default Home;