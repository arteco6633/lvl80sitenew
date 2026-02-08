import { useState } from "react"
import { submitContactForm } from "../lib/supabase"

interface ContactsSectionProps {
  formSent: boolean
  onFormSubmit: () => void
}

export function ContactsSection({ formSent, onFormSubmit }: ContactsSectionProps) {
  const [submitError, setSubmitError] = useState<string | null>(null)
  return (
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
                <p>info.lvl80@mail.ru</p>
              </div>
              <div className="contacts-top__cell">
                <h3>Контактный номер</h3>
                <p><a href="tel:+79664458595">8&nbsp;966&nbsp;445&nbsp;85&nbsp;95</a></p>
              </div>
            </div>
          </div>
          {formSent ? (
            <div className="contacts-form__success" role="status">
              <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form
              className="contacts-form"
              onSubmit={async (e) => {
                e.preventDefault()
                setSubmitError(null)
                const form = e.currentTarget
                const data = {
                  name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
                  phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
                  message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
                  source: "contacts" as const,
                }
                const { ok, error } = await submitContactForm(data)
                if (ok) onFormSubmit()
                else setSubmitError(error || "Ошибка отправки")
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
              {submitError && <p className="contacts-form__error" role="alert">{submitError}</p>}
              <button type="submit" className="button button--dark contacts-form__submit">
                Связаться с нами
              </button>
            </form>
          )}
        </div>
        <span className="contacts__watermark" aria-hidden>
          LVL 80.STUDIO
        </span>
      </div>
    </section>
  )
}
