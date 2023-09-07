"use client";
import { ReactNode } from "react";
import c from "./Intro.module.scss";
import { orator } from "@/styles/fonts";

const Intro = ({
  title,
  description,
  backLink,
}: {
  title: ReactNode;
  description: string;
  backLink: { href: string; title: string };
}) => {
  return (
    <div className={c.nav}>
      <button className={`${c.button} ${orator.className}`}>
        <a href={backLink.href}>{backLink.title}</a>
        {/* <a href="http://minjoocho.com">Back to Home</a> */}
      </button>
      <div className={c.title}>{title}</div>
      <p className={c.description}>{description}</p>
    </div>
  );
};

export default Intro;
