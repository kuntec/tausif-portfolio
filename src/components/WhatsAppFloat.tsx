"use client";

import { MessageCircle } from "lucide-react";

type Props = {
  phone: string; // E.164 without + (UAE example: "971501234567")
  message?: string;
};

export default function WhatsAppFloat({ phone, message }: Props) {
  const url = `https://wa.me/${phone}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[999] group"
    >
      <div className="rounded-2xl border border-white/12 bg-white/10 backdrop-blur px-4 py-3 shadow-lg hover:bg-white/15 transition flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md opacity-0 group-hover:opacity-100 transition" />
          <div className="grid place-items-center h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-400/25">
            <MessageCircle size={20} className="text-white/90" />
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="text-sm font-semibold text-white/90 leading-tight">
            WhatsApp
          </div>
          <div className="text-xs text-white/60 leading-tight">
            Chat with me
          </div>
        </div>
      </div>
    </a>
  );
}
