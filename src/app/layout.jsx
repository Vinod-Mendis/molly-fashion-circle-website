/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ViewTransitions } from "next-view-transitions";
import Footer from "./components/Footer";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Molly Fashion",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <SmoothScrollWrapper>
            <header className="relative w-screen lg:max-w-7xl mx-auto z-50">
              {/* <Navbar /> */}
            </header>
            <main className="">{children}</main>
            <Footer />
          </SmoothScrollWrapper>
        </body>
      </html>
    </ViewTransitions>
  );
}
