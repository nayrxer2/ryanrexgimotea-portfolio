"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { Section, SectionHeading } from "@/components/Section";
import { projects } from "@/data/portfolio";

const CARD_COLORS = [
  { border: "rgba(255,45,120,0.4)",  glow: "#FF2D78",  top: "#FF2D78"  },
  { border: "rgba(0,255,255,0.4)",   glow: "#00FFFF",  top: "#00FFFF"  },
  { border: "rgba(191,0,255,0.4)",   glow: "#BF00FF",  top: "#BF00FF"  },
  { border: "rgba(57,255,20,0.4)",   glow: "#39FF14",  top: "#39FF14"  },
  { border: "rgba(255,230,0,0.4)",   glow: "#FFE600",  top: "#FFE600"  },
  { border: "rgba(0,255,255,0.4)",   glow: "#00FFFF",  top: "#00FFFF"  },
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="PROJECTS"
          subtitle="Programs I have shipped to production"
          color="pink"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const c = CARD_COLORS[i % CARD_COLORS.length];
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="group border overflow-hidden transition-all duration-300 flex flex-col"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: c.border,
                  boxShadow: `0 0 8px rgba(0,0,0,0.4)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 16px ${c.glow}40, 0 8px 32px rgba(0,0,0,0.5)`;
                  e.currentTarget.style.borderColor = c.glow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 8px rgba(0,0,0,0.4)";
                  e.currentTarget.style.borderColor = c.border;
                }}
              >
                {/* Top neon bar */}
                <div className="h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${c.top}, transparent)` }} />

                {/* Thumbnail */}
                <div
                  className="relative h-44 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, ${c.glow}18 100%)`,
                  }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ filter: "saturate(1.1)" }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 size={44} style={{ color: `${c.glow}50` }} />
                    </div>
                  )}
                  {project.featured && (
                    <span
                      className="absolute top-3 left-3 font-pixel text-xs px-2 py-1"
                      style={{
                        color: "#FFE600",
                        border: "1px solid #FFE600",
                        backgroundColor: "rgba(255,230,0,0.1)",
                        textShadow: "0 0 6px #FFE600",
                        boxShadow: "0 0 6px rgba(255,230,0,0.3)",
                      }}
                    >
                      ★ FEATURED
                    </span>
                  )}
                  {/* Scanlines on image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Terminal filename */}
                  <span className="font-pixel text-xs mb-2" style={{ color: `${c.glow}99` }}>
                    &gt; {project.title.toLowerCase().replace(/\s+/g, "_")}.exe
                  </span>
                  <h3 className="font-display font-bold text-base mb-2 uppercase tracking-wide" style={{ color: "var(--text)" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-display text-xs px-2 py-0.5 border tracking-wide"
                        style={{
                          backgroundColor: `${c.glow}0D`,
                          color: c.glow,
                          borderColor: `${c.glow}50`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-display text-xs tracking-wider transition-all duration-200"
                        style={{ color: "#FF2D78" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.textShadow = "0 0 6px #FF2D78";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.textShadow = "none";
                        }}
                      >
                        <ExternalLink size={13} />
                        LIVE DEMO
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-display text-xs tracking-wider transition-all duration-200"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#00FFFF";
                          e.currentTarget.style.textShadow = "0 0 6px #00FFFF";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--text-muted)";
                          e.currentTarget.style.textShadow = "none";
                        }}
                      >
                        <GithubIcon size={13} />
                        SOURCE
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}


