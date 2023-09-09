import { ReactNode } from "react";
import c from "./TextBlock.module.scss";

interface TextProps {
  className?: string;
  children: ReactNode;
}

const TextBlock = (props: TextProps) => {
  return (
    <div className={`${props.className ?? ""} ${c.text}`}>{props.children}</div>
  );
};

export default TextBlock;
