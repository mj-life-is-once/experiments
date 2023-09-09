import c from "./Content.module.scss";
import { Content } from "@/type/types";

interface ContentProps {
  className?: string;
  contents: Content[];
}

const ContentBlock = (props: ContentProps) => {
  return (
    <div className={`${props.className ?? ""} ${c.block}`}>
      {props.contents?.map((content: Content, index: number) => {
        console.log(content);
        switch (content.type) {
          case "text":
            return (
              <div key={index} className={c.text}>
                {content.content}
              </div>
            );
          default:
            return <div key={index}>{content.content}</div>;
        }
      })}
    </div>
  );
};

export default ContentBlock;
