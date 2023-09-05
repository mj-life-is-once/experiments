"use client";
import c from "./MainNav.module.scss";
import { orator } from "@/styles/fonts";

const MainNav = () => {
  return (
    <div className={c.nav}>
      <button className={`${c.button} ${orator.className}`}>
        <a href="http://minjoocho.com">Back to Home</a>
      </button>
      <h1 className={c.title}>
        Minjoo&#x27;s Experiment<div className={c.wip}>(WIP)</div>
      </h1>
      <p className={c.description}>
        This is (going to be) showcasing Minjoo&#x27;s various technical
        experiments.
      </p>
    </div>
  );
};

export default MainNav;
