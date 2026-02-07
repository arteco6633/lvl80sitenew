import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import "./App.css"
import projectHero from "../Bb_wheels.png"
import projectMockup from "../MOCKUP 5.png"
import projectMockupBottom from "../MOCKUP 3.png"
import rocketIcon from "../Rocket.svg"
import { Hero } from "./components/ui/hero-1"
import { ContactModal } from "./components/ui/contact-modal"

function App() {
  const servicesSectionRef = useRef<HTMLElement>(null)
  const nichesBlockRef = useRef<HTMLDivElement>(null)
  const [servicesInView, setServicesInView] = useState(false)
  const [nichesInView, setNichesInView] = useState(false)
  const [nichesFilter, setNichesFilter] = useState("")
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactThankYou, setContactThankYou] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpenIndex, setFaqOpenIndex] = useState(0)

  const openContactModal = () => {
    setContactThankYou(false)
    setContactModalOpen(true)
  }
  const closeContactModal = () => setContactModalOpen(false)

  useEffect(() => {
    const el = servicesSectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setServicesInView(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  useEffect(() => {
    const el = nichesBlockRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setNichesInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div className="page">
      <header className="header">
        <div className="header__logo">
          <span className="header__logo-text">LVL 80.AGENCY</span>
        </div>
        <button
          type="button"
          className="header__hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
        >
          <Menu size={24} strokeWidth={2} />
        </button>
        <div className={`header__menu${menuOpen ? " header__menu--open" : ""}`}>
          <button
            type="button"
            className="header__menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            <X size={24} strokeWidth={2} />
          </button>
          <nav className="header__nav">
            <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a>
            <a href="#tariffs" onClick={() => setMenuOpen(false)}>Тарифы</a>
          </nav>
          <div className="header__actions">
            <a href="tel:+79609319494" className="header__phone">
              8&nbsp;960&nbsp;931&nbsp;94&nbsp;94
            </a>
            <button type="button" className="header__cta" onClick={() => { setMenuOpen(false); openContactModal() }}>Связаться с нами</button>
          </div>
        </div>
      </header>

      <main>
        <Hero
          onContactClick={openContactModal}
          onAuditClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        />

        <section id="services" className="strategy-section" ref={servicesSectionRef}>
          <div className="strategy-section__inner">
            <div className="strategy-section__ghost-title"><span className="text-white">От стратегии до запуска</span><span className="strategy-section__ghost-dot" aria-hidden /></div>
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
                {["IT", "B2B", "Услуги", "Сложные продукты", "Экспертные компании", "Медиа", "Образование", "Премиум-сегмент", "Локально"].map((label) => (
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
                    <p className="niches-card__text">Сайт начинает приводить клиентов из поиска и нейросетей и работает как самостоятельный канал привлечения, а не только как поддержка рекламы.</p>
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

        <section id="projects" className="section section--projects">
          <div className="section--projects__inner">
            <div className="section__header">
              <p className="section__label"><span className="section__label-hero-style">Наши</span> проекты<span className="section--projects__dot" aria-hidden /></p>
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
                Проведём экспресс‑аудит текущего решения и<br />
                предложим план улучшений по дизайну, структуре и фронтенду.
              </p>
              <button className="button button--light cta__button">Получить аудит</button>
            </div>
          </div>
          </div>
        </section>

        <section id="tariffs" className="section section--tariffs">
          <div className="tariffs__inner">
            <div className="tariffs-header">
              <p className="tariffs-header__ghost"><span className="tariffs-header__ghost-manrope">Пакеты</span><span className="tariffs-header__ghost-accent">&nbsp;тарифов</span><span className="tariffs-header__dot" aria-hidden /></p>
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
              {[
                { q: "С чего начинается работа над проектом?", a: "Начинаем с созвона и брейншторма: уточняем цели, аудиторию, текущие метрики и ограничения, формируем гипотезы и план работ по этапам." },
                { q: "С какими проектами вы работаете?", a: "Фокусируемся на коммерческих сайтах и сервисах: лендинги, корпоративные сайты, e‑commerce, личные кабинеты и посадочные под продукты." },
                { q: "Какие сроки разработки сайта?", a: "В среднем от 4 до 8 недель — в зависимости от объёма, количества экранов, интеграций и сложности анимаций." },
                { q: "Что происходит после запуска?", a: "Следим за показателями, собираем обратную связь, дорабатываем сценарии и интерфейсы на основе данных аналитики." },
                { q: "Вы сопровождаете проект после релиза?", a: "Да, можем взять проект на сопровождение: обновления, A/B‑тесты, доработка функционала и поддержка контента." },
                { q: "Помогаете ли вы с контентом и наполнением сайта?", a: "Помогаем с текстами, структурой и визуалом: от контент‑плана до подготовки материалов для запуска." },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`faq-item${faqOpenIndex === i ? " faq-item--open" : ""}`}
                  onMouseEnter={(e) => e.currentTarget.classList.add("faq-item--hover")}
                  onMouseLeave={(e) => e.currentTarget.classList.remove("faq-item--hover")}
                >
                  <div
                    className="faq-item__row"
                    onClick={() => setFaqOpenIndex(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setFaqOpenIndex(i)}
                    aria-expanded={faqOpenIndex === i}
                  >
                    <span className="faq-item__summary">{item.q}</span>
                    <span className="faq-item__icon" aria-hidden>{faqOpenIndex === i ? "−" : "+"}</span>
                  </div>
                  <div className="faq-item__content">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
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

      <ContactModal
        isOpen={contactModalOpen}
        onClose={closeContactModal}
        showThankYou={contactThankYou}
        onFormSubmit={() => setContactThankYou(true)}
      />
    </div>
  )
}

export default App
