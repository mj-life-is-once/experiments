import ReactAudioPlayer from "react-audio-player";

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
        <ReactAudioPlayer className={c.player} src={props.src} controls />
      )}
    </div>
  );
};

export default MediaPlayer;
