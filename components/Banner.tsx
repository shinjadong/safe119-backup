import Image from "next/image"

export function Banner() {
  return (
    <section id="cctv-banner">
      <div className="img-bx" style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <Image
          src="https://cdn.ajd.kr/images/platform/landing/cctv/main_banner_mo.webp"
          alt="최첨단 AI CCTV로 소중한 일상의 안전을 지키는 프리미엄 보안 서비스"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}
