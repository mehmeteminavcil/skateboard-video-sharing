import "./card.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const Card = ({ cardClass,title, authorImg, authorName, authorInfo, time, bgImg }) => {
  return (
    <div className={cardClass}>
      <h1 className="cardTitle">{title}</h1>
      <div className="author">
        <div className="authorImg">
          <img src={authorImg} alt="" />

          <CheckRoundedIcon className="icon" />
        </div>
        <div className="authorDetail">
          <div className="authorName">{authorName}</div>
          <div className="authorInfo">{authorInfo}</div>
        </div>
      </div>
      <div className="cardTime">{time}</div>
      <img className="cardBgImg" src={bgImg} alt="" />
    </div>
  );
};

export default Card;
