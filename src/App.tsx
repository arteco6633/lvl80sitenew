import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Menu, X } from "lucide-react"
import "./App.css"
import { Hero } from "./components/ui/hero-1"
import { ContactModal } from "./components/ui/contact-modal"
import { ProjectModal, type ProjectData } from "./components/ui/project-modal"
import { ProjectsSection } from "./sections/ProjectsSection"
import { CtaSection } from "./sections/CtaSection"
import { FooterSection } from "./sections/FooterSection"
import { ServicesSection } from "./sections/ServicesSection"
import { TariffsSection } from "./sections/TariffsSection"
import { FAQSection } from "./sections/FAQSection"
import { ContactsSection } from "./sections/ContactsSection"

function App() {
  const servicesSectionRef = useRef<HTMLElement>(null)
  const nichesBlockRef = useRef<HTMLDivElement>(null)
  const [servicesInView, setServicesInView] = useState(false)
  const [nichesInView, setNichesInView] = useState(false)
  const [nichesFilter] = useState("")
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactThankYou, setContactThankYou] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpenIndex, setFaqOpenIndex] = useState(0)
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [contactsFormSent, setContactsFormSent] = useState(false)

  const openContactModal = () => {
    setContactThankYou(false)
    setContactModalOpen(true)
  }
  const closeContactModal = () => setContactModalOpen(false)

  const openProjectModal = (project: ProjectData) => {
    setSelectedProject(project)
    setProjectModalOpen(true)
  }
  const closeProjectModal = () => {
    setProjectModalOpen(false)
    setSelectedProject(null)
  }

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
          <span className="header__logo-text"><span className="header__logo-text--black">АП</span>ЕКС</span>
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
        {menuOpen && createPortal(
          <div className="header__menu header__menu--overlay header__menu--open" role="dialog" aria-modal="true" aria-label="Меню">
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
              <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
            </nav>
            <div className="header__actions">
<a href="tel:+79664458595" className="header__phone">
              8&nbsp;966&nbsp;445&nbsp;85&nbsp;95
            </a>
              <button type="button" className="header__cta" onClick={() => { setMenuOpen(false); openContactModal() }}>Связаться с нами</button>
            </div>
          </div>,
          document.body
        )}
      </header>

      <main>
        <Hero
          onContactClick={openContactModal}
          onAuditClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        />

        <ServicesSection
          sectionRef={servicesSectionRef}
          nichesBlockRef={nichesBlockRef}
          servicesInView={servicesInView}
          nichesInView={nichesInView}
          nichesFilter={nichesFilter}
        />

        <ProjectsSection onProjectClick={openProjectModal} />

        <CtaSection />

        <TariffsSection onContactClick={openContactModal} />

        <FAQSection openIndex={faqOpenIndex} onToggle={setFaqOpenIndex} />

        <ContactsSection formSent={contactsFormSent} onFormSubmit={() => setContactsFormSent(true)} />
      </main>

      <FooterSection />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={closeContactModal}
        showThankYou={contactThankYou}
        onFormSubmit={() => setContactThankYou(true)}
      />
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </div>
  )
}

export default App
