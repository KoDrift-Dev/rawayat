"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, WA_GENERAL } from "@/lib/site";
import { logoPhoto } from "@/lib/photos/logo";
import { Btn } from "@/components/ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <>
      <header className="nav-shell">
        <div className="wrap nav-inner">
          <Link href="/" className="brand" aria-label="Rawayat Marquee and Marriage Hall — Home">
            <Image src={logoPhoto} alt="Rawayat logo" width={44} height={43} className="h-10 w-auto shrink-0" />
            <span className="brand-name">
              Rawayat <span>Marquee</span>
            </span>
          </Link>
          <div className="nav-center">
            <nav className="nav-pill" aria-label="Primary">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <span className="hidden md:inline">
            <Btn href={WA_GENERAL} external variant="primary" size="sm">
              WhatsApp Us
            </Btn>
          </span>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* mobile side drawer */}
      <div className={`nav-drawer-veil${open ? " open" : ""}`} onClick={close} aria-hidden={!open} />
      <aside className={`nav-drawer${open ? " open" : ""}`} role="dialog" aria-label="Site menu">
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, borderBottom: "1px solid rgba(198,161,91,.25)" }}
        >
          <span className="brand-name" style={{ fontSize: 18 }}>
            Rawayat <span>Marquee</span>
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            style={{
              border: "1px solid var(--color-cream-300)",
              borderRadius: 10,
              padding: "6px 12px",
              fontSize: 18,
              color: "var(--color-pine-700)",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4, padding: 16, overflowY: "auto" }} aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={`nav-link${pathname === item.href ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ marginTop: 12 }}>
            <Btn href={WA_GENERAL} external variant="primary" block onClick={close}>
              WhatsApp Us
            </Btn>
          </div>
        </nav>
      </aside>
    </>
  );
}
