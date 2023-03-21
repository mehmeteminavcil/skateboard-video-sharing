import "./videoCard.scss";
import Video from "../video/Video";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const VideoCard = ({ videoSrc,authorName,authorImg,authorInfo,cardTime,isOnline,cardTitle }) => {
  return (
    <div className="videoCard">
      <div className="cardTime">{cardTime}</div>
      <div className="top">
        <Video videoSrc={videoSrc} />
        <div className="authorAvatar">
          <div className="authorImg">
            <img
              src={authorImg}
              alt="author"
            />

            <CheckRoundedIcon className="icon" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="authorName">
          {authorName}
          <div className={isOnline}></div>
        </div>
        <h1 className="cardTitle">
          {cardTitle}
        </h1>
        <span className="authorInfo">{authorInfo}</span>
      </div>
    </div>
  );
};

export default VideoCard;
