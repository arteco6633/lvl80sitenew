"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"

export interface AuditUtpCardData {
  id: number
  title: string
  imageSrc: string
  imageAlt: string
  /** Изображение в попапе (если не задано, используется imageSrc) */
  modalImageSrc?: string
  description: string
  benefits: string[]
}

interface AuditUtpModalProps {
  isOpen: boolean
  onClose: () => void
  card: AuditUtpCardData | null
  onGetAudit: () => void
}

export function AuditUtpModal({ isOpen, onClose, card, onGetAudit }: AuditUtpModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
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

  if (!isOpen || !card) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleGetAudit = () => {
    onClose()
    onGetAudit()
  }

  return (
    <div
      ref={overlayRef}
      className="audit-utp-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-utp-modal-title"
    >
      <div className="audit-utp-modal" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          className="audit-utp-modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <X className="audit-utp-modal__close-icon" strokeWidth={2} />
        </button>

        <div className="audit-utp-modal__image-wrap">
          <img
            src={card.modalImageSrc ?? card.imageSrc}
            alt={card.imageAlt}
            className="audit-utp-modal__image"
            decoding="async"
          />
        </div>

        <div className="audit-utp-modal__content">
          <h2 className="audit-utp-modal__title" id="audit-utp-modal-title">
            {card.title}
            <span className="audit-utp-modal__dot" aria-hidden />
          </h2>

          <p className="audit-utp-modal__description">{card.description}</p>

          {card.benefits.length > 0 && (
            <ul className="audit-utp-modal__benefits">
              {card.benefits.map((benefit, index) => (
                <li key={index} className="audit-utp-modal__benefit">
                  {benefit}
                </li>
              ))}
            </ul>
          )}

          <p className="audit-utp-modal__cta-text">
            Оставьте заявку — мы подготовим персональный разбор и план действий под вашу задачу.
          </p>

          <button
            type="button"
            className="audit-utp-modal__btn"
            onClick={handleGetAudit}
          >
            Получить аудит
          </button>
        </div>
      </div>
    </div>
  )
}
