import "./video.scss";
import HoverVideoPlayer from "react-hover-video-player";

const Video = ({ videoSrc }) => {
  return (
    <HoverVideoPlayer
      className="videoContainer"
      videoSrc={videoSrc}
      videoClassName="player-video"
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
};

export default Video;
