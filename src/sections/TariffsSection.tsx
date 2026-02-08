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
          <article className="tariff-card">
            <h3 className="tariff-card__title">Базовый</h3>
            <p className="tariff-card__subtitle">
              Лендинг или корпоративный сайт с дизайном и SEO для старта продвижения.
            </p>
            <ul className="tariff-card__list">
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Время</span>
                <span className="tariff-card__row-value">12 недель</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Услуги</span>
                <span className="tariff-card__row-value">12 недель</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Включено</span>
                <span className="tariff-card__row-value">12 недель</span>
              </li>
            </ul>
            <p className="tariff-card__price">от 180&nbsp;000 рублей</p>
            <button type="button" className="tariff-card__btn" onClick={onContactClick}>Выбрать тариф</button>
          </article>

          <article className="tariff-card tariff-card--active">
            <h3 className="tariff-card__title">Стандарт</h3>
            <p className="tariff-card__subtitle">
              Стратегия, дизайн, разработка и запуск. Заявки из поиска.
            </p>
            <ul className="tariff-card__list">
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Время</span>
                <span className="tariff-card__row-value">12 недель</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Услуги</span>
                <span className="tariff-card__row-value">12 недель</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Включено</span>
                <span className="tariff-card__row-value">12 недель</span>
              </li>
            </ul>
            <p className="tariff-card__price">от 180&nbsp;000 рублей</p>
            <button type="button" className="tariff-card__btn tariff-card__btn--primary" onClick={onContactClick}>Выбрать тариф</button>
          </article>

          <article className="tariff-card">
            <h3 className="tariff-card__title">Премиум</h3>
            <p className="tariff-card__subtitle">
              Аудит, премиальный дизайн и сопровождение. Конверсия и масштаб.
            </p>
            <ul className="tariff-card__list">
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Время</span>
                <span className="tariff-card__row-value">12 недель</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Услуги</span>
                <span className="tariff-card__row-value">12 недель</span>
              </li>
              <li className="tariff-card__row">
                <span className="tariff-card__row-label">Включено</span>
                <span className="tariff-card__row-value">12 недель</span>
              </li>
            </ul>
            <p className="tariff-card__price">от 180&nbsp;000 рублей</p>
            <button type="button" className="tariff-card__btn" onClick={onContactClick}>Выбрать тариф</button>
          </article>
        </div>
      </div>
    </section>
  )
}
