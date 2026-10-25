import { WA_GENERAL } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_GENERAL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1f9d55] text-2xl text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] hover:bg-[#178344] max-sm:right-3.5 max-sm:bottom-3.5 max-sm:h-[54px] max-sm:w-[54px]"
    >
      <span className="sr-only">Chat on WhatsApp</span>
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
