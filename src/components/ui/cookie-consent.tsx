"use client"

import { useEffect, useState } from "react"
import { Cookie } from "lucide-react"

const STORAGE_KEY = "apex-cookie-consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored !== "accepted") setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    setExiting(true)
    try {
      localStorage.setItem(STORAGE_KEY, "accepted")
    } catch {}
    const t = setTimeout(() => {
      setVisible(false)
    }, 320)
    return () => clearTimeout(t)
  }

  if (!visible) return null

  return (
    <div
      className={`cookie-consent ${exiting ? "cookie-consent--exiting" : ""}`}
      role="dialog"
      aria-live="polite"
      aria-label="Согласие на использование cookie"
    >
      <div className="cookie-consent__card">
        <span className="cookie-consent__accent" aria-hidden />
        <div className="cookie-consent__icon-wrap">
          <Cookie className="cookie-consent__icon" size={22} strokeWidth={1.8} aria-hidden />
        </div>
        <p className="cookie-consent__text">
          Мы используем cookie, чтобы сайт работал так, как задумано.
          Продолжая, вы соглашаетесь с их использованием.
        </p>
        <button
          type="button"
          className="cookie-consent__btn"
          onClick={accept}
        >
          Принять
        </button>
      </div>
    </div>
  )
}
