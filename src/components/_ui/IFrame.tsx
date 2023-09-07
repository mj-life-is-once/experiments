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
      <iframe src={props.src} title={props.title} />
    </div>
  );
};
