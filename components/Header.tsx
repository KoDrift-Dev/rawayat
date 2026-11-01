"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, WA_GENERAL } from "@/lib/site";
import { logoPhoto } from "@/lib/photos/logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkCls = (href: string) =>
    `rounded-lg px-3.5 py-2 text-[0.95rem] font-semibold ${
      pathname === href ? "bg-green-soft text-green" : "text-ink hover:bg-green-soft hover:text-green"
    }`;

  const mobileLinkCls = (href: string) =>
    `block rounded-xl px-4 py-3 font-semibold ${
      pathname === href ? "bg-green-soft text-green" : "text-ink hover:bg-green-soft hover:text-green"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-ivory/95">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:gap-4 sm:px-5 sm:py-3.5">
          <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="Rawayat Marquee and Marriage Hall — Home">
            <Image src={logoPhoto} alt="Rawayat logo" width={48} height={47} className="h-10 w-auto shrink-0 sm:h-12" />
            <span className="font-serif text-xl leading-none font-bold text-green sm:text-2xl">
              Rawayat
              <small className="mt-0.5 block font-sans text-[0.6rem] font-bold tracking-[0.16em] text-gold-dark uppercase sm:text-[0.65rem]">
                Marquee &amp; Marriage Hall
              </small>
            </span>
          </Link>

          <button
            type="button"
            className="ml-auto rounded-lg border border-line px-3 py-2 text-xl text-green md:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-1.5 md:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={linkCls(item.href)}>
                {item.label}
              </Link>
            ))}
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1f9d55] px-4 py-2 text-sm font-bold text-white hover:bg-[#178344]"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile side drawer — slides over the screen with a dimmed backdrop */}
      <div className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute top-0 right-0 flex h-full w-72 max-w-[85vw] flex-col bg-ivory shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-label="Site menu"
        >
          <div className="flex items-center justify-between border-b border-line p-4">
            <span className="font-serif text-xl font-bold text-green">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-lg border border-line px-3 py-1.5 text-lg text-green"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={mobileLinkCls(item.href)}>
                {item.label}
              </Link>
            ))}
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-[#1f9d55] px-4 py-3 text-center font-bold text-white hover:bg-[#178344]"
            >
              WhatsApp Us
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
}
