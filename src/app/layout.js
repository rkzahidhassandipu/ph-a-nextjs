"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/footer";
import NextAuthProvider from "@/Providers/NextAuthProvider";
import { usePathname } from "next/navigation";
import LayoutWrapper from "./component/LayoutWrapper/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </NextAuthProvider>
      </body>
    </html>
  );
}
