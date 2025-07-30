import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PT_Mono, Roboto, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { unstable_ViewTransition as ViewTransition } from 'react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptMono = PT_Mono({
  variable: "--font-pt-mono",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// New Title font - Local files
const newTitle = localFont({
  src: [
    {
      path: "../public/fonts/NewTitle-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NewTitle-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/NewTitle-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NewTitle-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NewTitle-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-new-title",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yeray Boix Torner | Portfolio",
  description: "Yeray Boix Torner | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ptMono.variable} ${roboto.variable} ${inter.variable} ${newTitle.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ViewTransition>
            {children}
          </ViewTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
