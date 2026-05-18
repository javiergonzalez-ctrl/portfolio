import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { TopNav } from "@/components/top-nav";
import { CustomCursor } from "@/components/custom-cursor";
import { CommandPalette } from "@/components/command-palette";
import { SectionNav } from "@/components/section-nav";
import { MobileDock } from "@/components/mobile-dock";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Javier González Álvarez · Engineer & Builder",
  description:
    "Ingeniero industrial trabajando en una fintech europea. Diseño y construyo plataformas internas, automatizaciones contables, agentes de IA y pipelines de datos.",
  metadataBase: new URL("https://javier-portfolio.local"),
  applicationName: "Portfolio · Javier González Álvarez",
  authors: [{ name: "Javier González Álvarez" }],
  keywords: [
    "ingeniero",
    "fintech",
    "automatización",
    "Next.js",
    "Python",
    "Postgres",
    "IA",
    "agentes",
    "platform engineering",
  ],
  openGraph: {
    title: "Javier González Álvarez · Engineer & Builder",
    description:
      "Construyo el software interno de una fintech europea. Donde antes había un Excel o un proceso manual, ahora corre un sistema. Catorce productos en producción en tres meses.",
    type: "website",
    locale: "es_ES",
    siteName: "Javier González Álvarez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier González Álvarez · Engineer & Builder",
    description:
      "Construyo el software interno de una fintech europea. Catorce productos en producción en tres meses.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1224",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${interTight.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body>
        <ScrollProgress />
        <TopNav />
        <SectionNav />
        <MobileDock />
        <CustomCursor />
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
