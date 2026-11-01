import { WA_GENERAL } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_GENERAL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#1f9d55] text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] hover:bg-[#178344] sm:right-5 sm:bottom-5 sm:h-14 sm:w-14"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#1f9d55]/50" />
      <span className="sr-only">Chat on WhatsApp</span>
      <WhatsAppIcon className="relative h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
