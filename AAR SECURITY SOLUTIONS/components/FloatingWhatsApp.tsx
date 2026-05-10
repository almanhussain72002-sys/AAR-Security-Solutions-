import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with AAR Security Solutions on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#18B857] text-white shadow-[0_18px_45px_rgba(24,184,87,0.36)] transition hover:-translate-y-1 hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
