import "./heading.style.css";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return <h1 className="heading">{children}</h1>;
}
