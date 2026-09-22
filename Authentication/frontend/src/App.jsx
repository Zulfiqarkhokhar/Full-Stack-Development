import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext } from "react";
import { dataContext } from "./context/dataContext";

const App = () => {

    const {
        userData,
        loading
    } = useContext(dataContext);

    if (loading) {

        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-xl">
                    Loading...
                </h1>
            </div>
        );
    }

    return (

        <Routes>

            <Route
                path="/"
                element={
                    userData
                        ? <Home />
                        : <Login />
                }
            />

            <Route
                path="/login"
                element={
                    userData
                        ? <Home />
                        : <Login />
                }
            />

            <Route
                path="/signup"
                element={
                    userData
                        ? <Home />
                        : <Signup />
                }
            />

        </Routes>
    );
};

export default App;