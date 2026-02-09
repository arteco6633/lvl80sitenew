interface TariffsSectionProps {
  onContactClick?: () => void
}

export function TariffsSection({ onContactClick }: TariffsSectionProps) {
  return (
    <section id="tariffs" className="section section--tariffs">
      <div className="tariffs__inner">
        <div className="tariffs-header">
          <h2 className="tariffs-header__ghost">
            <span className="tariffs-header__ghost-manrope">Пакеты</span>
            <span className="tariffs-header__ghost-accent">&nbsp;тарифов</span>
            <span className="tariffs-header__dot" aria-hidden />
          </h2>
        </div>
        <div className="tariffs-grid">
          <article
            className="tariff-card"
            role="button"
            tabIndex={0}
            onClick={() => onContactClick?.()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onContactClick?.()
              }
            }}
            aria-label="Выбрать тариф Стандарт"
          >
            <h3 className="tariff-card__title">Стандарт</h3>
            <p className="tariff-card__subtitle">
              Сайт под ключ для старта бизнеса или услуги. Понятная структура, аккуратный дизайн и базовая SEO-основа, чтобы сайт находили и оставляли заявки.
            </p>
            <ul className="tariff-card__list">
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Кол-во страниц</span>
                <span className="tariff-card__row-value">до 5 страниц</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Время</span>
                <span className="tariff-card__row-value">3–4 недели</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Включено</span>
                <span className="tariff-card__row-value">Продуманный дизайн и SEO-основа, чтобы сайт приводил клиентов</span>
              </li>
            </ul>
            <p className="tariff-card__price">от 120&nbsp;000 рублей</p>
            <button type="button" className="tariff-card__btn" onClick={(e) => { e.stopPropagation(); onContactClick?.(); }}>Выбрать тариф</button>
          </article>

          <article
            className="tariff-card tariff-card--active"
            role="button"
            tabIndex={0}
            onClick={() => onContactClick?.()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onContactClick?.()
              }
            }}
            aria-label="Выбрать тариф Продвинутый"
          >
            <h3 className="tariff-card__title">Продвинутый</h3>
            <p className="tariff-card__subtitle">
              Сайт под ключ для привлечения клиентов и роста бизнеса. Продумываем путь пользователя, дизайн и структуру так, чтобы сайту доверяли и чаще оставляли заявки.
            </p>
            <ul className="tariff-card__list">
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Кол-во страниц</span>
                <span className="tariff-card__row-value">до 15 страниц</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Время</span>
                <span className="tariff-card__row-value">4–8 недель</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Включено</span>
                <span className="tariff-card__row-value">Продуманный дизайн, расширенная SEO-оптимизация, для стабильного роста заявок, управление сайтом</span>
              </li>
            </ul>
            <p className="tariff-card__price">от 180&nbsp;000 рублей</p>
            <button type="button" className="tariff-card__btn tariff-card__btn--primary" onClick={(e) => { e.stopPropagation(); onContactClick?.(); }}>Выбрать тариф</button>
          </article>

          <article
            className="tariff-card"
            role="button"
            tabIndex={0}
            onClick={() => onContactClick?.()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onContactClick?.()
              }
            }}
            aria-label="Выбрать тариф Премиум"
          >
            <h3 className="tariff-card__title">Премиум</h3>
            <p className="tariff-card__subtitle">
              Индивидуальный сайт как полноценный канал продаж и роста. Проектируем сложную структуру, удобную логику и дизайн с запасом под масштабирование бизнеса.
            </p>
            <ul className="tariff-card__list">
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Кол-во страниц</span>
                <span className="tariff-card__row-value">от 15 страниц</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Время</span>
                <span className="tariff-card__row-value">8–16 недель</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Включено</span>
                <span className="tariff-card__row-value">Индивидуальный дизайн, SEO-стратегия, управление сайтом и поддержка после старта для устойчивого роста</span>
              </li>
            </ul>
            <p className="tariff-card__price">от 220&nbsp;000 рублей</p>
            <button type="button" className="tariff-card__btn" onClick={(e) => { e.stopPropagation(); onContactClick?.(); }}>Выбрать тариф</button>
          </article>
        </div>
      </div>
    </section>
  )
}
