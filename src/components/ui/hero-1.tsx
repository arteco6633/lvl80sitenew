"use client"

import { ArrowRight } from "lucide-react"

import { HeroShapeBackground } from "@/components/ui/shape-landing-hero"
import logoHero from "@/assets/LVL 80.Studio (1).svg"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "LVL 80.STUDIO",
  title: _title,
  subtitle: _subtitle,
  ctaLabel = "Связаться с нами",
  ctaHref = "#contacts",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full -mt-24 pt-[16rem] px-6 text-center md:px-8 
      min-h-screen bg-black"
    >
      <HeroShapeBackground />
      {/* Eyebrow / логотип */}
      {eyebrow && (
        <a href="#hero" className="group flex justify-center">
          <img
            src={logoHero}
            alt={eyebrow}
            className="h-4 md:h-5 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />
        </a>
      )}

      {/* Title */}
      <h1
        className="relative z-10 -translate-y-4 text-balance 
        py-6 text-5xl font-extralight leading-none tracking-tighter 
        text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Создаём{" "}
        <span className="font-apparel-italic hero-title-neon">решения,</span> которые работают на{" "}
        <span className="font-apparel-italic hero-title-neon">результат</span>
      </h1>

      {/* CTA */}
      {ctaLabel && (
        <div className="flex justify-center mt-6">
          <a
            href={ctaHref}
            className="z-20 inline-flex items-center justify-center gap-2 w-[336px] h-[46px] rounded-[4px] bg-transparent text-white border border-white text-[16px] font-normal tracking-[0.02em] transition-all duration-300 hover:border-white/90"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
          </a>
        </div>
      )}
    </section>
  )
}

