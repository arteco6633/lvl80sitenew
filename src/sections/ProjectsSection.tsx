import type { ProjectData } from "../components/ui/project-modal"
import { PROJECTS } from "../data/projects"

interface ProjectsSectionProps {
  onProjectClick: (project: ProjectData) => void
}

export function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section section--projects">
      <div className="section--projects__inner">
        <div className="section__header">
          <p className="section__label">
            <span className="section__label-hero-style">Наши</span> проекты
            <span className="section--projects__dot" aria-hidden />
          </p>
          <h2 className="section__title">Кейсы, за которые не стыдно</h2>
        </div>
        <div className="projects-strip">
          <div className="projects-row projects-row--top">
            <div
              className="projects-strip__item projects-strip__item--wide"
              role="button"
              tabIndex={0}
              onClick={() => onProjectClick(PROJECTS[0])}
              onKeyDown={(e) => e.key === "Enter" && onProjectClick(PROJECTS[0])}
              aria-label={`Открыть обзор проекта ${PROJECTS[0].title}`}
            >
              {PROJECTS[0].image && (
                <img src={PROJECTS[0].image} alt={PROJECTS[0].imageAlt || PROJECTS[0].title} className="projects-strip__image" loading="lazy" decoding="async" />
              )}
              <div className="projects-strip__overlay" />
              <div className="projects-strip__caption">
                <h3>{PROJECTS[0].title}</h3>
                <div className="projects-strip__tags">
                  {PROJECTS[0].tags.map((tag) => (
                    <div key={tag} className="projects-strip__description"><span>{tag}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="projects-strip__item"
              role="button"
              tabIndex={0}
              onClick={() => onProjectClick(PROJECTS[1])}
              onKeyDown={(e) => e.key === "Enter" && onProjectClick(PROJECTS[1])}
              aria-label={`Открыть обзор проекта ${PROJECTS[1].title}`}
            >
              {PROJECTS[1].image && (
                <img src={PROJECTS[1].image} alt={PROJECTS[1].imageAlt || PROJECTS[1].title} className="projects-strip__image" loading="lazy" decoding="async" />
              )}
              <div className="projects-strip__overlay" />
              <div className="projects-strip__caption">
                <h3>{PROJECTS[1].title}</h3>
                <div className="projects-strip__tags">
                  {PROJECTS[1].tags.map((tag) => (
                    <div key={tag} className="projects-strip__description"><span>{tag}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="projects-row projects-row--bottom">
            <div
              className="projects-strip__item"
              role="button"
              tabIndex={0}
              onClick={() => onProjectClick(PROJECTS[2])}
              onKeyDown={(e) => e.key === "Enter" && onProjectClick(PROJECTS[2])}
              aria-label={`Открыть обзор проекта ${PROJECTS[2].title}`}
            >
              <div className="projects-strip__overlay" />
              <div className="projects-strip__caption">
                <h3>{PROJECTS[2].title}</h3>
                <div className="projects-strip__tags">
                  {PROJECTS[2].tags.map((tag) => (
                    <div key={tag} className="projects-strip__description"><span>{tag}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="projects-strip__item projects-strip__item--wide"
              role="button"
              tabIndex={0}
              onClick={() => onProjectClick(PROJECTS[3])}
              onKeyDown={(e) => e.key === "Enter" && onProjectClick(PROJECTS[3])}
              aria-label={`Открыть обзор проекта ${PROJECTS[3].title}`}
            >
              {PROJECTS[3].image && (
                <img src={PROJECTS[3].image} alt={PROJECTS[3].imageAlt || PROJECTS[3].title} className="projects-strip__image" loading="lazy" decoding="async" />
              )}
              <div className="projects-strip__overlay" />
              <div className="projects-strip__caption">
                <h3>{PROJECTS[3].title}</h3>
                <div className="projects-strip__tags">
                  {PROJECTS[3].tags.map((tag) => (
                    <div key={tag} className="projects-strip__description"><span>{tag}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
