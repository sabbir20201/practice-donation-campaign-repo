import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (

        <div className="flex justify-between">
            <div>
                <img src="" alt="" />
            </div>
            <nav>
                <ul className="flex gap-4">

                <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                    ? "text-white bg-slate-950 px-3 py-2 border-2"
                                    : ""
                        }
                    >
                        home
                    </NavLink>


                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                    ? "text-white bg-slate-950 px-3 py-2 border-2"
                                    : ""
                        }
                    >
                        donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                    ? "text-white bg-slate-950 px-3 py-2 border-2"
                                    : ""
                        }
                    >
                        statistics
                    </NavLink>


              
                </ul>
            </nav>
        </div >


    );
};

export default Navbar;