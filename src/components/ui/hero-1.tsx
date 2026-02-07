"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, FileSearch } from "lucide-react"
import { Typewriter } from "./typewriter-text"

type ActiveButton = "primary" | "secondary"

const heroCards = [
  {
    title: "SEO",
    text: "Сайт становится стабильным источником клиентов из Яндекса и Google за счёт продуманной структуры и SEO-основы.",
  },
  {
    title: "GEO/AI",
    text: "Сайт который попадает в ответы GPT, Алисы и AI поиска и становился дополнительным каналом обращений.",
  },
  {
    title: "UI/UX",
    text: "Сайт с продуманной логикой, сценарием и дизайном который доведет пользователя до целевого действия.",
  },
]

interface HeroProps {
  onContactClick?: () => void
  onAuditClick?: () => void
}

export function Hero({
  onContactClick,
  onAuditClick,
}: HeroProps) {
  const [activeButton, setActiveButton] = useState<ActiveButton>("primary")
  const buttonsRef = useRef<HTMLDivElement>(null)
  const hasHoverRef = useRef(true)

  useEffect(() => {
    hasHoverRef.current = window.matchMedia("(hover: hover)").matches
  }, [])

  const handleBlur = (e: React.FocusEvent) => {
    const related = e.relatedTarget as Node | null
    if (buttonsRef.current?.contains(related)) return

    requestAnimationFrame(() => {
      if (!buttonsRef.current?.contains(document.activeElement)) {
        setActiveButton("primary")
      }
    })
  }

  const handleMouseLeave = () => {
    if (hasHoverRef.current) {
      setActiveButton("primary")
    }
  }

  return (
    <section id="hero" className="hero-new">
      <div className="hero-new__gradient" aria-hidden />

      <div className="hero-new__content">
        <h1 className="hero-new__title">
          Мы делаем сайты, которые
          <br />
          <Typewriter
            text={["находят и выбирают", "приводят клиентов", "работают на результат"]}
            speed={80}
            deleteSpeed={40}
            delay={2000}
            loop
            cursor=""
            className="hero-new__title-inline"
          />
          <span className="hero-new__dot" aria-hidden>|</span>
        </h1>
        <div
          ref={buttonsRef}
          className="hero-new__buttons"
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            className={`hero-new__btn hero-new__btn--primary hero-new__btn--gradient ${activeButton === "primary" ? "hero-new__btn--expanded" : ""}`}
            style={
              {
                "--gradient-from": "#ff5c10",
                "--gradient-to": "#ff9966",
              } as React.CSSProperties
            }
            onMouseEnter={() => hasHoverRef.current && setActiveButton("primary")}
            onFocus={() => hasHoverRef.current && setActiveButton("primary")}
            onBlur={handleBlur}
            onClick={() => {
              setActiveButton("primary")
              onContactClick?.()
            }}
          >
            <span className="hero-new__btn-gradient-bg" aria-hidden />
            <span className="hero-new__btn-glow" aria-hidden />
            <span className="hero-new__btn-icon" aria-hidden>
              <MessageCircle size={24} strokeWidth={1.5} />
            </span>
            <span className="hero-new__btn-text">Связаться с нами</span>
          </button>
          <button
            type="button"
            className={`hero-new__btn hero-new__btn--secondary hero-new__btn--gradient ${activeButton === "secondary" ? "hero-new__btn--expanded" : ""}`}
            style={
              {
                "--gradient-from": "#56CCF2",
                "--gradient-to": "#2F80ED",
              } as React.CSSProperties
            }
            onMouseEnter={() => hasHoverRef.current && setActiveButton("secondary")}
            onFocus={() => hasHoverRef.current && setActiveButton("secondary")}
            onBlur={handleBlur}
            onClick={() => {
              setActiveButton("secondary")
              onAuditClick?.()
            }}
          >
            <span className="hero-new__btn-gradient-bg" aria-hidden />
            <span className="hero-new__btn-glow" aria-hidden />
            <span className="hero-new__btn-icon" aria-hidden>
              <FileSearch size={24} strokeWidth={1.5} />
            </span>
            <span className="hero-new__btn-text">Получить аудит</span>
          </button>
        </div>
      </div>

      <div className="hero-new__shapes-wrapper">
        <div className="hero-new__shapes">
        {heroCards.map((card) => (
          <div key={card.title} className="hero-new__shape-wrap">
            <div className="hero-new__shape-header">
              <h3 className="hero-new__shape-title">{card.title}</h3>
            </div>
            <img src="/Card-1.svg" alt="" className="hero-new__shape" aria-hidden />
            <div className="hero-new__shape-content">
              <p className="hero-new__shape-text">{card.text}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
