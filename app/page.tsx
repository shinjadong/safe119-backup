import Image from "next/image"
import { ReviewSection } from "@/components/ReviewSection"
import { BrandSection } from "@/components/BrandSection"
import { PackageSection } from "@/components/PackageSection"
import { ContactForm } from "@/components/ContactForm"
import { FAQSection } from "@/components/FAQSection"
import { FloatingButton } from "@/components/FloatingButton"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div id="cctv_landing">
      <section id="cctv-banner">
        <div className="img-bx">
          <Image
            src="/images/hook.png"
            alt="최첨단 AI CCTV로 소중한 일상의 안전을 지키는 프리미엄 보안 서비스"
            width={1080}
            height={1080}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
      </section>

      <section id="cctv-alarm">
        <div className="container">
          <div className="alarm-news">
            <div className="tit">
              <h4>하루 250건의 범죄, 우리 모두의 안전이 위협받고 있습니다</h4>
              <h3>이제는 AI 기반 스마트 보안으로 완벽한 안전을 지키세요</h3>
            </div>
            <div className="cont">
              <Image
                src="https://cdn.ajd.kr/images/platform/landing/cctv/alarm_img.webp"
                alt="경고등"
                width={200}
                height={200}
                className="alarm-img"
              />
              <p>안전은 선택이 아닌 필수입니다</p>
              <div className="bg-text">무자격 업체의 저품질 CCTV 위험성</div>
              <p>해킹 위험과 개인정보 유출 사고 급증!</p>
            </div>
          </div>
        </div>
        <div className="official-banner">
          <Image
            src="https://cdn.ajd.kr/images/platform/landing/cctv/official_banner.webp"
            alt="대한민국 1위 CCTV 전문기업 안전지대 119. 최첨단 AI 기술로 24시간 완벽 보안. 2만명 이상이 선택한 믿음직한 파트너"
            width={1080}
            height={200}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
      </section>

      <ReviewSection />
      <BrandSection />
      <PackageSection />
      <FAQSection />

      <section id="cctv-form">
        <div className="container dense">
          <div className="title">
            <h2>지금 바로 보안 전문가의 맞춤 상담을 받아보세요</h2>
            <p>첫 상담 고객님께 드리는 특별한 혜택도 함께!</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FloatingButton />
      <Footer />
    </div>
  )
}
