"use client"

import { useState } from "react"
import Image from "next/image"
import { Section } from "@/components/section"
import { Cinzel, Cormorant_Garamond, Montserrat } from "next/font/google"
import { siteConfig } from "@/content/site"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
})

const GCASH_QR = [
  { id: "gcash1", src: "/QR/gcash.png", label: "GCash 1" },
  { id: "gcash2", src: "/QR/gcash2.png", label: "GCash 2" },
] as const

// Colors sourced from globals.css @theme inline — edit there to update everywhere

export function Registry() {
  const [activeQr, setActiveQr] = useState<"gcash1" | "gcash2">("gcash1")

  return (
    <Section
      id="registry"
      className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-motif-cream/60" />
          <div className="w-1.5 h-1.5 bg-motif-cream/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-motif-cream/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-motif-cream/80 rounded-full" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-motif-cream/60" />
        </div>
        
        <h2 className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-motif-cream mb-2 sm:mb-3 md:mb-4">
          Gift Guide
        </h2>
        
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-motif-cream/90 font-light max-w-2xl mx-auto leading-relaxed px-2">
        Your presence on our special day is already the greatest gift we could ask for, and celebrating this moment with you means so much to us.

If you wish to bless us further as we begin our journey as husband and wife, you may scan any of the codes below to share your love and support. 

We truly appreciate and thank you for the love and generosity. This means so much as we step into this new chapter of our lives. 

        </p>
        
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-1.5 h-1.5 bg-motif-cream/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-motif-cream/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-motif-cream/80 rounded-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
  {/* GCASH QR toggle */}
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
        <h3 className={`${cinzel.className} text-xl sm:text-2xl md:text-3xl font-normal text-motif-cream text-center mb-4 sm:mb-6`}>
          GCASH
        </h3>
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Toggle buttons */}
          <div className="inline-flex rounded-lg border border-motif-cream/40 bg-motif-cream/5 p-1">
            {GCASH_QR.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveQr(item.id)}
                className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeQr === item.id
                    ? "bg-motif-cream/20 text-motif-cream"
                    : "text-motif-cream/80 hover:text-motif-cream hover:bg-motif-cream/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* Active QR image */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-xl overflow-hidden bg-white shadow-lg">
            <Image
              src={activeQr === "gcash1" ?  GCASH_QR[0].src : GCASH_QR[1].src}
              alt={`GCash QR code - ${activeQr === "gcash1" ? GCASH_QR[0].label : GCASH_QR[1].label}`}
              fill
              className="object-contain p-2"
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-motif-cream/90 italic">
            Thank you from the bottom of our hearts.
          </p>
        </div>
        <p className="text-xs sm:text-sm text-motif-cream/90 italic text-center">
            With love,
            <br />
            {siteConfig.couple.brideNickname} and {siteConfig.couple.groomNickname}
          </p>
        </div>
      </div>
    </Section>
  );
}
