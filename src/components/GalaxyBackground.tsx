"use client";

export default function GalaxyBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#030712] to-[#020617]" />

      {/* Galaxy glow blobs */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[120px]" />

      {/* AI grid overlay */}
      <div className="absolute inset-0 opacity-[0.12]
        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:64px_64px]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
    </div>
  );
}
