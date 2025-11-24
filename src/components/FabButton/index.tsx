import "./fab-button.style.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface FabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function FabButton({ children, ...rest }: FabButtonProps) {
  return (
    <button className="fab" {...rest}>
            {children} 
    </button>
  );
}
