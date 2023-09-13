import c from "./YoutubeEmbed.module.scss";

interface YoutubeProps {
  embedId: string;
}

const YoutubeEmbed = (props: YoutubeProps) => {
  return (
    <div className={c.videoResponsive}>
      <iframe
        src={`https://www.youtube.com/embed/${props.embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
