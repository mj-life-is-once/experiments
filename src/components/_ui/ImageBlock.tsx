import c from "./ImageBlock.module.scss";
import { ReactNode } from "react";

interface ImageProps {
  type: string;
  style?: any;
  className?: string;
  caption?: ReactNode;
  children: ReactNode;
}

const ImageBlock = (props: ImageProps) => {
  return (
    <div className={`${props.className ?? ""} ${c.block}`} style={props.style}>
      {props.type === "svg" && <div className={c.svg}>{props.children}</div>}
      {props.type == "img" && <div className={c.image}>{props.children}</div>}

      {props.caption && <div className={c.caption}>{props.caption}</div>}
    </div>
  );
};

export default ImageBlock;
