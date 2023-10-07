import c from "./Footer.module.scss";
import Image from "next/image";
import { orator } from "@/styles/fonts";

export const Footer = () => {
  return (
    <footer className={`${c.footer} ${orator.className}`}>
      <div className={c.imageAndLinks}>
        <div className={c.personalIcon}>
          <Image
            src="/img/footer/minjoo_profile.png"
            alt="Minjoo Cho Profile"
            width={150}
            height={300}
          />
        </div>
        <div className={c.contacts}>
          <a href="https://www.linkedin.com/in/minjoo-cho-a1b2374a/">
            LinkedIn
          </a>
          <a href="https://github.com/mj-life-is-once">Github</a>
          <a href="mailto:minjoolisa.cho@gmail.com">Email</a>
        </div>
      </div>
      <div className={c.credit}>
        <p>Website designed and assembled by Minjoo with lots of ☕️</p>
      </div>
    </footer>
  );
};
