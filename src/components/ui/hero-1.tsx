"use client"

import { Typewriter } from "./typewriter-text"

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
        <div className="hero-new__buttons">
          <button
            type="button"
            className="hero-new__btn hero-new__btn--primary"
            onClick={onContactClick}
          >
            Связаться с нами
          </button>
          <button
            type="button"
            className="hero-new__btn hero-new__btn--secondary"
            onClick={onAuditClick}
          >
            Получить аудит
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
