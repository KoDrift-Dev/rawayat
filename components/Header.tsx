"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LOCATION, NAV, PHONE_DISPLAY, PHONE_TEL, WA_GENERAL } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="bg-green-dark text-[#e9e2cf] text-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-2">
          <span>{LOCATION}</span>
          <span>
            Call:{" "}
            <a href={PHONE_TEL} className="font-semibold text-white hover:underline">
              {PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-ivory/95">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3.5">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Rawayat Marquee and Marriage Hall — Home">
            <Image src="/images/logo.png" alt="Rawayat logo" width={48} height={47} className="h-12 w-auto shrink-0" />
            <span className="font-serif text-2xl leading-none font-bold text-green">
              Rawayat
              <small className="mt-0.5 block font-sans text-[0.65rem] font-bold tracking-[0.16em] text-gold-dark uppercase">
                Marquee &amp; Marriage Hall
              </small>
            </span>
          </Link>

          <button
            type="button"
            className="ml-auto rounded-lg border border-line px-3 py-2 text-xl text-green md:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>

          <nav
            aria-label="Main navigation"
            className={`${
              open ? "flex" : "hidden"
            } absolute inset-x-0 top-full flex-col gap-1 border-b border-line bg-ivory px-5 pt-3 pb-4 shadow-card md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-1.5 md:border-0 md:p-0 md:shadow-none`}
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-2.5 text-[0.95rem] font-semibold md:py-2 ${
                  pathname === item.href ? "bg-green-soft text-green" : "text-ink hover:bg-green-soft hover:text-green"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 rounded-full bg-[#1f9d55] px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-[#178344] md:mt-0 md:py-2"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
