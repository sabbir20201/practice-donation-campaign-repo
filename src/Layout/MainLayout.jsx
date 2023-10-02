import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h1>main layout</h1>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;