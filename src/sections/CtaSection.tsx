import rocketIcon from "../../Rocket.svg"

export function CtaSection() {
  return (
    <section className="section section--cta">
      <div className="section--cta__inner">
        <div className="cta">
          <div className="cta__icon">
            <img src={rocketIcon} alt="Иллюстрация: запуск и рост бизнеса" />
          </div>
          <div className="cta__content">
            <h2 className="cta__title">
              Увеличиваем эффективность{" "}
              <span className="cta__title-italic">сайта</span>
            </h2>
            <p className="cta__text">
              Проведём экспресс‑аудит текущего решения и<br />
              предложим план улучшений по дизайну, структуре и фронтенду.
            </p>
            <button type="button" className="button button--light cta__button">
              Получить аудит
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
