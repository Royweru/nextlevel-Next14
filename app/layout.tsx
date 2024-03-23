import type { Metadata } from "next";
import {  Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider"


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
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
