"use client";

import { Section, SectionHeading } from "@/components/Section";
import { education } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Education() {
  return (
    <Section id="education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="EDUCATION"
          subtitle="Academic credentials verified"
          color="cyan"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={`${edu.school}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="border transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: i % 2 === 0 ? "rgba(0,255,255,0.35)" : "rgba(191,0,255,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = i % 2 === 0 ? "#00FFFF" : "#BF00FF";
                e.currentTarget.style.boxShadow = `0 0 16px ${i % 2 === 0 ? "rgba(0,255,255,0.2)" : "rgba(191,0,255,0.2)"}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = i % 2 === 0 ? "rgba(0,255,255,0.35)" : "rgba(191,0,255,0.35)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent */}
              <div
                className="h-0.5"
                style={{
                  background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "#00FFFF" : "#BF00FF"}, transparent)`,
                }}
              />

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0 border font-pixel text-lg"
                    style={{
                      borderColor: i % 2 === 0 ? "#00FFFF" : "#BF00FF",
                      color: i % 2 === 0 ? "#00FFFF" : "#BF00FF",
                      boxShadow: `0 0 8px ${i % 2 === 0 ? "rgba(0,255,255,0.3)" : "rgba(191,0,255,0.3)"}`,
                    }}
                  >
                    &#9670;
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase tracking-wide text-sm" style={{ color: "var(--text)" }}>
                      {edu.degree}
                    </h3>
                    <p
                      className="font-display text-xs tracking-widest mt-0.5"
                      style={{ color: i % 2 === 0 ? "#00FFFF" : "#BF00FF" }}
                    >
                      {edu.field}
                    </p>
                  </div>
                </div>

                <p className="font-display font-semibold text-sm uppercase tracking-wide mb-1" style={{ color: "var(--text)" }}>
                  {edu.school}
                </p>
                <p className="font-pixel text-xs mb-3" style={{ color: "rgba(200,195,240,0.4)" }}>
                   {edu.period}
                </p>
                {edu.description && (
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {edu.description}
                  </p>
                )}
              </div>

              {/* Corner accents */}
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r"
                style={{ borderColor: i % 2 === 0 ? "rgba(0,255,255,0.3)" : "rgba(191,0,255,0.3)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}


