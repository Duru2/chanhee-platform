import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito"
});

export const metadata: Metadata = {
  title: "Chanhee OS",
  description:
    "A living digital home for learning, building, reflecting, and growing in public."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
