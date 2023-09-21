interface IFrameProps {
  src: string;
  title: string;
  className?: string;
}
const IFrame = (props: IFrameProps) => {
  return (
    <div className={`w-full h-full ${props.className ?? ""}`}>
      <iframe
        className="border-0 overflow-scroll block w-full overflow-y-auto overflow-x-hidden"
        src={props.src}
        title={props.title}
        width="100%"
        height="800px"
        allow="fullscreen"
      />
    </div>
  );
};

export default IFrame;
