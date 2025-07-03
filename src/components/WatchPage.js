import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import Scroll from "./Scroll";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  const videoData = true;
  return (
    <div className=" flex  flex-col   justify-start  w-full   p-4  gap-2">
      <div className="flex flex-col md:flex-row w-full gap-1 border  ">
        <div className="w-full">
          <Scroll />
          {!videoData ? (
            <div className="w-full  h-full animate-ping bg-grap-400"></div>
          ) : (
            <div className="flex flex-col w-full">
              <iframe
                className="w-full  h-[200px]  md:h-screen"
                src={`https://www.youtube.com/embed/${searchParams.get(
                  "v"
                )}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="w-full py-2 text-xl border-t  text-gray-600 font-bold">
                {videoData?.snippet?.title}
              </div>
            </div>
          )}
        </div>
        <LiveChat />
      </div>

      <div className=" w-full ">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
