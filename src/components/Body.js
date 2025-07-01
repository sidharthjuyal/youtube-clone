import {Outlet} from "react-router";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex overflow-x-hidden">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
