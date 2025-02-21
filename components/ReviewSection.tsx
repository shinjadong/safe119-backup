import Image from "next/image"

interface ReviewItemProps {
  username: string
  rating: number
  content: string
  date: string
  imageSrc: string
}

function ReviewItem({ username, rating, content, date, imageSrc }: ReviewItemProps) {
  return (
    <div className="review-item">
      <div className="review-header">
        <div className="user-info">
          <div className="avatar" style={{ position: 'relative', width: '48px', height: '48px' }}>
            <Image
              src={imageSrc}
              alt={username}
              fill
              sizes="48px"
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          <div className="user-details">
            <span className="username">{username}</span>
            <div className="rating">
              {Array.from({ length: rating }).map((_, i) => (
                <Image
                  key={i}
                  src="https://cdn.ajd.kr/images/platform/landing/cctv/star.svg"
                  alt="별점"
                  width={16}
                  height={16}
                />
              ))}
            </div>
          </div>
        </div>
        <span className="review-date">{date}</span>
      </div>
      <div className="review-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export function ReviewSection() {
  return (
    <section id="cctv-review">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">2만명 이상</span>이 선택한<br />
          안전지대 119의 생생한 후기
        </h2>
        <div className="review-grid">
          <ReviewItem
            username="김**님"
            rating={5}
            content="전문가의 꼼꼼한 설치와 친절한 설명 덕분에 안심하고 사용하고 있어요. 화질도 좋고 앱으로 확인하기도 편리해서 만족스럽습니다."
            date="2024.02.15"
            imageSrc="https://cdn.ajd.kr/images/platform/landing/cctv/review1.webp"
          />
          <ReviewItem
            username="박**님"
            rating={5}
            content="아이들 등하교 확인용으로 설치했는데, 선명한 화질과 넓은 화각 덕분에 사각지대 없이 모니터링이 가능해요."
            date="2024.02.14"
            imageSrc="https://cdn.ajd.kr/images/platform/landing/cctv/review2.webp"
          />
          <ReviewItem
            username="이**님"
            rating={5}
            content="저렴한 CCTV로 고생했었는데, 전문가님 추천으로 설치한 이후로는 훨씬 안심이 되네요. 확실히 다르네요!"
            date="2024.02.13"
            imageSrc="https://cdn.ajd.kr/images/platform/landing/cctv/review3.webp"
          />
        </div>
      </div>
    </section>
  )
}
