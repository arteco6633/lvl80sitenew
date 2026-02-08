"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"

export interface ProjectSection {
  title: string
  content: string
}

export interface ProjectData {
  id: string
  title: string
  tags: string[]
  description: string
  /** Дополнительные блоки: задача, реализация, результат */
  sections?: ProjectSection[]
  image?: string
  imageAlt?: string
}

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: ProjectData | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
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

  if (!isOpen || !project) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      className="project-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          className="project-modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <X className="project-modal__close-icon" strokeWidth={2} />
        </button>

        {project.image && (
          <div className="project-modal__image-wrap">
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              className="project-modal__image"
              decoding="async"
            />
          </div>
        )}

        <div className="project-modal__content">
          <h2 className="project-modal__title" id="project-modal-title">
            {project.title}
            <span className="project-modal__dot" aria-hidden />
          </h2>

          {project.tags.length > 0 && (
            <div className="project-modal__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-modal__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="project-modal__intro">{project.description}</p>

          {project.sections && project.sections.length > 0 && (
            <div className="project-modal__sections">
              {project.sections.map((section, index) => (
                <section key={index} className="project-modal__section">
                  <h3 className="project-modal__section-title">{section.title}</h3>
                  <p className="project-modal__section-content">{section.content}</p>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
