"use client";

import { Section, SectionHeading } from "@/components/Section";
import { experiences } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section
      id="experience"
      style={{ backgroundColor: "var(--bg-secondary)" } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="EXPERIENCE"
          subtitle="Work history — loading from disk..."
          color="green"
        />

        <div className="relative">
          {/* Timeline vertical line */}
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, #FF2D78, #BF00FF, #00FFFF, transparent)",
              boxShadow: "0 0 6px rgba(0,255,255,0.3)",
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex gap-6 flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-5 md:left-1/2 w-3 h-3 border-2 -translate-x-1/2 mt-6 z-10 rotate-45"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#FF2D78" : "#00FFFF",
                    borderColor: "var(--bg-secondary)",
                    boxShadow: `0 0 8px ${i % 2 === 0 ? "#FF2D78" : "#00FFFF"}`,
                  }}
                />

                {/* Spacer */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="ml-12 md:ml-0 md:flex-1 border transition-all duration-300 relative overflow-hidden"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor:
                      i % 2 === 0
                        ? "rgba(255,45,120,0.35)"
                        : "rgba(0,255,255,0.35)",
                    boxShadow: `0 0 8px ${i % 2 === 0 ? "rgba(255,45,120,0.1)" : "rgba(0,255,255,0.1)"}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      i % 2 === 0 ? "#FF2D78" : "#00FFFF";
                    e.currentTarget.style.boxShadow = `0 0 16px ${i % 2 === 0 ? "rgba(255,45,120,0.25)" : "rgba(0,255,255,0.25)"}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      i % 2 === 0
                        ? "rgba(255,45,120,0.35)"
                        : "rgba(0,255,255,0.35)";
                    e.currentTarget.style.boxShadow = `0 0 8px ${i % 2 === 0 ? "rgba(255,45,120,0.1)" : "rgba(0,255,255,0.1)"}`;
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="h-0.5"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "#FF2D78" : "#00FFFF"}, transparent)`,
                    }}
                  />

                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-9 h-9 flex items-center justify-center flex-shrink-0 border font-pixel text-xs"
                        style={{
                          borderColor: i % 2 === 0 ? "#FF2D78" : "#00FFFF",
                          color: i % 2 === 0 ? "#FF2D78" : "#00FFFF",
                          boxShadow: `0 0 6px ${i % 2 === 0 ? "rgba(255,45,120,0.3)" : "rgba(0,255,255,0.3)"}`,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3
                          className="font-display font-bold uppercase tracking-wide text-sm"
                          style={{ color: "var(--text)" }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="font-display text-xs tracking-widest"
                          style={{ color: i % 2 === 0 ? "#FF2D78" : "#00FFFF" }}
                        >
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <p
                      className="font-pixel text-xs mb-3"
                      style={{ color: "rgba(200,195,240,0.4)" }}
                    >
                      {"// "}
                      {exp.period}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {exp.description}
                    </p>

                    {exp.tech && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="font-display text-xs px-2 py-0.5 border tracking-wide"
                            style={{
                              backgroundColor: "rgba(0,255,255,0.05)",
                              color: "rgba(0,255,255,0.7)",
                              borderColor: "rgba(0,255,255,0.2)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
