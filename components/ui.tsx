"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/* ---------- scroll reveal (IntersectionObserver; no animation library) ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- stagger: children fade up one after another ---------- */
export function StaggerItem({
  children,
  index = 0,
  gap = 90,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  gap?: number;
  className?: string;
}) {
  return (
    <Reveal delay={index * gap} className={className} style={{ height: "100%" }}>
      {children}
    </Reveal>
  );
}

/* ---------- buttons ---------- */
type BtnVariant = "primary" | "gold" | "outline" | "outline-light" | "dark" | "light" | "ghost";

export function Btn({
  href,
  to,
  variant = "primary",
  size,
  block = false,
  children,
  onClick,
  type = "button",
  external = false,
  className = "",
}: {
  href?: string;
  to?: string;
  variant?: BtnVariant;
  size?: "sm" | "lg";
  block?: boolean;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  className?: string;
}) {
  const cls = `btn btn-${variant}${size ? ` btn-${size}` : ""}${block ? " btn-block" : ""}${className ? ` ${className}` : ""}`;
  const url = to ?? href;
  if (url) {
    if (external || url.startsWith("http") || url.startsWith("tel:") || url.startsWith("mailto:")) {
      return (
        <a
          href={url}
          className={cls}
          onClick={onClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={url} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

/* ---------- badge ---------- */
export function Badge({ tone, children }: { tone?: "gold" | "green" | "amber" | "grey"; children: ReactNode }) {
  return <span className={`badge${tone ? ` badge-${tone}` : ""}`}>{children}</span>;
}

/* ---------- form field ---------- */
export function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
      {hint && !error && <span className="hint">{hint}</span>}
      {error && (
        <span className="field-err" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

/* ---------- page + section heads ---------- */
export function PageHead({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={center ? "center" : ""} style={{ marginBottom: 28 }}>
        {eyebrow && (
          <span className="eyebrow">
            <span className="rule" />
            {eyebrow}
          </span>
        )}
        <h1 style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </Reveal>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center = false,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
  action?: ReactNode;
}) {
  return (
    <Reveal>
      <div className={center ? "center" : ""} style={{ marginBottom: 34 }}>
        <div
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}
        >
          <div>
            {eyebrow && (
              <span className="eyebrow">
                <span className="rule" />
                {eyebrow}
              </span>
            )}
            <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)", marginBottom: 6 }}>{title}</h2>
            {lead && (
              <p className="lead" style={{ marginBottom: 0 }}>
                {lead}
              </p>
            )}
          </div>
          {action}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- image (Next.js, lazy by default) ---------- */
export function Img({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? undefined : "lazy"}
    />
  );
}

/* ---------- chip ---------- */
export function Chip({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  if (onClick) {
    return (
      <button type="button" className="chip" onClick={onClick}>
        {children}
      </button>
    );
  }
  return <span className="chip">{children}</span>;
}
