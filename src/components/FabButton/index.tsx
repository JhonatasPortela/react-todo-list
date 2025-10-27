import "./fab-button.style.css";
import { ReactNode } from "react"; // 👈 1. Importamos o tipo ReactNode

interface FabButtonProps {
  children: ReactNode;
}

export function FabButton({ children }: FabButtonProps) {
  return <button className="fab">{children}</button>;
}
