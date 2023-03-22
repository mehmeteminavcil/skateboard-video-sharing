import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import VideoCard from "../../components/videCard/VideoCard";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import "./single.scss";
import { useParams } from "react-router-dom";
import { videoData } from "../../data";
import { useEffect, useState } from "react";
import Video from "../../components/video/Video";
import ReactPlayer from "react-player";
import Card from "../../components/card/Card";

const Single = () => {
  const { videoId } = useParams();

  const [video, setVideo] = useState([]);

  useEffect(() => {
    const getData = (id) => {
      setVideo(videoData.find((item) => item.id == id));
    };
    getData(videoId);
  });

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="mainContainer">
          <div className="left">
            <ReactPlayer controls url={video.videoSrc} />
            <div className="author">
              <div className="authorImg">
                <img src={video.authorImg} alt="" />

                <CheckRoundedIcon className="icon" />
              </div>
              <div className="authorDetail">
                <div className="authorName">{video.authorName}</div>
                <div className="authorInfo">{video.authorInfo}</div>
              </div>
            </div>
          </div>

          <div className="right">
            <h1>Messaages</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
