import c from "./ImageBlock.module.scss";
import { ReactNode } from "react";

interface ImageProps {
  className?: string;
  caption?: ReactNode;
  children: ReactNode;
}

const ImageBlock = (props: ImageProps) => {
  return (
    <div className={`${props.className ?? ""} ${c.block}`}>
      <div className={c.images}>{props.children}</div>
      {props.caption && <div className={c.caption}>{props.caption}</div>}
    </div>
  );
};

export default ImageBlock;
