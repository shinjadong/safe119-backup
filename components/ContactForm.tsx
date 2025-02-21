"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "",
    message: "",
    agree: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 폼 제출 로직을 구현하세요
    console.log("Form submitted:", formData)
  }

  return (
    <section id="cctv-form">
      <div className="container dense">
        <div className="title">
          <h2>지금 바로 보안 전문가의 맞춤 상담을 받아보세요</h2>
          <p>첫 상담 고객님께 드리는 특별한 혜택도 함께!</p>
        </div>
        <form id="consultForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="성함을 입력해주세요"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="휴대폰 번호를 입력해주세요"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <select name="type" required value={formData.type} onChange={handleChange}>
              <option value="">설치 환경을 선택해주세요</option>
              <option value="home">주거용 프리미엄 CCTV</option>
              <option value="store">상업공간 통합 보안 시스템</option>
              <option value="office">오피스 보안 솔루션</option>
              <option value="factory">산업시설 첨단 보안 시스템</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="구체적인 문의사항이나 설치 환경을 알려주시면 더 상세한 상담이 가능합니다"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label className="checkbox-label">
              <input type="checkbox" name="agree" required checked={formData.agree} onChange={handleChange} />
              <span>개인정보 수집 및 이용에 동의합니다 (상담 목적으로만 사용됩니다)</span>
            </label>
          </div>
          <button type="submit" className="submit-btn">
            프리미엄 보안 컨설팅 받기
            <small>선착순 100분께 설치비 100% 지원!</small>
          </button>
        </form>
      </div>
    </section>
  )
}
