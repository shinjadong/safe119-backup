import Image from "next/image"

export function AlarmSection() {
  return (
    <section id="cctv-alarm">
      <div className="container">
        <div className="alarm-news">
          <div className="tit">
            <h4>하루 250건의 범죄, 우리 모두의 안전이 위협받고 있습니다</h4>
            <h3>이제는 AI 기반 스마트 보안으로 완벽한 안전을 지키세요</h3>
          </div>
          <div className="cont">
            <div className="alarm-content">
              <div className="crime-stat">
                하루 250건의 범죄 발생
              </div>
              <div className="main-message">
                우리의 일상을 위협하는 범죄로부터<br />
                <span className="text-blue">가족의 안전</span>을 지키세요
              </div>
              <div style={{ position: 'relative', width: '100%', maxWidth: '300px', height: '300px', margin: '40px auto' }}>
                <Image
                  src="https://cdn.ajd.kr/images/platform/landing/cctv/alarm_img.webp"
                  alt="경고등"
                  fill
                  sizes="300px"
                  style={{ objectFit: 'contain' }}
                  className="alarm-img"
                />
              </div>
              <div className="warning-box">
                <p className="warning-title">저가형 홈캠, CCTV 때문에 내 사생활이 실시간 중계된다?</p>
                <p className="warning-subtitle">무자격 업체의 저품질 CCTV가 부르는 위험</p>
                <ul className="warning-list">
                  <li>
                    <div className="warning-icon">
                      <i className="fas fa-exclamation-circle"></i>
                    </div>
                    <div className="warning-text">
                      <h4>해킹에 취약한 보안</h4>
                      <p>중국산 저가 CCTV로 인한<br />개인정보 유출 사고 급증</p>
                    </div>
                  </li>
                  <li>
                    <div className="warning-icon">
                      <i className="fas fa-exclamation-circle"></i>
                    </div>
                    <div className="warning-text">
                      <h4>불안정한 시스템</h4>
                      <p>범죄 발생 시<br />영상 손실 및 증거 확보 실패</p>
                    </div>
                  </li>
                  <li>
                    <div className="warning-icon">
                      <i className="fas fa-exclamation-circle"></i>
                    </div>
                    <div className="warning-text">
                      <h4>개인정보 무방비 노출</h4>
                      <p>암호화되지 않은 영상으로<br />사생활 침해 위험</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
