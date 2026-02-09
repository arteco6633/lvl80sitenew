import { createContext, useContext } from "react"

type ContactModalContextValue = {
  openContactModal: () => void
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null)

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  return ctx?.openContactModal ?? (() => {})
}

export { ContactModalContext }
