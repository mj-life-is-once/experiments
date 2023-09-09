import c from "./ImageBlock.module.scss";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  caption?: string;
}

const ImageBlock = (props: ImageProps) => {
  return (
    <div className={`${props.className ?? ""} ${c.block}`}>
      <Image src={props.src} alt={props.alt ?? ""} />
      {props.caption && <p className={c.caption}>{props.caption}</p>}
    </div>
  );
};

export default ImageBlock;
