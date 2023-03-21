import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Video from "../../components/video/Video";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <div className="left">
          <Video videoSrc="https://joy1.videvo.net/videvo_files/video/free/2015-08/large_watermarked/Slowmotion_closeup_of_skateboard_preview.mp4" />

          <div className="right">messages container</div>
        </div>
      </div>
    </div>
  );
};

export default Single;
