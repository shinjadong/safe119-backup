"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="question">
        <span>{question}</span>
        <i className="icon material-symbols-outlined">{isOpen ? 'remove' : 'add'}</i>
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const faqs = [
    {
      question: "CCTV 설치 비용은 얼마인가요?",
      answer: "CCTV 설치 비용은 카메라 수량, 종류, 설치 환경에 따라 다양합니다. 현재 진행 중인 프로모션을 통해 최대 70% 할인된 가격으로 설치가 가능하며, 정확한 견적은 무료 상담을 통해 확인하실 수 있습니다."
    },
    {
      question: "설치 후 AS는 어떻게 진행되나요?",
      answer: "365일 24시간 전문 엔지니어가 대기하고 있어 신속한 AS를 제공해 드립니다. 또한, 설치 후 1년간 무상 AS를 제공하며, 이후에도 합리적인 비용으로 지속적인 관리를 받으실 수 있습니다."
    },
    {
      question: "설치는 얼마나 걸리나요?",
      answer: "일반적인 가정용 CCTV 설치는 2-3시간 정도 소요됩니다. 다만, 설치 환경과 카메라 수량에 따라 소요 시간이 달라질 수 있습니다. 전문 엔지니어가 방문하여 최적의 설치 위치를 제안하고, 깔끔한 마감을 보장합니다."
    },
    {
      question: "스마트폰으로 실시간 확인이 가능한가요?",
      answer: "네, 가능합니다. 전용 앱을 통해 언제 어디서나 실시간으로 영상을 확인하실 수 있으며, 움직임 감지 시 즉시 알림을 받아보실 수 있습니다. 또한, 녹화된 영상의 저장 및 재생도 간편하게 이용하실 수 있습니다."
    }
  ]

  return (
    <section id="cctv-faq">
      <div className="container">
        <h2 className="section-title">
          안전지대 119의 서비스가 궁금하시다면?<br />
          <span className="highlight">자주 묻는 질문</span>을 확인해보세요
        </h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
