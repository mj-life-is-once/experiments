"use client";
import { ReactNode } from "react";
import c from "./Intro.module.scss";
import { orator } from "@/styles/fonts";

interface IntroProps {
  title: ReactNode;
  description: string;
  backLink: { href: string; title: string };
  tags?: string[];
}
const Intro = (props: IntroProps) => {
  return (
    <div className={c.nav}>
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
    </div>
  );
};

export default Intro;
