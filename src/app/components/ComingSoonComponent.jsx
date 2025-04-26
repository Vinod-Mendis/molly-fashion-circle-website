/** @format */
"use client";
import FloatingDots from "@/app/components/coming-soon/FloatingDots";
import Image from "next/image";
import React from "react";

export default function ComingSoonComponent() {
  return (
    <main className="h-[100svh] w-full flex flex-col items-center justify-center p-4 bg-white bg-grid-pattern relative overflow-hidden">
      {/* Top left shadow blob */}
      <Image
        src="/images/coming-soon/shadow_blob.png"
        alt="shadow-blob-top-left"
        width={800}
        height={800}
        className="absolute -top-50 -left-50 md:-top-100 md:-left-100"
        
      />
      {/* Bottom right shadow blob */}
      <Image
        src="/images/coming-soon/shadow_blob.png"
        alt="shadow-blob-bottom-right"
        width={800}
        height={800}
        className="absolute -bottom-50 -right-50 md:-bottom-100 md:-right-100 scale-150 opacity-80"
        
      />

      <div className="max-w-xl w-full flex flex-col items-center text-center z-10">
        <div
          className="mb-4 sm:mb-8 animate-fade-up"
          style={{ animationDelay: "0ms" }}>
          <Image
            src="/images/nav-and-footer/navbar-molly_logo.png"
            alt="MOLLY THE FASHION CIRCLE"
            width={200}
            height={200}
            className="w-40 sm:w-60"
            
          />
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111] mb-6 whitespace-nowrap animate-fade-up"
          style={{ animationDelay: "200ms" }}>
          We&apos;re Launching Soon!
        </h1>

        <p
          className="text-sm text-[#999] w-full max-w-xs sm:max-w-md leading-relaxed animate-fade-up"
          style={{ animationDelay: "400ms" }}>
          Great things are on the horizon! We&apos;re preparing a fresh new
          experience and can&apos;t wait to share it with you. Stay Tuned!
        </p>
      </div>
      <div
        className="animate-fade-up  absolute bottom-10"
        style={{ animationDelay: "600ms" }}>
        <FloatingDots />
      </div>
    </main>
  );
}
