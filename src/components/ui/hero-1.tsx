"use client"

const IconAlignLeft = ({ width = 32, height = 32 }: { width?: number; height?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: `${width}px`, height: `${height}px`, flexShrink: 0 }}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="15" y2="12" />
    <line x1="3" y1="18" x2="18" y2="18" />
  </svg>
)

const heroCards = [
  {
    title: "SEO",
    text: "Сайт становится стабильным источником клиентов из Яндекса и Google за счёт продуманной структуры и SEO-основы.",
  },
  {
    title: "GEO / нейросети",
    text: "Проектируем сайт так, чтобы он попадал в ответы GPT, Алисы и ИИ-поиска и становился дополнительным каналом входящих обращений.",
  },
  {
    title: "UI/UX",
    text: "Продуманная логика, сценарии и дизайн помогают пользователю быстро понять предложение и дойти до целевого действия.",
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
          находят и выбирают<span className="hero-new__dot" aria-hidden />
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

      <div className="hero-new__shapes">
        {heroCards.map((card) => (
          <div key={card.title} className="hero-new__shape-wrap">
            <div className="hero-new__shape-icon" aria-hidden>
              <IconAlignLeft width={22} height={26} />
            </div>
            <img src="/Subtract.svg" alt="" className="hero-new__shape" aria-hidden />
            <div className="hero-new__shape-content">
              <h3 className="hero-new__shape-title">{card.title}</h3>
              <p className="hero-new__shape-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
