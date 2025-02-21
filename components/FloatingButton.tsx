"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function FloatingButton() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`fixed-floating ${isActive ? "active" : ""}`}>
      <div className="container">
        <a className="floating-btn">
          <span className="label">지금 상담하고 특별 할인 받기</span>
          <i className="icon material-symbols-outlined">arrow_forward</i>
        </a>
      </div>
    </div>
  )
}
