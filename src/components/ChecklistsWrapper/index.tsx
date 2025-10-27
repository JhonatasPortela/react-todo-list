import "./checklists-wrapper.style.css";
import { ReactNode } from "react";

interface ChecklistsWrapperProps {
  children: ReactNode;
}

export function ChecklistsWrapper({ children }: ChecklistsWrapperProps) {
  return <section className="wrapper">{children}</section>;
}
