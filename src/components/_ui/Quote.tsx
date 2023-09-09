import { ReactNode } from "react";
import c from "./Quote.module.scss";

interface QuoteProps {
  className?: string;
  children: ReactNode;
}

const Quote = (props: QuoteProps) => {
  return (
    <div className={`${props.className ?? ""} ${c.quote}`}>
      {props.children}
    </div>
  );
};

export default Quote;
