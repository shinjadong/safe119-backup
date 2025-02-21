import type { ReactNode } from "react"
import FloatingButton from "./FloatingButton"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <FloatingButton />
    </>
  )
}

