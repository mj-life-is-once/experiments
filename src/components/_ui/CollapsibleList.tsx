import { ReactNode } from "react";

export const CollapsibleList = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col justify-start gap-5 w-full h-full mb-5 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export const CollapsibleItem = ({
  title,
  children,
  open,
  width,
}: {
  title: string;
  children: ReactNode;
  open?: boolean;
  width?: string;
}) => {
  return (
    <details
      className={`${
        width ?? "max-w-[80%]"
      }  max-h-fit bg-slate-900 text-neutral-300 px-5 pt-3 rounded-lg`}
    >
      <summary className={`text-xl font-bold mb-3 ${open && "open"}`}>
        <span className="pl-2">{title}</span>
      </summary>
      <div className="pb-3 text-md">{children}</div>
    </details>
  );
};
