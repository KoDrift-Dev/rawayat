import Image from "next/image";
import { coverPhoto } from "@/lib/photos/cover";
import type { ReactNode } from "react";

export default function Hero({
  eyebrow,
  title,
  sub,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src={coverPhoto}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          {eyebrow ? (
            <span className="eyebrow" style={{ color: "var(--color-champagne-300)" }}>
              <span className="rule" />
              {eyebrow}
            </span>
          ) : null}
          <h1>{title}</h1>
          {sub ? <p className="sub">{sub}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
