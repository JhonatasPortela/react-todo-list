import { ReactNode } from "react";
import "./sub-heading.style.css";

interface SubHeadingProps {
  children: ReactNode;
}

export function SubHeading({ children }: SubHeadingProps) {
  return <h2 className="subheading">{children}</h2>;
}
