"use client"

import React from 'react';
import Link from 'next/link';
import { StorySection } from '@/components/StorySection';
import { Cinzel } from "next/font/google";
import { siteConfig } from '@/content/site';

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
})

// Palette lives in globals.css → @theme inline → --color-motif-*
// Edit there once to update every component.

export function LoveStory() {
  return (
    <div className="min-h-screen bg-motif-cream overflow-x-hidden">


      <div className="text-center text-motif-medium z-0 relative px-4">
        <div className="w-12 sm:w-16 h-[1px] bg-motif-silver mx-auto mb-4 sm:mb-6 opacity-60"></div>
        <h1
           className="lighten-regular text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-tight"
           style={{ color: 'var(--color-motif-deep)' }}
          >
          Our Love Story
          </h1>

        {/* <p className={`${cinzel.className} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.14em] sm:tracking-[0.18em] font-normal leading-tight text-motif-medium mb-1`}>
          Every photograph tells a story of {siteConfig.couple.brideNickname} & {siteConfig.couple.groomNickname}'s journey to forever
        </p> */}
      </div>

      {/* SECTION 1: Top - Dark */}
      <StorySection
        theme="light"
        layout="image-left"
        isFirst={true}
        title="A Love Meant to Last"
        imageSrc="/Details/IMG_1548.JPG"
        text={
          <>
            <p className="mb-4">
            Rodel’s story began with a quiet journey to Lake Holon. Surrounded by cool air and peaceful views, he found himself standing before the so called kissing stone. In a moment that felt almost like a joke, he leaned in and kissed it, never knowing that such a simple gesture would mark the beginning of a love he never expected.
            </p>
           
          </>
        }
      />

      {/* SECTION 2: Middle - Light */}
      <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/Details/IMG_1549.JPG"
        // title="Became a Couple (2019)"
        text={
          <>
            <p>
            A few days later, on an ordinary evening, he was browsing Facebook. As he casually scrolled through profiles, one smile made him pause, Jezel Mae from Kapalong, Davao del Norte. Without hesitation, he reached out, and as if fate had been waiting, it was a match.

            </p>
          </>
        }
      />

      {/* SECTION 3: Bottom - Dark */}
      <StorySection
        theme="light"
        layout="image-left"
        isLast={true}
        imageSrc="/mobile-background/couple (13).webp"
        // title="The Proposal (2025)"
        text={
          <>
            <p>
            What started as a simple hello turned into long conversations. Daily good mornings and good nights became routine, and little by little, a connection grew between two hearts miles apart, Rodel from Santa Cruz, Davao del Sur, and Jezel Mae from Kapalong, Davao del Norte. What began as a spark soon became a long distance relationship, where love learned to be patient, intentional, and strong despite the space between them.
            </p>
           
          </>
        }
      />
            {/* SECTION 4: Middle - Light */}
            <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/mobile-background/couple (17).webp"
        // title="Became a Couple (2019)"
        text={
          <>
            <p>
            When they finally met, all doubts faded. What once existed only through screens became real, warm, and undeniable. From that moment on, their bond only grew stronger.
<br />
<br />
Not long after, Rodel began to pursue her, genuinely and sincerely, with a heart full of care. In time, Jezel Mae said yes, choosing to take a chance on a love that began in the most unexpected way.

            </p>
          </>
        }
      />

      {/* SECTION 5: Bottom - Dark */}
      <StorySection
        theme="light"
        layout="image-left"
        isLast={true}
        imageSrc="/mobile-background/couple (10).webp"
        // title="The Proposal (2025)"
        text={
          <>
            <p>
            Through distance, late night calls, and days spent missing each other, they chose to stay. They chose to love. They chose to become each other’s home.
            <br />
            <br />
From a kiss on a stone, to a single moment that changed everything.
<br />
<br />
 From miles apart, to standing side by side.
<br />
<br />
Now, they step into the next chapter of their story together as one.
<br />
<br />
On this day, we invite you to witness our forever 💍

            </p>
           
          </>
        }
      />
      
      {/* Footer Decoration */}
      <div className="bg-motif-cream pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 text-center text-motif-deep z-0 relative px-4">
        <div className="w-12 sm:w-16 h-[1px] bg-motif-silver mx-auto mb-4 sm:mb-6 opacity-60"></div>
        <Link 
          href="#guest-list"
          className={`${cinzel.className} group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-[0.7rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-normal text-motif-cream bg-motif-deep rounded-sm border border-motif-deep transition-all duration-300 hover:bg-motif-accent hover:border-motif-accent hover:text-motif-cream hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motif-soft/50 focus-visible:ring-offset-2 focus-visible:ring-offset-motif-cream`}
        >
          <span className="relative z-10">Join us</span>
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 rounded-sm bg-motif-soft opacity-0 group-hover:opacity-25 blur-md transition-opacity duration-300 -z-0"></div>
        </Link>
      </div>

    </div>
  );
}

