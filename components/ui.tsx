import type { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="mb-2 text-xs font-bold tracking-[0.18em] text-gold-dark uppercase">{children}</p>;
}

export function GoldRule({ center = false }: { center?: boolean }) {
  return <hr className={`my-0 h-[3px] w-16 border-0 bg-gold ${center ? "mx-auto" : ""}`} />;
}

export function SectionHeading({
  kicker,
  title,
  lead,
  center = false,
}: {
  kicker: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <Kicker>{kicker}</Kicker>
      <h2 className="font-serif text-4xl leading-tight font-bold text-green sm:text-5xl">{title}</h2>
      <div className="mt-4">
        <GoldRule center={center} />
      </div>
      {lead ? <p className={`mt-4 max-w-2xl text-lg text-muted ${center ? "mx-auto" : ""}`}>{lead}</p> : null}
    </div>
  );
}

export function GreenButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="inline-block rounded-full bg-green px-5 py-3 text-center font-bold text-white hover:bg-green-dark">
      {children}
    </a>
  );
}

export function GoldButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="inline-block rounded-full bg-gold px-5 py-3 text-center font-bold text-[#1d1a12] hover:bg-gold-dark hover:text-white">
      {children}
    </a>
  );
}

export function OutlineButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full border border-green bg-transparent px-5 py-3 text-center font-bold text-green hover:bg-green hover:text-white"
    >
      {children}
    </a>
  );
}

export function WhatsAppButton({
  href,
  children,
  small = false,
}: {
  href: string;
  children: ReactNode;
  small?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-block rounded-full bg-[#1f9d55] text-center font-bold text-white hover:bg-[#178344] ${
        small ? "px-4 py-2 text-sm" : "px-5 py-3"
      }`}
    >
      {children}
    </a>
  );
}
