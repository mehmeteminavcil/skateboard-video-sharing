import "./discover.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import { data, videoData } from "../../data";
import VideoCard from "../../components/videCard/VideoCard";
const Discover = () => {
  return (
    <div className="discover">
      <Sidebar />
      <div className="discoverContainer">
        <Navbar />
        <h1 className="title">Discover</h1>

        <div className="cards">
          {data.map((card) => (
            <Card
              cardClass={card.class}
              key={card.id}
              title={card.title}
              authorImg={card.authorImg}
              authorName={card.authorName}
              authorInfo={card.authorInfo}
              bgImg={card.bgImg}
              time={card.time}
            />
          ))}
        </div>

        <div className="secondTitle">Most Watched</div>

        <div className="videoCards">
          {videoData.map((video) => (
            <VideoCard 
            cardTitle={video.cardTitle}
            videoSrc={video.videoSrc}
            authorName={video.authorName}
            authorImg={video.authorImg}
            authorInfo={video.authorInfo}
            cardTime={video.cardTime}
            isOnline={video.isOnline ? "online" : "offline" }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;

