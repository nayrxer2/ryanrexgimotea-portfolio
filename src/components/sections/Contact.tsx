"use client";

import { Section, SectionHeading } from "@/components/Section";
import { profile } from "@/data/portfolio";
import { submitContactForm } from "@/lib/web3forms";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const inputStyle = {
  backgroundColor: "rgba(0,0,0,0.4)",
  border: "1px solid rgba(0,255,255,0.2)",
  color: "var(--text)",
  fontFamily: "var(--font-share-tech-mono), monospace",
  outline: "none",
  width: "100%",
  padding: "10px 14px",
  fontSize: "0.875rem",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;

    try {
      await submitContactForm(new FormData(form));
      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setErrorMsg(
        error instanceof Error &&
          error.message.startsWith("Contact form is not configured")
          ? error.message
          : "Transmission failed. Please try again or contact me directly.",
      );
    }
  }

  return (
    <Section
      id="contact"
      style={{ backgroundColor: "var(--bg-secondary)" } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="CONTACT"
          subtitle="Open a transmission channel"
          color="pink"
        />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-72 flex-shrink-0"
          >
            {/* Terminal info box */}
            <div
              className="border mb-6"
              style={{
                borderColor: "rgba(0,255,255,0.25)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              <div
                className="px-4 py-2 border-b flex items-center gap-2"
                style={{
                  borderColor: "rgba(0,255,255,0.2)",
                  backgroundColor: "rgba(0,255,255,0.05)",
                }}
              >
                <span
                  className="font-pixel text-xs"
                  style={{ color: "#00FFFF" }}
                >
                  &gt; COMM_LINK.EXE
                </span>
              </div>
              <div className="p-5 space-y-4">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span style={{ color: "#39FF14" }}>&gt; </span>
                  I&apos;m open to new opportunities. Whether you have a
                  question, project idea, or just want to say hello — transmit a
                  message!
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 group transition-all duration-200"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#BF00FF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center border flex-shrink-0"
                    style={{
                      borderColor: "rgba(191,0,255,0.4)",
                      color: "#BF00FF",
                    }}
                  >
                    <Mail size={14} />
                  </div>
                  <span className="text-sm font-display tracking-wide">
                    {profile.email}
                  </span>
                </a>

                <div
                  className="flex items-center gap-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center border flex-shrink-0"
                    style={{
                      borderColor: "rgba(255,45,120,0.4)",
                      color: "#FF2D78",
                    }}
                  >
                    <MapPin size={14} />
                  </div>
                  <span className="text-sm font-display tracking-wide">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Status display */}
            <div
              className="border p-4"
              style={{
                borderColor: "rgba(57,255,20,0.25)",
                backgroundColor: "rgba(57,255,20,0.04)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#39FF14",
                    boxShadow: "0 0 6px #39FF14",
                    animation: "neon-pulse 2s infinite",
                  }}
                />
                <span
                  className="font-pixel text-xs"
                  style={{ color: "#39FF14" }}
                >
                  STATUS: ONLINE
                </span>
              </div>
              <p
                className="font-pixel text-xs"
                style={{ color: "rgba(200,195,240,0.4)" }}
              >
                {"// "}Available for freelance & full-time roles
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            {state === "success" ? (
              <div
                className="flex flex-col items-center justify-center h-64 text-center border"
                style={{
                  borderColor: "rgba(57,255,20,0.35)",
                  backgroundColor: "rgba(57,255,20,0.04)",
                }}
              >
                <CheckCircle
                  size={44}
                  style={{
                    color: "#39FF14",
                    filter: "drop-shadow(0 0 8px #39FF14)",
                    marginBottom: "1rem",
                  }}
                />
                <h4
                  className="font-display font-bold uppercase tracking-widest mb-2"
                  style={{ color: "#39FF14" }}
                >
                  TRANSMISSION SENT
                </h4>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Message received. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-4 font-pixel text-xs transition-all duration-200"
                  style={{ color: "rgba(0,255,255,0.6)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00FFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(0,255,255,0.6)";
                  }}
                >
                  [ SEND ANOTHER ]
                </button>
              </div>
            ) : (
              <div
                className="border"
                style={{
                  borderColor: "rgba(0,255,255,0.25)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                {/* Terminal header */}
                <div
                  className="px-4 py-2 border-b flex items-center gap-2"
                  style={{
                    borderColor: "rgba(0,255,255,0.2)",
                    backgroundColor: "rgba(0,255,255,0.05)",
                  }}
                >
                  <span
                    className="font-pixel text-xs"
                    style={{ color: "#FF2D78" }}
                  >
                    &gt; MESSAGE_COMPOSER.EXE
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-pixel text-xs mb-2"
                        style={{ color: "rgba(0,255,255,0.7)" }}
                      >
                        {"// "}NAME:
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your Name"
                        style={inputStyle}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "#00FFFF";
                          e.currentTarget.style.boxShadow =
                            "0 0 8px rgba(0,255,255,0.2)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(0,255,255,0.2)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-pixel text-xs mb-2"
                        style={{ color: "rgba(0,255,255,0.7)" }}
                      >
                        {"// "}EMAIL:
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        style={inputStyle}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "#00FFFF";
                          e.currentTarget.style.boxShadow =
                            "0 0 8px rgba(0,255,255,0.2)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(0,255,255,0.2)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-pixel text-xs mb-2"
                      style={{ color: "rgba(0,255,255,0.7)" }}
                    >
                      {"// "}SUBJECT:
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What's this about?"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#00FFFF";
                        e.currentTarget.style.boxShadow =
                          "0 0 8px rgba(0,255,255,0.2)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(0,255,255,0.2)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-pixel text-xs mb-2"
                      style={{ color: "rgba(0,255,255,0.7)" }}
                    >
                      {"// "}MESSAGE:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project or just say hi..."
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#00FFFF";
                        e.currentTarget.style.boxShadow =
                          "0 0 8px rgba(0,255,255,0.2)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(0,255,255,0.2)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {state === "error" && errorMsg && (
                    <div
                      className="flex items-start gap-2 text-sm px-4 py-3 border"
                      style={{
                        borderColor: "rgba(255,45,120,0.5)",
                        color: "#FF2D78",
                        backgroundColor: "rgba(255,45,120,0.05)",
                      }}
                    >
                      <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="flex items-center gap-2 px-7 py-3 font-pixel text-xs uppercase tracking-wider transition-all duration-300 border-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      color: "#FF2D78",
                      borderColor: "#FF2D78",
                      boxShadow:
                        "0 0 8px #FF2D78, 0 0 16px rgba(255,45,120,0.25)",
                    }}
                    onMouseEnter={(e) => {
                      if (state !== "submitting") {
                        e.currentTarget.style.backgroundColor =
                          "rgba(255,45,120,0.12)";
                        e.currentTarget.style.boxShadow =
                          "0 0 16px #FF2D78, 0 0 32px rgba(255,45,120,0.4)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.boxShadow =
                        "0 0 8px #FF2D78, 0 0 16px rgba(255,45,120,0.25)";
                    }}
                  >
                    {state === "submitting" ? (
                      <>
                        <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send size={13} />[ SEND MESSAGE ]
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
