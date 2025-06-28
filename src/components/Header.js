import { useDispatch } from "react-redux";
import {
  HAMBURGER_URL,
  USER_ICON,
  YOUTUBE__LOGO_URL,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
   const dispatch = useDispatch();
   const handleMenuClick = () => {
      dispatch(toggleMenu());
   }
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex items-center col-span-1">
        <img onClick={handleMenuClick} className="h-10 hover:cursor-pointer" alt="Menu" src={HAMBURGER_URL} />
        <img className="h-14 mx-2" alt="Logo" src={YOUTUBE__LOGO_URL} />
      </div>
      <div className="col-span-10 flex items-center justify-center">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full px-5 py-1 text-sm"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full px-5 py-1 text-sm hover:cursor-pointer bg-gray-100 hover:bg-black hover:text-white hover:border-black">
          🔍︎
        </button>
      </div>
      <div className="col-span-1 flex justify-end items-center">
        <img className="h-8" alt="User Avatar" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
