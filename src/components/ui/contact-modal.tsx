"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { X, User, Phone, Mail } from "lucide-react"
import { submitContactForm } from "../../lib/supabase"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  showThankYou: boolean
  onFormSubmit: () => void
}

export function ContactModal({
  isOpen,
  onClose,
  showThankYou,
  onFormSubmit,
}: ContactModalProps) {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isOpen) return
    previousActiveRef.current = document.activeElement as HTMLElement | null
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"
    requestAnimationFrame(() => closeButtonRef.current?.focus())
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
      previousActiveRef.current?.focus?.()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = formRef.current
    if (!form?.reportValidity()) return
    setSubmitError(null)
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      source: "modal" as const,
    }
    const { ok, error } = await submitContactForm(data)
    if (ok) onFormSubmit()
    else setSubmitError(error || "Ошибка отправки")
  }

  return (
    <div
      ref={overlayRef}
      className="contact-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="contact-modal">
        <button
          ref={closeButtonRef}
          type="button"
          className="contact-modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <X className="contact-modal__close-icon" strokeWidth={2} />
        </button>

        {showThankYou ? (
          <div className="contact-modal__thankyou">
            <h2 className="contact-modal__thankyou-title" id="contact-modal-title">
              Благодарим за
              <br />
              обратную связь.
              <span className="contact-modal__dot" aria-hidden />
            </h2>
            <p className="contact-modal__thankyou-text">
              Ваше сообщение принято в обработку.
              <br />
              Мы свяжемся с вами в ближайшее время.
            </p>
            <button
              type="button"
              className="contact-modal__btn contact-modal__btn--close"
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        ) : (
          <div className="contact-modal__form-wrap">
            <h2 className="contact-modal__title" id="contact-modal-title">
              Связаться с нами.
              <span className="contact-modal__dot" aria-hidden />
            </h2>
            <p className="contact-modal__subtitle">
              Расскажите о проекте — мы предложим решение, которое подойдёт именно вашему бизнесу.
            </p>
            <form ref={formRef} className="contact-modal__form" onSubmit={handleSubmit}>
              <div className="contact-modal__field">
                <label htmlFor="contact-modal-name">
                  <User className="contact-modal__field-icon" size={18} aria-hidden />
                  Имя <span>*</span>
                </label>
                <input
                  id="contact-modal-name"
                  type="text"
                  name="name"
                  required
                  placeholder=" "
                  className="contact-modal__input"
                />
              </div>
              <div className="contact-modal__field">
                <label htmlFor="contact-modal-phone">
                  <Phone className="contact-modal__field-icon" size={18} aria-hidden />
                  Телефон <span>*</span>
                </label>
                <input
                  id="contact-modal-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder=" "
                  className="contact-modal__input"
                />
              </div>
              <div className="contact-modal__field">
                <label htmlFor="contact-modal-message">
                  <Mail className="contact-modal__field-icon" size={18} aria-hidden />
                  Сообщение <span>*</span>
                </label>
                <textarea
                  id="contact-modal-message"
                  name="message"
                  rows={3}
                  required
                  placeholder=" "
                  className="contact-modal__input contact-modal__textarea"
                />
              </div>
              <label className="contact-modal__checkbox">
                <input type="checkbox" required />
                <span>
                  Согласен с обработкой{" "}
                  <Link
                    to="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-modal__policy-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    вот этого вот всего
                  </Link>
                </span>
              </label>
              {submitError && <p className="contact-modal__error" role="alert">{submitError}</p>}
              <button type="submit" className="contact-modal__btn contact-modal__btn--submit">
                Отправить
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
