"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about",      label: "ABOUT"      },
  { href: "#skills",     label: "SKILLS"     },
  { href: "#projects",   label: "PROJECTS"   },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#education",  label: "EDUCATION"  },
  { href: "#contact",    label: "CONTACT"    },
];

const firstName = (profile.name.split(" ")[0] || "PORTFOLIO").toUpperCase();

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      )}
      style={{
        backgroundColor: scrolled
          ? "rgba(7, 0, 15, 0.92)"
          : "rgba(7, 0, 15, 0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0, 255, 255, 0.25)",
        boxShadow: scrolled
          ? "0 2px 20px rgba(0, 255, 255, 0.08)"
          : "none",
      }}
    >
      {/* Top neon accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #FF2D78 30%, #00FFFF 50%, #BF00FF 70%, transparent 100%)",
        }}
      />

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-pixel text-xs tracking-widest transition-all duration-300"
          style={{ color: "#FF2D78", textShadow: "0 0 8px #FF2D78, 0 0 16px rgba(255,45,120,0.4)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#00FFFF";
            e.currentTarget.style.textShadow = "0 0 8px #00FFFF, 0 0 16px rgba(0,255,255,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#FF2D78";
            e.currentTarget.style.textShadow = "0 0 8px #FF2D78, 0 0 16px rgba(255,45,120,0.4)";
          }}
        >
          [{firstName}.EXE]
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-xs font-display font-semibold tracking-widest transition-all duration-200"
                style={{ color: "rgba(200, 195, 240, 0.55)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00FFFF";
                  e.currentTarget.style.textShadow = "0 0 8px #00FFFF, 0 0 14px rgba(0,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(200, 195, 240, 0.55)";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center border transition-all duration-200"
          style={{
            color: "#00FFFF",
            borderColor: "rgba(0, 255, 255, 0.35)",
            boxShadow: "0 0 6px rgba(0,255,255,0.2)",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "rgba(7, 0, 15, 0.97)",
            borderBottom: "1px solid rgba(0, 255, 255, 0.2)",
          }}
        >
          <ul className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-3 text-xs font-display font-semibold tracking-widest transition-all duration-200 border-l-2"
                  style={{
                    color: "rgba(200, 195, 240, 0.6)",
                    borderColor: "rgba(0,255,255,0.2)",
                  }}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00FFFF";
                    e.currentTarget.style.borderColor = "#00FFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(200, 195, 240, 0.6)";
                    e.currentTarget.style.borderColor = "rgba(0,255,255,0.2)";
                  }}
                >
                  <span style={{ color: "#FF2D78" }}>&#62;</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}


