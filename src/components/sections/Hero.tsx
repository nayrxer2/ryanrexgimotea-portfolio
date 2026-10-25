"use client";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/SocialIcons";
import { profile, socials } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, FileText } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  instagram: <InstagramIcon size={18} />,
  blog: <BookOpen size={18} />,
  resume: <FileText size={18} />,
};

export function Hero() {
  const nameParts = profile.name.split(" ");
  const firstName = nameParts.slice(0, 2).join(" ");
  const restName = nameParts.slice(2).join(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* ── Background layers ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        {/* Scrolling grid */}
        <div className="absolute inset-0 retro-grid opacity-50" />

        {/* Perspective horizon grid */}
        <div className="perspective-grid" />

        {/* Radial glow — top purple */}
        <div
          className="absolute top-0 left-0 right-0 h-2/3"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(191,0,255,0.14) 0%, transparent 65%)",
          }}
        />
        {/* Radial glow — bottom pink */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(255,45,120,0.14) 0%, transparent 65%)",
          }}
        />

        {/* Moving horizontal scan beam */}
        <div
          className="absolute left-0 right-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00FFFF80, transparent)",
            animation: "scan-move 7s linear infinite",
            top: 0,
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
        {/* Text block */}
        <div className="flex-1 text-center lg:text-left">
          {/* "HELLO, I'M" */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-pixel text-xs mb-5 tracking-widest neon-text-cyan"
          >
            &gt;&gt; HELLO, I&apos;M
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display font-black uppercase leading-none mb-5"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
          >
            <span
              className="block"
              style={{
                color: "#FF2D78",
                textShadow:
                  "0 0 10px #FF2D78, 0 0 24px rgba(255,45,120,0.5), 0 0 48px rgba(255,45,120,0.3)",
              }}
            >
              {firstName}
            </span>
            {restName && (
              <span
                className="block"
                style={{
                  color: "#00FFFF",
                  textShadow:
                    "0 0 10px #00FFFF, 0 0 24px rgba(0,255,255,0.5), 0 0 48px rgba(0,255,255,0.3)",
                }}
              >
                {restName}
              </span>
            )}
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start gap-2 mb-5"
          >
            <span className="font-pixel text-xs" style={{ color: "#BF00FF" }}>
              &#9658;
            </span>
            <p
              className="font-display font-bold uppercase tracking-[0.2em] text-base sm:text-lg"
              style={{
                color: "#BF00FF",
                textShadow: "0 0 8px #BF00FF, 0 0 16px rgba(191,0,255,0.4)",
              }}
            >
              {profile.title}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-lg mx-auto lg:mx-0 mb-9 text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {profile.tagline}
            <span
              className="font-pixel text-xs ml-1"
              style={{
                color: "#FF2D78",
                animation: "blink 1s step-end infinite",
              }}
            >
              ▊
            </span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-7 py-3 font-pixel text-xs uppercase tracking-wider transition-all duration-300 border-2"
              style={{
                color: "#FF2D78",
                borderColor: "#FF2D78",
                boxShadow:
                  "0 0 8px #FF2D78, 0 0 16px rgba(255,45,120,0.25), inset 0 0 8px rgba(255,45,120,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,45,120,0.12)";
                e.currentTarget.style.boxShadow =
                  "0 0 16px #FF2D78, 0 0 32px rgba(255,45,120,0.5), inset 0 0 14px rgba(255,45,120,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.boxShadow =
                  "0 0 8px #FF2D78, 0 0 16px rgba(255,45,120,0.25), inset 0 0 8px rgba(255,45,120,0.08)";
              }}
            >
              [ VIEW MY WORK ]
            </a>
            <a
              href={socials.find((item) => item.platform === "resume")?.url}
              className="px-7 py-3 font-pixel text-xs uppercase tracking-wider transition-all duration-300 border-2"
              style={{
                color: "#00FFFF",
                borderColor: "#00FFFF",
                boxShadow:
                  "0 0 8px #00FFFF, 0 0 16px rgba(0,255,255,0.25), inset 0 0 8px rgba(0,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0,255,255,0.08)";
                e.currentTarget.style.boxShadow =
                  "0 0 16px #00FFFF, 0 0 32px rgba(0,255,255,0.5), inset 0 0 14px rgba(0,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.boxShadow =
                  "0 0 8px #00FFFF, 0 0 16px rgba(0,255,255,0.25), inset 0 0 8px rgba(0,255,255,0.08)";
              }}
            >
              [ DOWNLOAD CV ]
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            {socials
              .filter((s) => s.platform !== "resume")
              .map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border transition-all duration-300"
                  style={{
                    color: "var(--text-muted)",
                    borderColor: "rgba(0, 255, 255, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FF2D78";
                    e.currentTarget.style.borderColor = "#FF2D78";
                    e.currentTarget.style.boxShadow =
                      "0 0 8px #FF2D78, 0 0 16px rgba(255,45,120,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor =
                      "rgba(0, 255, 255, 0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  aria-label={s.label}
                >
                  {ICONS[s.platform]}
                </a>
              ))}
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-shrink-0 relative"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          {/* Outer glow ring */}
          <div
            className="absolute -inset-3 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,45,120,0.2) 0%, transparent 70%)",
            }}
          />

          <div
            className="relative w-52 h-52 sm:w-68 sm:h-68 lg:w-72 lg:h-72"
            style={{
              border: "2px solid #FF2D78",
              boxShadow:
                "0 0 18px #FF2D78, 0 0 36px rgba(255,45,120,0.3), inset 0 0 18px rgba(255,45,120,0.08)",
            }}
          >
            <Image
              src={profile.avatar}
              alt={`${profile.name} photo`}
              fill
              className="object-cover"
              style={{ filter: "saturate(1.1) contrast(1.05)" }}
            />
            {/* CRT scanlines on photo */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.09) 2px, rgba(0,0,0,0.09) 4px)",
                pointerEvents: "none",
              }}
            />
            {/* Bottom gradient */}
            <div
              className="absolute bottom-0 inset-x-0 h-1/4"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,45,120,0.15), transparent)",
              }}
            />
          </div>

          {/* Corner decorators */}
          <div
            className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2"
            style={{ borderColor: "#00FFFF" }}
          />
          <div
            className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2"
            style={{ borderColor: "#00FFFF" }}
          />
          <div
            className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2"
            style={{ borderColor: "#00FFFF" }}
          />
          <div
            className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2"
            style={{ borderColor: "#00FFFF" }}
          />

          {/* Label below photo */}
          <div
            className="absolute -bottom-8 left-0 right-0 text-center font-pixel text-xs tracking-widest"
            style={{ color: "rgba(0,255,255,0.5)" }}
          >
            PLAYER_1.PNG
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="font-pixel text-xs"
          style={{ color: "rgba(0,255,255,0.4)" }}
        >
          SCROLL
        </span>
        <ArrowDown
          size={14}
          style={{
            color: "#00FFFF",
            animation: "float 2s ease-in-out infinite",
            filter: "drop-shadow(0 0 4px #00FFFF)",
          }}
        />
      </motion.div>
    </section>
  );
}
