import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex overflow-x-hidden">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
