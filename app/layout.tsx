import type { Metadata } from "next";
import { Bebas_Neue, Inter, Archivo } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Headings below the hero — Archivo replaces Bebas there (Bebas stays for the
// hero/header wordmark only, per the brand's approved header treatment).
const archivo = Archivo({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Volt Investments | Security, Trading & Farm Produce | Bulawayo",
  description:
    "Black Volt Investments (Pvt) Ltd operates four divisions in Zimbabwe: import and exports, general trading, farm produce, and security guard services. Request a quote today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
