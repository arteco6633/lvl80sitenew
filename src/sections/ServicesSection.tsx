import type { RefObject } from "react"

interface ServicesSectionProps {
  sectionRef: RefObject<HTMLElement | null>
  nichesBlockRef: RefObject<HTMLDivElement | null>
  servicesInView: boolean
  nichesInView: boolean
  nichesFilter: string
}

const NICHE_FILTERS = ["IT", "B2B", "Услуги", "Сложные продукты", "Экспертные компании", "Медиа", "Образование", "Премиум-сегмент", "Локально"]

export function ServicesSection({
  sectionRef,
  nichesBlockRef,
  servicesInView,
  nichesInView,
  nichesFilter,
}: ServicesSectionProps) {
  return (
    <section id="services" className="strategy-section" ref={sectionRef}>
      <div className="strategy-section__inner">
        <h2 className="strategy-section__ghost-title">
          <span className="text-white">
            От стратегии<br className="strategy-section__ghost-br" /> до запуска
          </span>
          <span className="strategy-section__ghost-dot" aria-hidden />
        </h2>
        <div className={`strategy-section__grid${servicesInView ? " strategy-section__grid--in-view" : ""}`}>
          <div className="strategy-section__glow" aria-hidden="true" />
          <article className="strategy-card">
            <h3 className="strategy-card__title">SEO / стратегия</h3>
            <p className="strategy-card__text">
              Анализируем нишу, конкурентов и спрос. Настраиваем SEO‑основу, структуру и
              контент так, чтобы сайт не просто индексировался, а приводил целевой трафик.
            </p>
            <span className="strategy-card__number">01</span>
          </article>
          <article className="strategy-card">
            <h3 className="strategy-card__title">SEO / стратегия</h3>
            <p className="strategy-card__text">
              Анализируем нишу, конкурентов и спрос. Настраиваем SEO‑основу, структуру и
              контент так, чтобы сайт не просто индексировался, а приводил целевой трафик.
            </p>
            <span className="strategy-card__number">01</span>
          </article>
          <article className="strategy-card">
            <h3 className="strategy-card__title">UX / UI‑дизайн</h3>
            <p className="strategy-card__text">
              Проектируем интерфейсы с понятной логикой и визуальной иерархией. Дизайн, в
              который легко поверить и которым удобно пользоваться.
            </p>
            <span className="strategy-card__number">02</span>
          </article>
          <article className="strategy-card">
            <h3 className="strategy-card__title">Веб‑разработка</h3>
            <p className="strategy-card__text">
              Разрабатываем быстрые, стабильные и масштабируемые сайты. Чистый код,
              адаптивность, интеграции и надёжная техническая база.
            </p>
            <span className="strategy-card__number">03</span>
          </article>
          <article className="strategy-card">
            <h3 className="strategy-card__title">Результат</h3>
            <p className="strategy-card__text">
              Берём ответственность за итог: выстраиваем решения так, чтобы продукт работал
              стабильно, вызывал доверие и приносил измеримый результат бизнесу.
            </p>
            <span className="strategy-card__number">04</span>
          </article>
          <article className="strategy-card">
            <h3 className="strategy-card__title">Поддержка</h3>
            <p className="strategy-card__text">
              Сопровождаем проекты после запуска: доработки, обновления и техническая поддержка.
            </p>
            <span className="strategy-card__number">06</span>
          </article>
        </div>

        <div ref={nichesBlockRef} className={`niches-block${nichesInView ? " niches-block--in-view" : ""}`}>
          <h2 className="niches-block__title">
            Решение для роста
            <br />
            бизнеса в разных нишах<span className="niches-block__dot" aria-hidden />
          </h2>
          <div className="niches-block__filters">
            {NICHE_FILTERS.map((label) => (
              <button
                key={label}
                type="button"
                disabled
                className={`niches-block__filter ${nichesFilter === label ? "niches-block__filter--active" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="niches-block__grid">
            <div className="niches-block__row">
              <article className="niches-card niches-card--1">
                <div className="niches-card__icon" aria-hidden>
                  <img src="/niches-icon.svg" alt="" width={48} height={48} />
                </div>
                <h3 className="niches-card__title">Позиционирование</h3>
                <p className="niches-card__text">Посетитель за первые секунды понимает, кто вы, какую задачу решаете и почему к вам имеет смысл обратиться именно сейчас.</p>
              </article>
              <article className="niches-card niches-card--2">
                <div className="niches-card__icon" aria-hidden>
                  <img src="/niches-icon.svg" alt="" width={48} height={48} />
                </div>
                <h3 className="niches-card__title">Входящий поток</h3>
                <p className="niches-card__text">Сайт начинает приводить клиентов из поиска и нейросетей, и работает как самостоятельный канал привлечения, а не только как поддержка рекламы.</p>
              </article>
            </div>
            <div className="niches-block__row">
              <article className="niches-card niches-card--3">
                <div className="niches-card__icon" aria-hidden>
                  <img src="/niches-icon.svg" alt="" width={48} height={48} />
                </div>
                <h3 className="niches-card__title">Конверсия</h3>
                <p className="niches-card__text">Структура и пользовательские сценарии выстроены так, чтобы больше посетителей доходили до заявки с того же объёма трафика.</p>
              </article>
              <article className="niches-card niches-card--4">
                <div className="niches-card__icon" aria-hidden>
                  <img src="/niches-icon.svg" alt="" width={48} height={48} />
                </div>
                <h3 className="niches-card__title">Независимость</h3>
                <p className="niches-card__text">Посетитель за первые секунды понимает, кто вы, какую задачу решаете и почему к вам имеет смысл обратиться именно сейчас.</p>
              </article>
              <article className="niches-card niches-card--5">
                <div className="niches-card__icon" aria-hidden>
                  <img src="/niches-icon.svg" alt="" width={48} height={48} />
                </div>
                <h3 className="niches-card__title">Масштабируемость</h3>
                <p className="niches-card__text">Сайт можно развивать вместе с бизнесом: добавлять новые услуги, направления и продукты без необходимости полного редизайна.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
