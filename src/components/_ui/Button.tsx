import { ReactNode } from "react";
import { MouseEventHandler } from "react";
import { orator } from "@/styles/fonts";

export const Button = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className={`${orator.className} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
