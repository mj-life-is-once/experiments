"use client";
import c from "./MainNav.module.scss";

const MainNav = () => {
  return (
    <div className={c.nav}>
      <button className={c.button}>
        <a href="http://minjoocho.com">Back to Home</a>
      </button>
      <h1 className={c.title}>
        Minjoo&#x27;s Experiment<span>(WIP)</span>
      </h1>
      <p className={c.description}>Description here</p>
    </div>
  );
};

export default MainNav;
