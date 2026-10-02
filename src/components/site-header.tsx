"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "./brand";

const links = [
  ["Services", "/services"],
  ["Tracking", "/tracking"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} data-active={pathname === href || undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="text-link hide-mobile" href="/login">
            Sign in
          </Link>
          <Link className="button button-small hide-mobile" href="/register">
            Create account
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/login" onClick={() => setOpen(false)}>Sign in</Link>
          <Link className="button" href="/register" onClick={() => setOpen(false)}>
            Create account
          </Link>
        </nav>
      )}
    </header>
  );
}
