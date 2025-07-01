import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import Comments from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex flex-col p-5">
      <div>
        <iframe
          width="1000"
          height="550"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
};

export default WatchPage;
