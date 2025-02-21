import Image from "next/image"

interface BrandItemProps {
  logo: string
  name: string
  description: string
}

function BrandItem({ logo, name, description }: BrandItemProps) {
  return (
    <div className="brand-item">
      <div className="brand-logo" style={{ position: 'relative', width: '100%', height: '60px' }}>
        <Image
          src={logo}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h3 className="brand-name">{name}</h3>
      <p className="brand-description">{description}</p>
    </div>
  )
}

export function BrandSection() {
  return (
    <section id="cctv-brand">
      <div className="container">
        <h2 className="section-title">
          대한민국 대표 CCTV 브랜드와<br />
          <span className="highlight">함께하는 안전지대 119</span>
        </h2>
        <div className="brand-grid">
          <BrandItem
            logo="https://cdn.ajd.kr/images/platform/landing/cctv/giga_eyes_logo.webp"
            name="KT 기가아이즈"
            description="국내 1위 통신사의 최첨단 AI CCTV 솔루션"
          />
          <BrandItem
            logo="https://cdn.ajd.kr/images/platform/landing/cctv/lg_logo.webp"
            name="LG 지능형"
            description="업계 최고 수준의 AI 딥러닝 기술 적용"
          />
          <BrandItem
            logo="https://cdn.ajd.kr/images/platform/landing/cctv/samsung_logo.webp"
            name="삼성 위즈넷"
            description="글로벌 No.1 기업의 프리미엄 보안 시스템"
          />
        </div>
      </div>
    </section>
  )
}
