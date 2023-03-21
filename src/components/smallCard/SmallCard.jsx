import "./smallcard.scss";
import Video from "../video/Video";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const SmallCard = ({ videoSrc }) => {
  return (
    <div className="smallCard">
      <div className="cardTime">7 min</div>
      <div className="top">
        <Video videoSrc={videoSrc} />
        <div className="authorAvatar">
          <div className="authorImg">
            <img
              src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />

            <CheckRoundedIcon className="icon" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="authorName">
          Andy William
          <div className="onlineStatus"></div>
        </div>
        <h1 className="cardTitle">
          Basics show to ride your skateboard comforthly
        </h1>
        <span className="authorInfo">53K views · 2 weeks ago</span>
      </div>
    </div>
  );
};

export default SmallCard;
