import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clinica.anbro.com.br"),
  title: {
    default: "ANBRO Clínica | Harmonização Orofacial em Fortaleza",
    template: "%s | ANBRO Clínica",
  },
  description:
    "Harmonização orofacial conduzida por professores universitários, mestres e doutores. Resultado natural, produtos premium e atendimento em Fortaleza — UNIFOR e Clinicare.",
  openGraph: {
    title: "ANBRO Clínica — Harmonização Orofacial em Fortaleza",
    description:
      "Botox, preenchimento, bioestimuladores, fios de PDO e tecnologia em HOF. Mesma equipe universitária que forma os especialistas do Ceará.",
    type: "website",
    locale: "pt_BR",
    siteName: "ANBRO Clínica",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
