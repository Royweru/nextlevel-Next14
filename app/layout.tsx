import type { Metadata } from "next";
import { Eczar, Syne } from "next/font/google";
import "./globals.css";

const font = Eczar({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextademy",
  description: "Elevate your skills in Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
