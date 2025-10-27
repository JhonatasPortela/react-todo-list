import "./header.style.css";
import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return <header className="header">{children}</header>;
}
