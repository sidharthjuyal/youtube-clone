import formatCount from "../utils/formatCount";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
      <div className="p-2 m-2 w-72 shadow-2xl rounded-lg cursor-pointer">
        <img
          className="rounded-lg"
          alt="Video Thumbnail"
          src={thumbnails.medium.url}
        />
        <ul>
          <li className="font-bold py-2 truncate"><div title={title} className="truncate">{title}</div></li>
          <li>{channelTitle}</li>
          <li>{formatCount(statistics.viewCount)} views</li>
        </ul>
      </div>
  );
};

export default VideoCard;
