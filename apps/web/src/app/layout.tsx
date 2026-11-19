import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://locro.com.ar";

export const viewport: Viewport = {
  themeColor: "#F9F4EB",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "{ locro. } — IA, automatización y software a medida para Pymes",
    template: "%s | { locro. }",
  },
  description:
    "Integramos software a medida, agentes de Inteligencia Artificial y automatizaciones sobre las herramientas que tu Pyme ya usa. Soluciones concretas en Argentina, sin humo tech.",
  keywords: [
    "software a medida pymes argentina",
    "automatización de procesos pymes",
    "agentes de ia whatsapp",
    "n8n argentina",
    "desarrollo de software a medida",
    "locro ia",
  ],
  authors: [{ name: "{ locro. }", url: siteUrl }],
  creator: "{ locro. }",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "{ locro. }",
    title: "{ locro. } — IA y software a medida sobre lo que tu Pyme ya usa",
    description:
      "Automatizamos procesos operativos, armamos agentes de IA útiles y desarrollamos herramientas a medida para Pymes en Argentina.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "{ locro. } — ia & software a medida_",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "{ locro. } — IA y software a medida para Pymes",
    description:
      "Integramos sistemas, datos e IA sobre lo que tu Pyme ya usa. Sin humo tech ni empezar de cero.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "{ locro. }",
  url: siteUrl,
  email: "somoslocro@gmail.com",
  logo: `${siteUrl}/brand/icon.svg`,
  sameAs: ["https://instagram.com/somoslocro"],
  description:
    "Estudio de desarrollo de software a medida, agentes de IA y automatización de procesos operativos para Pymes en Argentina.",
  areaServed: "AR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-locro-bg text-locro-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
