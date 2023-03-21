import "./discover.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import data from "../../data";
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

        <div className="secondTitle">
          Most Watched
        </div>

        <div className="videoCards">

        <VideoCard videoSrc={"https://vod-progressive.akamaized.net/exp=1679400866~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4994%2F17%2F449972745%2F1977849318.mp4~hmac=dee60aff60517c84ac7cbfa3d88288645dccb20574284dd69c38b09e895308a3/vimeo-prod-skyfire-std-us/01/4994/17/449972745/1977849318.mp4"}/>
        <VideoCard videoSrc={"https://player.vimeo.com/external/361861493.sd.mp4?s=19d8275ca755d653042a87ef28b2f0b2eabf57d0&profile_id=139&oauth2_token_id=57447761"}/>
        </div>

        

      </div>
    </div>
  );
};

export default Discover;
