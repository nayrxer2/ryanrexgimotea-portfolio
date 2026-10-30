"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/Section";
import { skillGroups } from "@/data/portfolio";

const GROUP_NEON = [
  {
    border: "rgba(255,45,120,0.4)",
    chipColor: "#FF2D78",
    chipBg: "rgba(255,45,120,0.1)",
    label: "PINK",
    shadow: "0 0 6px #FF2D78",
  },
  {
    border: "rgba(0,255,255,0.4)",
    chipColor: "#00FFFF",
    chipBg: "rgba(0,255,255,0.08)",
    label: "CYAN",
    shadow: "0 0 6px #00FFFF",
  },
  {
    border: "rgba(191,0,255,0.4)",
    chipColor: "#BF00FF",
    chipBg: "rgba(191,0,255,0.1)",
    label: "PURPLE",
    shadow: "0 0 6px #BF00FF",
  },
  {
    border: "rgba(57,255,20,0.4)",
    chipColor: "#39FF14",
    chipBg: "rgba(57,255,20,0.08)",
    label: "GREEN",
    shadow: "0 0 6px #39FF14",
  },
] as const;

export function Skills() {
  return (
    <Section
      id="skills"
      style={{ backgroundColor: "var(--bg-secondary)" } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="SKILLS"
          subtitle="Technologies loaded into memory"
          color="purple"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const neon = GROUP_NEON[gi % GROUP_NEON.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                className="border transition-all duration-300 relative"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: neon.border,
                  boxShadow: `0 0 8px rgba(${neon.label === "PINK" ? "255,45,120" : neon.label === "CYAN" ? "0,255,255" : neon.label === "PURPLE" ? "191,0,255" : "57,255,20"},0.15), inset 0 0 8px rgba(${neon.label === "PINK" ? "255,45,120" : neon.label === "CYAN" ? "0,255,255" : neon.label === "PURPLE" ? "191,0,255" : "57,255,20"},0.04)`,
                }}
              >
                {/* Header bar */}
                <div
                  className="px-4 py-2 border-b flex items-center gap-2"
                  style={{
                    borderColor: neon.border,
                    backgroundColor: `${neon.chipBg}`,
                  }}
                >
                  <span
                    className="font-pixel text-xs"
                    style={{ color: neon.chipColor, textShadow: neon.shadow }}
                  >
                    &gt;
                  </span>
                  <h3
                    className="font-display font-bold text-xs uppercase tracking-widest"
                    style={{ color: neon.chipColor }}
                  >
                    {group.category}
                  </h3>
                </div>

                <div className="p-5 flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.25,
                        delay: gi * 0.08 + si * 0.04,
                      }}
                      whileHover={{ scale: 1.08 }}
                      className="text-xs font-display px-3 py-1 border cursor-default tracking-wide transition-all duration-200"
                      style={{
                        backgroundColor: neon.chipBg,
                        color: neon.chipColor,
                        borderColor: neon.border,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          neon.shadow;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "none";
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
