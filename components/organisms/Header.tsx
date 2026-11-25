import type { ReactNode } from "react";
import Logo from "../atoms/Logo";
import "./header.css";

export default function Header({ title, children }: { title?: string; children?: ReactNode }) {
  return (
    <header className="header">
      <div className="header-top"><Logo /></div>
      {title && <h1>{title}</h1>}
      {children}
    </header>
  );
}
