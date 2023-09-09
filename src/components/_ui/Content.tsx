import c from "./Content.module.scss";
import { Content } from "@/type/types";

interface ContentProps {
  className?: string;
  contents: Content[];
}

const ContentBlock = (props: ContentProps) => {
  return (
    <div className={`${props.className ?? ""} ${c.block}`}>
      {props.contents?.map((content: Content) => {
        console.log(content);
        switch (content.type) {
          case "text":
            return <div className={c.text}>{content.content}</div>;
          default:
            return content.content;
        }
      })}
    </div>
  );
};

export default ContentBlock;
