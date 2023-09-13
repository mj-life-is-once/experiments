import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import c from "./MediaPlayer.module.scss";

interface MediaProps {
  type: string;
  src: string;
  label?: string;
}

const MediaPlayer = (props: MediaProps) => {
  return (
    <div className={c.container}>
      {props.label && <h4>{props.label}</h4>}
      {props.type === "audio" && (
        <AudioPlayer
          className={c.player}
          src={props.src}
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      )}
    </div>
  );
};

export default MediaPlayer;
