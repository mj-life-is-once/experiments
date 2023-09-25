import { Button } from "./Button";
interface IFrameProps {
  src: string;
  title: string;
  className?: string;
}
const IFrame = (props: IFrameProps) => {
  return (
    <div className={`relative bg-yellow-300 ${props.className ?? ""}`}>
      <div className="absolute top-5 right-10">
        <Button
          className="bg-yellow-500 text-black font-extrabold border-1 drop-shadow-md"
          onClick={() => {
            window.open(props.src, "_parent");
          }}
        >
          Open In a New Tab
        </Button>
      </div>

      <iframe
        className="overflow-scroll overflow-y-auto overflow-x-hidden"
        src={props.src}
        title={props.title}
        width="100%"
        height="800px"
        allow="fullscreen"
        frameBorder={0}
      />
    </div>
  );
};

export default IFrame;
