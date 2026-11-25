import Link from "next/link";
import Icon from "../atoms/Icon";
import type { ReactNode } from "react";
import Logo from "../atoms/Logo";
import "./header.css";

export default function Header({ title, children, menu }: { title?: string; children?: ReactNode; menu?: boolean }) {
  return (
    <header className="header">
      <div className="header-top"><Logo /></div>
      {menu && (
        <details className="header-menu">
          <summary aria-label="Menu"><Icon name="menu" size={22} /></summary>
          <Link href="/">Select Your Plan</Link>
        </details>
      )}
      {title && <Link className="form-back" href="/miembros" aria-label="Back to members"><Icon name="back" size={27} /></Link>}
      {title && <h1>{title}</h1>}
      {children}
    </header>
  );
}
