import type { Metadata } from "next"
import type React from "react"
import "./styles/reset.css"
import "./styles/main.css"

export const metadata: Metadata = {
  title: "CCTV 렌탈 전문업체 - 안전지대 119",
  description: "최첨단 AI CCTV로 소중한 일상의 안전을 지키는 프리미엄 보안 서비스",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </head>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'