import Image from "next/image";
import type { ReactNode } from "react";

export default function Hero({
  kicker,
  title,
  children,
  tall = false,
}: {
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
  tall?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-green-dark text-white">
      <Image
        src="/images/cover.jpg"
        alt="Rawayat Marquee & Marriage Hall building at dusk"
        fill
        priority={tall}
        className="object-cover object-[center_38%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2c21]/95 via-[#0a2c21]/70 to-[#0a2c21]/35" />
      <div className={`relative mx-auto max-w-6xl px-5 ${tall ? "py-20 sm:py-24" : "py-14"}`}>
        <p className="mb-2 text-xs font-bold tracking-[0.18em] text-gold uppercase">{kicker}</p>
        <h1 className="font-serif text-5xl leading-[1.1] font-bold text-white sm:text-6xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}
