"use client";
import { usePathname } from "next/navigation";

export default function Navmenu() {
  const pathname = usePathname();
  const menu = [
    { href: "/", icon: "lnr-home", label: "Home" },
    { href: "/about", icon: "lnr-user", label: "About Me" },
    { href: "/resume", icon: "lnr-license", label: "Resume" },
    { href: "/portfolio", icon: "lnr-briefcase", label: "Portfolio" },
    { href: "/blog", icon: "lnr-book", label: "Blog" },
    { href: "/contact", icon: "lnr-envelope", label: "Contact" },
  ];
  return (
    <nav className="nav-menu">
      <ul>
        {menu.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={`pt-link ${pathname === item.href ? "active" : ""}`}>
              <span className="nav-menu-icon">
                <i className={`lnr ${item.icon}`}></i>
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
