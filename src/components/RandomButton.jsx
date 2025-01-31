import React, { useEffect } from "react";
import AudioPlayer from "./AudioPlayer.tsx";
import s1 from "../sound/chrt_clip.mp3";
// import s2 from './sound/dgbit.mp3';
import s3 from "../sound/orc_end.mp3";
import s4 from "../sound/orc_mid.mp3";
import s5 from "../sound/purr.mp3";
import s6 from "../sound/traffic.mp3";

import pound_2 from "../art/pound_2.jpg";
import trans_img from "../art/ep_art_bandname.jpg";

function RandomButton() {
  const audio = new Audio(s3);
  useEffect(() => {
    const hoverAudio = document.getElementById("hover");

    hoverAudio.addEventListener("mouseover", function () {
      audio.play();
    });
    hoverAudio.addEventListener("mouseout", function () {
      audio.pause();
      audio.currentTime = 0;
    });
  }, []);

  let toggle1Style = {
    top: "15%",
    left: "43%",
  };
  let toggle2Style = {
    bottom: "30%",
    right: "2%",
  };
  let toggle3Style = {
    top: "40%",
    left: "30%",
  };
  let toggle4Style = {
    top: "20%",
    left: "65%",
  };

  return (
    <div className="main">
      <div className="art" id="hover">
        <img src={pound_2} alt={"pound"} className="pound-logo" />
        <img src={trans_img} alt={"ep"} className="ep-logo" />
        <div className="title">lukewarm december 2021</div>
      </div>
      <div className="toggle-1" style={toggle1Style}>
        <AudioPlayer url={s1} />
      </div>
      <div className="toggle-2" style={toggle2Style}>
        <AudioPlayer url={s4} className="toggle-2" />
      </div>
      <div className="toggle-3" style={toggle3Style}>
        <AudioPlayer url={s5} />
      </div>
      <div className="toggle-4" style={toggle4Style}>
        <AudioPlayer url={s6} className="toggle-4" />
      </div>
    </div>
  );
}

export default RandomButton;
