import { useEffect, useState } from "react";
import {YOUTUBE_API} from "../utils/constants";
import VideoCard from "./Videocard";
import { Link } from "react-router";

const VideosContainer = () => {
  const [ videos, setVideos ] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API + process.env.GOOGLE_API_KEY);
    const json = await data.json();
    setVideos(json?.items);
  };

  return <div className="flex flex-wrap justify-center">
    {
      videos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}><VideoCard info={video} /></Link>
      ))
    }
  </div>;
};

export default VideosContainer;
