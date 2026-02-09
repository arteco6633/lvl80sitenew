import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Link, Outlet, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { ContactModal } from "../components/ui/contact-modal"
import { FooterSection } from "../sections/FooterSection"
import { ContactModalContext } from "../contexts/ContactModalContext"

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactThankYou, setContactThankYou] = useState(false)
  const location = useLocation()

  const openContactModal = () => {
    setContactThankYou(false)
    setContactModalOpen(true)
  }
  const closeContactModal = () => setContactModalOpen(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  return (
    <ContactModalContext.Provider value={{ openContactModal }}>
    <div className="page">
      <header className="header">
        {location.pathname === "/" ? (
          <div className="header__logo">
            <span className="header__logo-text"><span className="header__logo-text--black">АП</span>ЕКС</span>
          </div>
        ) : (
          <Link to="/" className="header__logo">
            <span className="header__logo-text"><span className="header__logo-text--black">АП</span>ЕКС</span>
          </Link>
        )}
        <div className="header__desktop">
          <nav className="header__nav">
            <Link to="/brief">Бриф</Link>
            {location.pathname === "/" ? (
              <>
                <a href="#services">Услуги</a>
                <a href="#projects">Проекты</a>
                <a href="#tariffs">Тарифы</a>
                <a href="#contacts">Контакты</a>
              </>
            ) : (
              <>
                <Link to="/#services">Услуги</Link>
                <Link to="/#projects">Проекты</Link>
                <Link to="/#tariffs">Тарифы</Link>
                <Link to="/#contacts">Контакты</Link>
              </>
            )}
          </nav>
          <div className="header__actions">
            <a href="tel:+79664458595" className="header__phone">
              8&nbsp;966&nbsp;445&nbsp;85&nbsp;95
            </a>
            <button type="button" className="header__cta" onClick={openContactModal}>
              Связаться с нами
            </button>
          </div>
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
              onClick={closeMenu}
              aria-label="Закрыть меню"
            >
              <X size={24} strokeWidth={2} />
            </button>
            <nav className="header__nav">
              <Link to="/#services" onClick={closeMenu}>Услуги</Link>
              <Link to="/#projects" onClick={closeMenu}>Проекты</Link>
              <Link to="/#tariffs" onClick={closeMenu}>Тарифы</Link>
              <Link to="/#contacts" onClick={closeMenu}>Контакты</Link>
              <Link to="/brief" onClick={closeMenu}>Бриф</Link>
            </nav>
            <div className="header__actions">
              <a href="tel:+79664458595" className="header__phone">
                8&nbsp;966&nbsp;445&nbsp;85&nbsp;95
              </a>
              <button type="button" className="header__cta" onClick={() => { closeMenu(); openContactModal() }}>
                Связаться с нами
              </button>
            </div>
          </div>,
          document.body
        )}
      </header>

      <Outlet />

      <FooterSection />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={closeContactModal}
        showThankYou={contactThankYou}
        onFormSubmit={() => setContactThankYou(true)}
      />
    </div>
    </ContactModalContext.Provider>
  )
}
