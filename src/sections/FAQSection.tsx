import { FAQ_ITEMS } from "../data/faq"

interface FAQSectionProps {
  openIndex: number
  onToggle: (index: number) => void
}

export function FAQSection({ openIndex, onToggle }: FAQSectionProps) {
  return (
    <section className="section section--faq">
      <div className="faq__inner">
        <div className="faq-layout">
          <h2 className="faq-ghost">FAQ</h2>
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`faq-item${openIndex === i ? " faq-item--open" : ""}`}
                onMouseEnter={(e) => e.currentTarget.classList.add("faq-item--hover")}
                onMouseLeave={(e) => e.currentTarget.classList.remove("faq-item--hover")}
              >
                <div
                  className="faq-item__row"
                  onClick={() => onToggle(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && onToggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="faq-item__summary">{item.q}</span>
                  <span className="faq-item__icon" aria-hidden>{openIndex === i ? "−" : "+"}</span>
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
  )
}
