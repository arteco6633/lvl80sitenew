import "./App.css"
import headerLogo from "../LVL 80.Studio (1).svg"
import projectHero from "../Bb_wheels.png"
import projectMockup from "../MOCKUP 5.png"
import projectMockupBottom from "../MOCKUP 3.png"
import rocketIcon from "../Rocket.svg"
import { Target, Layers, TrendingUp } from "lucide-react"
import { Hero } from "./components/ui/hero-1"

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header__logo">
          <img src={headerLogo} alt="LVL 80.Studio" className="header__logo-image" />
        </div>
        <nav className="header__nav">
          <a href="#services">Услуги</a>
          <a href="#about">Про нас</a>
          <a href="#projects">Проекты</a>
          <a href="#tariffs">Тарифы</a>
        </nav>
        <div className="header__actions">
          <a href="tel:+79609319494" className="header__phone">
            8&nbsp;960&nbsp;931&nbsp;94&nbsp;94
          </a>
          <button className="header__cta">Связаться с нами</button>
        </div>
      </header>

      <main>
        <Hero
          title="Создаём решения, которые работают на результат"
          subtitle="От стратегии до запуска — полное сопровождение digital‑продукта с акцентом на бизнес‑показатели."
          eyebrow="LVL 80.STUDIO"
          ctaLabel="Связаться с нами"
          ctaHref="#contacts"
        />

        <section id="about" className="about-section">
          <div className="about-section__inner">
            <div className="about-section__ghost-title">Что делаем</div>
            <div className="about-section__content">
            <div className="about-section__header">
              <h2 className="about-section__title">
                Превращаем сайты в рабочие инструменты роста бизнеса
              </h2>
            </div>
            <div className="about-section__columns">
              <article className="about-section__column">
                <div className="about-section__icon" aria-hidden>
                  <Target className="about-section__icon-svg" strokeWidth={1.5} />
                </div>
                <h3 className="about-section__column-title">Стратегично</h3>
                <p className="about-section__column-text">
                  Понимаем суть бизнеса и проектируем решения с фокусом на цели, а не просто
                  визуал.
                </p>
              </article>
              <article className="about-section__column">
                <div className="about-section__icon" aria-hidden>
                  <Layers className="about-section__icon-svg" strokeWidth={1.5} />
                </div>
                <h3 className="about-section__column-title">Системно</h3>
                <p className="about-section__column-text">
                  Создаём цифровые продукты с логикой, сценариями и основой для роста и
                  масштабирования.
                </p>
              </article>
              <article className="about-section__column">
                <div className="about-section__icon" aria-hidden>
                  <TrendingUp className="about-section__icon-svg" strokeWidth={1.5} />
                </div>
                <h3 className="about-section__column-title">Результативно</h3>
                <p className="about-section__column-text">
                  Работаем так, чтобы цифровой продукт приносил реальную пользу бизнесу.
                </p>
              </article>
            </div>
          </div>
          </div>
        </section>

        <section id="services" className="strategy-section">
          <div className="strategy-section__inner">
            <div className="strategy-section__ghost-title"><span className="text-white">От стратегии до </span><span className="font-apparel-italic" style={{ color: '#ff5c10' }}>запуска</span></div>
            <div className="strategy-section__grid">
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
                <h3 className="strategy-card__title">Доверие / результат</h3>
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
          </div>
          <div className="strategy-section__glow" aria-hidden="true" />
        </section>

        <section id="projects" className="section section--projects">
          <div className="section--projects__inner">
            <div className="section__header">
              <p className="section__label"><span className="section__label-hero-style">Наши</span> проекты</p>
              <h2 className="section__title">Кейсы, за которые не стыдно</h2>
            </div>
            <div className="projects-strip">
            <div className="projects-row projects-row--top">
              <div className="projects-strip__item projects-strip__item--wide">
                <img
                  src={projectHero}
                  alt="BB Wheels"
                  className="projects-strip__image"
                />
                <div className="projects-strip__overlay" />
                <div className="projects-strip__caption">
                  <h3>BB Wheels</h3>
                  <div className="projects-strip__tags">
                    <div className="projects-strip__description">
                      <span>UX/UI оптимизация</span>
                    </div>
                    <div className="projects-strip__description">
                      <span>SEO продвижение</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projects-strip__item">
                <img
                  src={projectMockup}
                  alt="MOCKUP 5"
                  className="projects-strip__image"
                />
                <div className="projects-strip__overlay" />
                <div className="projects-strip__caption">
                  <h3>Avilon Climate</h3>
                  <div className="projects-strip__tags">
                    <div className="projects-strip__description">
                      <span>От анализа до запуска</span>
                    </div>
                    <div className="projects-strip__description">
                      <span>SEO-продвижение</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-row projects-row--bottom">
              <div className="projects-strip__item">
                <div className="projects-strip__overlay" />
                <div className="projects-strip__caption">
                  <h3>Premium websites crafts</h3>
                  <div className="projects-strip__description">
                    <span>UX/UI оптимизация</span>
                  </div>
                </div>
              </div>
              <div className="projects-strip__item projects-strip__item--wide">
                <img
                  src={projectMockupBottom}
                  alt="MOCKUP 3"
                  className="projects-strip__image"
                />
                <div className="projects-strip__overlay" />
                <div className="projects-strip__caption">
                  <h3>Everest</h3>
                  <div className="projects-strip__tags">
                    <div className="projects-strip__description">
                      <span>Редизайн сайта</span>
                    </div>
                    <div className="projects-strip__description">
                      <span>Оптимизация под спрос</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="section section--cta">
          <div className="section--cta__inner">
            <div className="cta">
            <div className="cta__icon">
              <img src={rocketIcon} alt="Rocket" />
            </div>
            <div className="cta__content">
              <h2 className="cta__title">
                Увеличиваем эффективность{' '}
                <span className="cta__title-italic">сайта</span>
              </h2>
              <p className="cta__text">
                Проведём экспресс‑аудит текущего решения и предложим<br />
                план улучшений по дизайну, структуре и фронтенду.
              </p>
              <button className="button button--light cta__button">Получить аудит</button>
            </div>
          </div>
          </div>
        </section>

        <section id="tariffs" className="section section--tariffs">
          <div className="tariffs__inner">
            <div className="tariffs-header">
              <p className="tariffs-header__ghost"><span className="tariffs-header__ghost-manrope">Пакеты</span><span className="tariffs-header__ghost-accent">&nbsp;тарифов</span></p>
            </div>
            <div className="tariffs-grid">
            <article className="tariff-card">
              <h3 className="tariff-card__title">Базовый</h3>
              <p className="tariff-card__subtitle">
                50+ music with the calming sound help you to fall asleep faster. Calm can change
                your life.
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
              <button className="tariff-card__btn">Выбрать тариф</button>
            </article>

            <article className="tariff-card tariff-card--active">
              <h3 className="tariff-card__title">Базовый</h3>
              <p className="tariff-card__subtitle">
                50+ music with the calming sound help you to fall asleep faster. Calm can change
                your life.
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
              <button className="tariff-card__btn tariff-card__btn--primary">Выбрать тариф</button>
            </article>

            <article className="tariff-card">
              <h3 className="tariff-card__title">Базовый</h3>
              <p className="tariff-card__subtitle">
                50+ music with the calming sound help you to fall asleep faster. Calm can change
                your life.
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
              <button className="tariff-card__btn">Выбрать тариф</button>
            </article>
            </div>
          </div>
        </section>

        <section className="section section--faq">
          <div className="faq__inner">
            <div className="faq-layout">
              <p className="faq-ghost">FAQ</p>
              <div className="faq-list">
              <details className="faq-item" open>
                <summary className="faq-item__summary">
                  <span>С чего начинается работа над проектом?</span>
                </summary>
                <div className="faq-item__content">
                  <p>
                    Начинаем с созвона и брейншторма: уточняем цели, аудиторию, текущие метрики и
                    ограничения, формируем гипотезы и план работ по этапам.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-item__summary">
                  <span>С какими проектами вы работаете?</span>
                </summary>
                <div className="faq-item__content">
                  <p>
                    Фокусируемся на коммерческих сайтах и сервисах: лендинги, корпоративные сайты,
                    e‑commerce, личные кабинеты и посадочные под продукты.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-item__summary">
                  <span>Какие сроки разработки сайта?</span>
                </summary>
                <div className="faq-item__content">
                  <p>
                    В среднем от 4 до 8 недель — в зависимости от объёма, количества экранов,
                    интеграций и сложности анимаций.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-item__summary">
                  <span>Что происходит после запуска?</span>
                </summary>
                <div className="faq-item__content">
                  <p>
                    Следим за показателями, собираем обратную связь, дорабатываем сценарии и
                    интерфейсы на основе данных аналитики.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-item__summary">
                  <span>Вы сопровождаете проект после релиза?</span>
                </summary>
                <div className="faq-item__content">
                  <p>
                    Да, можем взять проект на сопровождение: обновления, A/B‑тесты, доработка
                    функционала и поддержка контента.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-item__summary">
                  <span>Помогаете ли вы с контентом и наполнением сайта?</span>
                </summary>
                <div className="faq-item__content">
                  <p>
                    Помогаем с текстами, структурой и визуалом: от контент‑плана до подготовки
                    материалов для запуска.
                  </p>
                </div>
              </details>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="section section--contacts">
          <div className="contacts__inner">
            <div className="contacts-top">
            <div className="contacts-top__text">
              <h2 className="contacts-top__title">
                <span>Связаться с</span> <span className="contacts-top__title-italic">нами</span>
              </h2>
              <p className="contacts-top__subtitle">
                Расскажите о проекте — мы предложим решение, которое подойдёт вашему
                бизнесу.
              </p>
              <div className="contacts-top__grid">
                <div className="contacts-top__cell">
                  <h3>Почта</h3>
                  <p>info@idealcoffee.by</p>
                </div>
                <div className="contacts-top__cell">
                  <h3>Контактный номер</h3>
                  <p>+375 (44) 780‑25‑25</p>
                </div>
              </div>
            </div>
            <form
              className="contacts-form"
              onSubmit={(event) => {
                event.preventDefault()
              }}
            >
              <div className="contacts-form__field">
                <label htmlFor="contact-name">
                  Имя <span>*</span>
                </label>
                <input id="contact-name" name="name" />
              </div>
              <div className="contacts-form__field">
                <label htmlFor="contact-phone">
                  Телефон <span>*</span>
                </label>
                <input id="contact-phone" name="phone" />
              </div>
              <div className="contacts-form__field">
                <label htmlFor="contact-message">
                  Сообщение <span>*</span>
                </label>
                <textarea id="contact-message" name="message" rows={3} />
              </div>
              <label className="contacts-form__checkbox">
                <input type="checkbox" />
                <span>Согласен с обработкой персональных данных</span>
              </label>
              <button type="submit" className="button button--dark contacts-form__submit">
                Связаться с нами
              </button>
            </form>
            </div>
            <span className="contacts__watermark" aria-hidden>
              LVL 80.STUDIO
            </span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__columns">
            <div>
              <h3>Контакты</h3>
              <p>+ 375 (33) 392‑55‑55</p>
              <p>email: info@mke.by</p>
            </div>
            <div>
              <h3>О нас</h3>
              <p>О нас</p>
              <p>Тарифы</p>
              <p>Проекты</p>
            </div>
          </div>
          <div className="footer__icons" aria-hidden>
            <img src="/icon-play.svg" alt="" width={29} height={20} />
            <img src="/icon-instagram.svg" alt="" width={26} height={24} />
            <img src="/icon-send.svg" alt="" width={32} height={28} />
          </div>
          <div className="footer__bottom">
            Все права защищены © 2026
          </div>
          <img src="/Apps.svg" alt="" className="footer__apps-icon" aria-hidden />
        </div>
      </footer>
    </div>
  )
}

export default App
