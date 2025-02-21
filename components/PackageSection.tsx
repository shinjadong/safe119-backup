import Image from "next/image"

interface PackageItemProps {
  imageSrc: string
  title: string
  description: string
}

function PackageItem({ imageSrc, title, description }: PackageItemProps) {
  return (
    <div className="package-item">
      <div className="package-image" style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="package-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export function PackageSection() {
  return (
    <section id="cctv-package">
      <div className="promotion-banner">
        <div className="promo-content">
          <span className="highlight-tag">기간한정</span>
          <span className="promo-text">
            <span id="current-month">2</span>월 특별 프로모션!
            <br className="mobile-only" /> 프리미엄 보안 솔루션 최대 70% 할인
          </span>
          <p className="promo-deadline">
            이벤트 종료까지 <span className="highlight-text">5일 남음</span>
          </p>
        </div>
      </div>

      <div className="premium-service">
        <h2 className="section-title">
          안전지대 119만의 특별한
          <br />
          <span className="highlight">프리미엄 케어 서비스</span>
        </h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-image" style={{ position: 'relative', width: '100%', height: '240px' }}>
              <Image
                src="https://cdn.ajd.kr/images/platform/landing/cctv/package_1.webp"
                alt="프리미엄 설치"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
            </div>
            <div className="benefit-content">
              <h3>프리미엄 설치 무상 제공</h3>
              <p>20년 경력 전문 엔지니어의<br />완벽한 설치 서비스</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-image" style={{ position: 'relative', width: '100%', height: '240px' }}>
              <Image
                src="https://cdn.ajd.kr/images/platform/landing/cctv/package_2.webp"
                alt="24시간 케어"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
            </div>
            <div className="benefit-content">
              <h3>365일 24시간 케어 서비스</h3>
              <p>실시간 모니터링과<br />신속한 전문가 지원</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-image" style={{ position: 'relative', width: '100%', height: '240px' }}>
              <Image
                src="https://cdn.ajd.kr/images/platform/landing/cctv/package_3.webp"
                alt="무상 이전 설치"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
            </div>
            <div className="benefit-content">
              <h3>무상 이전 설치 보장</h3>
              <p>이사 걱정 없는<br />평생 케어 프로그램</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
