import "./container.style.css";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <section className="container">{children}</section>;
}
