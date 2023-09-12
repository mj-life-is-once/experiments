interface IFrameProps {
  src: string;
  title: string;
  className?: string;
}
const IFrame = (props: IFrameProps) => {
  return (
    <div
      className={`${props.className ?? ""}`}
      style={{ width: "100%", height: "100%" }}
    >
      <iframe
        src={props.src}
        title={props.title}
        width="100%"
        height="800px"
        style={{ border: "none", overflow: "scroll" }}
      />
    </div>
  );
};

export default IFrame;
