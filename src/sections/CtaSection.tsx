import { useState } from "react"
import { AuditUtpModal, type AuditUtpCardData } from "../components/ui/audit-utp-modal"
import { useContactModal } from "../contexts/ContactModalContext"

const utpCardsData: (AuditUtpCardData & { badges?: string[] })[] = [
  {
    id: 0,
    title: "Экспресс-аудит",
    imageSrc: "/animation_1.svg",
    imageAlt: "УТП 1",
    modalImageSrc: "/animation_1.svg",
    badges: ["Быстрый разбор", "Без оплаты"],
    description:
      "Поймём, почему сайт не выводит в топ и не конвертирует рекламный бюджет. Дадим конкретные шаги по SEO и настройке рекламы.",
    benefits: [
      "Анализ видимости в поиске и ключевых запросов",
      "Оценка посадочных и воронки для рекламы",
      "Чек-лист доработок с приоритетами",
    ],
  },
  {
    id: 1,
    title: "Дизайн-аудит",
    imageSrc: "/animation_2.svg",
    imageAlt: "Дизайн-аудит",
    modalImageSrc: "/animation_2.svg",
    badges: ["Глубокий разбор", "Конверсия и UX"],
    description:
      "Разберём, где теряются посетители и почему не оставляют заявки. Покажем узкие места в воронке и что изменить в первую очередь.",
    benefits: [
      "Оценка юзабилити и доверия на сайте",
      "Разбор форм, призывов и сценариев",
      "Рекомендации по увеличению конверсии",
    ],
  },
  {
    id: 2,
    title: "SEO-аудит",
    imageSrc: "/animation_3.svg",
    imageAlt: "SEO-аудит",
    modalImageSrc: "/animation_3.svg",
    badges: ["Поиск и трафик", "Без оплаты"],
    description:
      "Проверим загрузку, мобильную версию и техническую основу сайта. Сайт должен быть быстрым и стабильным — иначе теряются и пользователи, и позиции.",
    benefits: [
      "Скорость загрузки и Core Web Vitals",
      "Корректность вёрстки на разных устройствах",
      "Список технических правок по приоритету",
    ],
  },
]

export function CtaSection() {
  const openContactModal = useContactModal()
  const [selectedCard, setSelectedCard] = useState<AuditUtpCardData | null>(null)

  const handleCardClick = (card: AuditUtpCardData) => {
    setSelectedCard(card)
  }

  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  const handleGetAudit = () => {
    openContactModal()
  }

  return (
    <section className="section section--cta">
      <div className="section--cta__inner">
        <div className="cta-utp">
          <h2 className="cta-utp__title">Разбор сайта под разные задачи</h2>
          <div className="cta-utp__cards">
            {utpCardsData.map((card) => (
              <button
                key={card.id}
                type="button"
                className="cta-utp__card"
                onClick={() => handleCardClick(card)}
              >
                {card.badges && card.badges.length > 0 && (
                  <div className="cta-utp__card-badges-top">
                    {card.badges.map((badge) => (
                      <span key={badge} className="cta-utp__card-badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <div className="cta-utp__card-bg">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="cta-utp__card-img"
                    width={440}
                    height={600}
                    loading="lazy"
                  />
                </div>
                <div className="cta-utp__card-overlay">
                  <h3 className="cta-utp__card-title">{card.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <AuditUtpModal
        isOpen={selectedCard !== null}
        onClose={handleCloseModal}
        card={selectedCard}
        onGetAudit={handleGetAudit}
      />
    </section>
  )
}
