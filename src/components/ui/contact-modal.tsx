"use client"

import { useEffect, useRef } from "react"
import { X, User, Phone, Mail } from "lucide-react"
import { SlideButton } from "./slide-button"

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
  const overlayRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFormSubmit()
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
                <span>Согласен с обработкой вот этого вот всего</span>
              </label>
              <div className="contact-modal__slide-btn-wrap">
                <SlideButton
                  onSubmit={() => {
                    if (!formRef.current?.reportValidity()) return false
                    onFormSubmit()
                    return true
                  }}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
