"use client";

import { BookOpen, FileText } from "lucide-react";
import type { ReactNode } from "react";
import { socials, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

const ICONS: Record<string, ReactNode> = {
  github:    <GithubIcon size={16} />,
  linkedin:  <LinkedinIcon size={16} />,
  instagram: <InstagramIcon size={16} />,
  blog:      <BookOpen size={16} />,
  resume:    <FileText size={16} />,
};

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid rgba(0, 255, 255, 0.18)",
        position: "relative",
      }}
    >
      {/* Top neon line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #BF00FF 30%, #FF2D78 50%, #00FFFF 70%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span
            className="font-pixel text-xs"
            style={{ color: "#FF2D78", textShadow: "0 0 8px #FF2D78" }}
          >
            [{(profile.name.split(" ")[0] || "").toUpperCase()}.EXE]
          </span>
          <p className="text-xs font-display" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target={s.platform !== "resume" ? "_blank" : undefined}
              rel={s.platform !== "resume" ? "noopener noreferrer" : undefined}
              className="w-9 h-9 flex items-center justify-center border transition-all duration-300"
              style={{
                color: "var(--text-muted)",
                borderColor: "rgba(0, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FF2D78";
                e.currentTarget.style.borderColor = "#FF2D78";
                e.currentTarget.style.boxShadow = "0 0 8px #FF2D78, 0 0 16px rgba(255,45,120,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
              aria-label={s.label}
            >
              {ICONS[s.platform]}
            </a>
          ))}
        </div>
      </div>

      {/* Retro status bar */}
      <div
        className="border-t px-4 py-2 flex items-center justify-center gap-6"
        style={{ borderColor: "rgba(0, 255, 255, 0.1)" }}
      >
        <span className="font-pixel text-xs" style={{ color: "rgba(0,255,255,0.35)" }}>
          ■ SYSTEM ONLINE
        </span>
        <span className="font-pixel text-xs" style={{ color: "rgba(255,45,120,0.35)" }}>
          ◆ BUILT WITH NEXT.JS
        </span>
        <span className="font-pixel text-xs hidden sm:inline" style={{ color: "rgba(191,0,255,0.35)" }}>
          ▲ TAILWIND CSS
        </span>
      </div>
    </footer>
  );
}


