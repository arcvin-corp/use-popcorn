import { ReactNode } from "react";

export default function NavBar({ children }: { children: ReactNode }) {
  return <nav className="nav-bar">{children}</nav>;
}
