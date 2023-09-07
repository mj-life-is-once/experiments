import c from "./YoutubeEmbed.module.scss";

interface YoutubeProps {
  embedId: string;
}

const YoutubeEmbed = (props: YoutubeProps) => {
  return (
    <div className={c.videoResponsive}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${props.embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
