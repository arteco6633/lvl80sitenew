import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { Hero } from "../components/ui/hero-1"
import { ProjectModal, type ProjectData } from "../components/ui/project-modal"
import { ProjectsSection } from "../sections/ProjectsSection"
import { CtaSection } from "../sections/CtaSection"
import { ServicesSection } from "../sections/ServicesSection"
import { TariffsSection } from "../sections/TariffsSection"
import { FAQSection } from "../sections/FAQSection"
import { ContactsSection } from "../sections/ContactsSection"
import { useContactModal } from "../contexts/ContactModalContext"

export function HomePage() {
  const openContactModal = useContactModal()
  const servicesSectionRef = useRef<HTMLElement>(null)
  const nichesBlockRef = useRef<HTMLDivElement>(null)
  const [servicesInView, setServicesInView] = useState(false)
  const [nichesInView, setNichesInView] = useState(false)
  const [nichesFilter] = useState("")
  const [faqOpenIndex, setFaqOpenIndex] = useState(0)
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [contactsFormSent, setContactsFormSent] = useState(false)
  const location = useLocation()

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
    const el = nichesBlockRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setNichesInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const hash = location.hash.slice(1)
    if (!hash) return
    const id = ["services", "projects", "tariffs", "contacts"].includes(hash) ? hash : null
    if (id) {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: "smooth" })
    }
  }, [location])

  return (
    <>
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

      <ProjectModal
        isOpen={projectModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </>
  )
}
