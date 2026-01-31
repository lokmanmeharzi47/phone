import type { Metadata } from "next";
import { Cairo } from "next/font/google"; // Using Cairo as it's excellent for Arabic
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مقارنة الجوالات | JawalCompare",
  description: "قارن أسعار ومواصفات الهواتف الذكية في السوق العربي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
