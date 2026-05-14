import type { Metadata } from "next";
import { Orbitron, Press_Start_2P, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { seo } from "@/data/portfolio";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start-2p",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
  display: "swap",
});

// TODO: Update seo fields in src/data/portfolio.ts for your own SEO
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  metadataBase: new URL(seo.url),
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.url,
    siteName: seo.title,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${pressStart.variable} ${shareTechMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* TODO: Plausible analytics — uncomment and set your domain to enable
        <script
          defer
          data-domain="yourdomain.com"
          src="https://plausible.io/js/plausible.js"
        /> */}
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
