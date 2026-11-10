import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imam Hudzaifah · AI-assisted Software Developer",
  description:
    "The portfolio of Imam Hudzaifah, an AI-assisted Software Developer and Computer Science student focused on full-stack web development and intelligent systems.",
  openGraph: {
    title: "Imam Hudzaifah · AI-assisted Software Developer",
    description: "Building useful digital products with technology and empathy.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
