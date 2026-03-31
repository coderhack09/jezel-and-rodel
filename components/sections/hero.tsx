"use client"

import { useEffect, useState } from "react"
import { CloudinaryImage } from "@/components/ui/cloudinary-image"
import { siteConfig } from "@/content/site"

export function Hero() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 380),
      setTimeout(() => setPhase(3), 640),
      setTimeout(() => setPhase(4), 860),
      setTimeout(() => setPhase(5), 1060),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const vis = (minPhase: number) =>
    phase >= minPhase
      ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
      : "opacity-0 translate-y-5 transition-all duration-700 ease-out"

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Main content */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-16">
        {/* Card container */}
        <div
          className={`w-full max-w-lg sm:max-w-xl rounded-[24px] sm:rounded-[28px] px-7 sm:px-12 py-10 sm:py-14 text-center shadow-2xl transition-all duration-700 ease-out ${
            phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            background: "rgba(0, 20, 50, 0.72)",
            border: "1px solid rgba(178, 205, 224, 0.13)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            // boxShadow:
            //   "0 24px 80px rgba(0, 8, 20, 0.55), inset 0 1px 0 rgba(178, 205, 224, 0.07)",
          }}
        >

          {/* Monogram + glow ring */}
          <div className="flex justify-center mb-8">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute rounded-full animate-loader-glow"
                style={{
                  width: "160px",
                  height: "160px",
                  background:
                    "radial-gradient(circle, rgba(100, 151, 178, 0.22) 0%, transparent 65%)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: "90px",
                  height: "90px",
                  border: "1px solid rgba(178, 205, 224, 0.14)",
                }}
              />
              <CloudinaryImage
                src="/monogram/monogram.png"
                alt={`${siteConfig.couple.brideNickname} & ${siteConfig.couple.groomNickname} monogram`}
                width={160}
                height={160}
                className="relative h-20 w-20 sm:h-24 sm:w-24 object-contain object-center brightness-0 invert"
                style={{ opacity: 0.88 }}
                priority
              />
            </div>
          </div>

          {/* Together with their families */}
          <p
            className={`${vis(2)}`}
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: "clamp(1.25rem, 3.5vw, 1.65rem)",
              color: "var(--color-motif-cream)",
            }}
          >
            Together with their families
          </p>

          {/* Year rule */}
          <div className={`flex items-center gap-3 justify-center mt-5 mb-4 ${vis(2)}`}>
            <div
              className="h-px flex-1"
              style={{ background: "linear-gradient(to left, rgba(178, 205, 224, 0.26), transparent)" }}
            />
            <span
              style={{
                fontFamily: '"Cinzel", serif',
                fontSize: "0.5rem",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "var(--color-motif-cream)",
              }}
            >
              Est. {new Date(siteConfig.wedding.date).getFullYear()}
            </span>
            <div
              className="h-px flex-1"
              style={{ background: "linear-gradient(to right, rgba(178, 205, 224, 0.26), transparent)" }}
            />
          </div>

          {/* "to celebrate the marriage of" */}
          <p
            className={`${vis(2)}`}
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: "clamp(1.05rem, 2.8vw, 1.35rem)",
              color: "var(--color-motif-cream)",
            }}
          >
            to celebrate the marriage of
          </p>

          {/* Couple names */}
          <div className={`mt-6 ${vis(3)}`}>
            <p
              className="lighten-regular"
              style={{
                fontSize: "clamp(2.5rem, 8.5vw, 5.5rem)",
                color: "var(--color-motif-cream)",
                letterSpacing: "0.12em",
                textShadow: "0 2px 34px rgba(100, 151, 178, 0.4)",
              }}
            >
              {siteConfig.couple.brideNickname.trim()}
            </p>

            {/* Ampersand divider */}
            <div className="flex items-center gap-3 justify-center my-2">
              <div
                className="h-px flex-1 max-w-[55px]"
                style={{ background: "linear-gradient(to left, rgba(178, 205, 224, 0.2), transparent)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-imperial-script), cursive",
                  fontSize: "clamp(1.5rem, 4.5vw, 2.1rem)",
                  color: "var(--color-motif-cream)",
                  fontWeight: 400,
                }}
              >
                and
              </span>
              <div
                className="h-px flex-1 max-w-[55px]"
                style={{ background: "linear-gradient(to right, rgba(178, 205, 224, 0.2), transparent)" }}
              />
            </div>

            <p
              className="lighten-regular"
              style={{
                fontSize: "clamp(2.5rem, 8.5vw, 5.5rem)",
                color: "var(--color-motif-cream)",
                letterSpacing: "0.12em",
                textShadow: "0 2px 34px rgba(100, 151, 178, 0.4)",
              }}
            >
              {siteConfig.couple.groomNickname.trim()}
            </p>
          </div>

          {/* Diamond rule */}
          <div className={`flex items-center gap-3 justify-center mt-7 mb-1 ${vis(4)}`}>
            <div
              className="h-px flex-1"
              style={{ background: "linear-gradient(to left, rgba(178, 205, 224, 0.2), transparent)" }}
            />
            <span style={{ color: "rgba(178, 205, 224, 0.35)", fontSize: "5px" }}>◆</span>
            <div
              className="h-px flex-1"
              style={{ background: "linear-gradient(to right, rgba(178, 205, 224, 0.2), transparent)" }}
            />
          </div>

          {/* Date */}
          <p
            className={`mt-4 ${vis(4)}`}
            style={{
              fontFamily: '"Cinzel", serif',
              fontSize: "clamp(0.52rem, 1.4vw, 0.64rem)",
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "var(--color-motif-cream)",
            }}
          >
            {siteConfig.ceremony.day}
            <span className="mx-2" style={{ opacity: 0.5 }}>·</span>
            {siteConfig.wedding.date.toUpperCase()}
            <span className="mx-2" style={{ opacity: 0.5 }}>·</span>
            {siteConfig.ceremony.time}
          </p>

          {/* Ceremony & reception details */}
          <div className={`mt-7 space-y-4 ${vis(5)}`}>
            <div className="space-y-1">
              <p
                style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: "clamp(0.52rem, 1.4vw, 0.64rem)",
                  letterSpacing: "0.34em",
                  textTransform: "uppercase",
                  color: "var(--color-motif-cream)",
                }}
              >
                Ceremony
              </p>
              <p
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  fontSize: "clamp(1rem, 2.8vw, 1.3rem)",
                  color: "var(--color-motif-cream)",
                }}
              >
                {siteConfig.ceremony.location}
              </p>
            </div>

            <div className="space-y-1">
              <p
                style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: "clamp(0.52rem, 1.4vw, 0.64rem)",
                  letterSpacing: "0.34em",
                  textTransform: "uppercase",
                  color: "var(--color-motif-cream)",
                }}
              >
                Reception to follow
              </p>
              <p
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  fontSize: "clamp(1rem, 2.8vw, 1.3rem)",
                  color: "var(--color-motif-cream)",
                }}
              >
                {siteConfig.reception.location}
              </p>
            </div>
          </div>

          {/* RSVP button */}
          <div className={`mt-10 flex justify-center ${vis(5)}`}>
            <a
              href="#guest-list"
              className="inline-flex items-center justify-center px-10 py-3 rounded-sm transition-all duration-300 hover:bg-[rgba(1,91,151,0.45)] hover:border-[rgba(178,205,224,0.5)]"
              style={{
                fontFamily: '"Cinzel", serif',
                fontSize: "0.58rem",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#EEF4FA",
                border: "1px solid rgba(178, 205, 224, 0.28)",
                background: "rgba(1, 91, 151, 0.22)",
                boxShadow: "0 8px 32px rgba(1, 91, 151, 0.28)",
              }}
            >
              RSVP
            </a>
          </div>

        </div>{/* end card */}
      </div>
    </section>
  )
}
