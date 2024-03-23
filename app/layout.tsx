import type { Metadata } from "next";
import { Eczar, Karla, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation";

const font = Karla({ subsets: ["latin"] });

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
      <body className={font.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
