import { ReactNode } from "react";
import "./todo-list.style.css";

interface ToDoListProps {
  children: ReactNode;
}

export function ToDoList({ children }: ToDoListProps) {
  return <ul className="todo-list">{children}</ul>;
}
