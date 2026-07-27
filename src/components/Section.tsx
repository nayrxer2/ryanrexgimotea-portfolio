"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function Section({ id, className, style, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 relative", className)}
      style={style}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  color?: "pink" | "cyan" | "purple" | "green";
}

const colorMap = {
  pink:   { neon: "#FF2D78", shadow: "0 0 8px #FF2D78, 0 0 16px rgba(255,45,120,0.4)", bar: "linear-gradient(90deg, #FF2D78, #BF00FF)" },
  cyan:   { neon: "#00FFFF", shadow: "0 0 8px #00FFFF, 0 0 16px rgba(0,255,255,0.4)", bar: "linear-gradient(90deg, #00FFFF, #BF00FF)" },
  purple: { neon: "#BF00FF", shadow: "0 0 8px #BF00FF, 0 0 16px rgba(191,0,255,0.4)", bar: "linear-gradient(90deg, #BF00FF, #FF2D78)" },
  green:  { neon: "#39FF14", shadow: "0 0 8px #39FF14, 0 0 16px rgba(57,255,20,0.4)",  bar: "linear-gradient(90deg, #39FF14, #00FFFF)" },
};

export function SectionHeading({ title, subtitle, color = "cyan" }: SectionHeadingProps) {
  const c = colorMap[color];
  return (
    <div className="mb-14 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="font-pixel text-xs" style={{ color: "#FF2D78", textShadow: "0 0 8px #FF2D78" }}>&gt;&gt;</span>
        <h2
          className="font-display font-black text-2xl sm:text-3xl uppercase tracking-widest"
          style={{ color: c.neon, textShadow: c.shadow }}
        >
          {title}
        </h2>
        <span className="font-pixel text-xs" style={{ color: "#FF2D78", textShadow: "0 0 8px #FF2D78" }}>&lt;&lt;</span>
      </div>

      {subtitle && (
        <p className="max-w-xl mx-auto text-sm tracking-wide" style={{ color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}

      {/* Neon divider */}
      <div className="mt-5 flex items-center justify-center gap-2">
        <div className="h-px flex-1 max-w-24" style={{ background: c.bar, opacity: 0.5 }} />
        <div className="w-2 h-2 rotate-45" style={{ backgroundColor: c.neon, boxShadow: c.shadow }} />
        <div className="h-px flex-1 max-w-24" style={{ background: c.bar, opacity: 0.5 }} />
      </div>
    </div>
  );
}


interface SectionProps {
  id: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

