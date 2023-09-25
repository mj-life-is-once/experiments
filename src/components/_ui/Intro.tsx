"use client";
import { ReactNode, useMemo } from "react";
import c from "./Intro.module.scss";
import { orator } from "@/styles/fonts";
// import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";

interface IntroProps {
  title: ReactNode;
  description: ReactNode;
  backLink: { href: string; title: string };
  tags?: string[];
  className?: string;
  postInfo?: boolean;
  postedTime?: string;
}
const Intro = (props: IntroProps) => {
  const dateFormat = useMemo(() => {
    const date = new Date(props.postedTime ?? "2023-01-01");
    // console.log(props.postedTime);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }, [props.postedTime]);

  return (
    <section className={`${props.className ?? ""} ${c.intro} `}>
      <button className={`${c.button} ${orator.className}`}>
        <a href={props.backLink.href}>{props.backLink.title}</a>
      </button>
      <div className={c.title}>{props.title}</div>
      <div className={`${c.description}`}>{props.description}</div>
      {props.tags?.map((tag) => (
        <button className={`${c.tags} ${orator.className}`} key={tag}>
          {tag}
        </button>
      ))}
      {props.postInfo && (
        <div className={c.postInfo}>
          <div className={c.time}>
            <p className={orator.className}>
              posted at: <span>{dateFormat}</span>
            </p>
          </div>
          {/* <div className={c.share}>
            <IosShareOutlinedIcon sx={{ color: "#797979" }} onClick={()=>{

            }}/>
          </div> */}
        </div>
      )}
    </section>
  );
};

export default Intro;
