import { NavLink } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { Link } from "react-router-dom";


const Header = () => {
    // const navigate

    return (
        <div className="flex w-full sticky h-[80px] py-4 px-20 justify-between items-center border-b-2">
            <Link className="flex italic font-semibold text-purple-500 mr-24 items-center cursor-pointer" to="/">
                <GiSelfLove 
                    className="text-5xl"
                />
                <p className="text-xl">Happy Life</p>
            </Link>
            <ul className="flex flex-1 ml-16 items-center font-semibold space-x-12 ">
                    <li><NavLink className={({ isActive }) => isActive ? "text-purple-500" : ""} to="/"> TRANG CHỦ </NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "text-purple-500" : ""} to="/workshops"> WORKSHOPS </NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "text-purple-500" : ""} to="/camping"> CAMPING </NavLink></li>
            </ul>
        </div>
    );
}

export default Header;