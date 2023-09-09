"use client";
import { ReactNode } from "react";
import c from "./Intro.module.scss";
import { orator } from "@/styles/fonts";

interface IntroProps {
  title: ReactNode;
  description: ReactNode;
  backLink: { href: string; title: string };
  tags?: string[];
  className?: string;
}
const Intro = (props: IntroProps) => {
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
    </section>
  );
};

export default Intro;
