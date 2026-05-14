"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, BookOpen, FileText } from "lucide-react";
import type { ReactNode } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { profile, socials } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

const ICONS: Record<string, ReactNode> = {
  github:    <GithubIcon size={13} />,
  linkedin:  <LinkedinIcon size={13} />,
  instagram: <InstagramIcon size={13} />,
  blog:      <BookOpen size={13} />,
  resume:    <FileText size={13} />,
};

export function About() {
  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="ABOUT ME"
          subtitle="Initializing personal profile... DONE"
          color="cyan"
        />

        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 relative"
          >
            <div
              className="relative w-56 h-56 sm:w-64 sm:h-64"
              style={{
                border: "2px solid #00FFFF",
                boxShadow: "0 0 14px #00FFFF, 0 0 28px rgba(0,255,255,0.25), inset 0 0 14px rgba(0,255,255,0.07)",
              }}
            >
              <Image
                src={profile.avatar}
                alt={`${profile.name} photo`}
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
                  pointerEvents: "none",
                }}
              />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: "#FF2D78" }} />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: "#FF2D78" }} />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: "#FF2D78" }} />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: "#FF2D78" }} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-2 px-4 py-2 mb-0 border border-b-0"
              style={{ borderColor: "rgba(0,255,255,0.25)", backgroundColor: "rgba(0,255,255,0.06)" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FF2D78", boxShadow: "0 0 4px #FF2D78" }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FFE600", boxShadow: "0 0 4px #FFE600" }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#39FF14", boxShadow: "0 0 4px #39FF14" }} />
              <span className="ml-2 font-pixel text-xs" style={{ color: "rgba(0,255,255,0.5)" }}>
                ABOUT.TXT
              </span>
            </div>
            <div
              className="border p-6"
              style={{ borderColor: "rgba(0,255,255,0.25)", backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <h3 className="font-display font-black text-xl mb-1 uppercase" style={{ color: "#00FFFF", textShadow: "0 0 8px #00FFFF" }}>
                {profile.name}
              </h3>
              <p className="font-pixel text-xs mb-5" style={{ color: "#FF2D78" }}>
                {profile.title}
              </p>
              <p className="leading-relaxed mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
                <span style={{ color: "#39FF14" }}>&gt; </span>
                {profile.bio}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <MapPin size={14} style={{ color: "#BF00FF" }} />
                  <span className="font-display text-xs tracking-wide">{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <Mail size={14} style={{ color: "#BF00FF" }} />
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-display text-xs tracking-wide transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#BF00FF";
                      e.currentTarget.style.textShadow = "0 0 6px #BF00FF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.textShadow = "none";
                    }}
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target={s.platform !== "resume" ? "_blank" : undefined}
                    rel={s.platform !== "resume" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1.5 px-3 py-1.5 font-pixel text-xs border transition-all duration-200"
                    style={{
                      borderColor: "rgba(0,255,255,0.2)",
                      color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#FF2D78";
                      e.currentTarget.style.color = "#FF2D78";
                      e.currentTarget.style.boxShadow = "0 0 6px rgba(255,45,120,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,255,255,0.2)";
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {ICONS[s.platform]}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}


