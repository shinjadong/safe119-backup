# CCTV Landing Page 컴포넌트 구조

## 페이지 구조 및 컴포넌트 매칭

### 1. Banner Section (`Banner.tsx`)
- ID: `cctv-banner`
- 주요 내용: 메인 배너 이미지 표시
- 텍스트: "최첨단 AI CCTV로 소중한 일상의 안전을 지키는 프리미엄 보안 서비스"
- 이미지: `main_banner_mo.webp`

### 2. Alarm Section (`AlarmSection.tsx`)
- ID: `cctv-alarm`
- 주요 내용:
  - 경고 메시지 및 안전 관련 정보
  - 텍스트:
    - "하루 250건의 범죄, 우리 모두의 안전이 위협받고 있습니다"
    - "이제는 AI 기반 스마트 보안으로 완벽한 안전을 지키세요"
    - "안전은 선택이 아닌 필수입니다"
    - "무자격 업체의 저품질 CCTV 위험성"
    - "해킹 위험과 개인정보 유출 사고 급증!"
  - 이미지: `alarm_img.webp`, `official_banner.svg`

### 3. Review Section (`ReviewSection.tsx`)
- ID: `cctv-review`
- 컴포넌트: `ReviewItem`
- 주요 내용: 고객 리뷰 및 후기 표시
- 데이터 구조:
  - username: 사용자 이름
  - description: 리뷰 내용
  - imageSrc: 리뷰 이미지

### 4. Brand Section (`BrandSection.tsx`)
- ID: `cctv-brand`
- 컴포넌트: `BrandItem`
- 주요 내용: 브랜드 상품 정보
- 데이터 구조:
  - number: 상품 번호
  - title: 상품명
  - description: 상품 설명
  - price: 가격
  - priceDescription: 가격 부가 설명
  - logo: 로고 이미지
  - logoAlt: 로고 대체 텍스트

### 5. Package Section (`PackageSection.tsx`)
- ID: `cctv-package`
- 컴포넌트: `PackageItem`
- 주요 내용: 패키지 상품 정보
- 데이터 구조:
  - imageSrc: 패키지 이미지
  - title: 패키지명
  - description: 패키지 설명

### 6. Contact Form (`ContactForm.tsx`)
- ID: `cctv-form`
- 주요 내용: 상담 신청 폼
- 폼 필드:
  - 성함
  - 휴대폰 번호
  - 문의 유형
  - 문의 내용
  - 개인정보 동의

### 7. FAQ Section (`FAQSection.tsx`)
- ID: `cctv-faq`
- 주요 내용: 자주 묻는 질문과 답변

### 8. Floating Button (`FloatingButton.tsx`)
- 기능: 페이지 내 빠른 이동 또는 상담 신청 버튼

### 9. Footer (`Footer.tsx`)
- 주요 내용: 페이지 하단 정보

### 10. 기타 컴포넌트
- `Layout.tsx`: 전체 페이지 레이아웃 구조
- `theme-provider.tsx`: 테마 관리
- `SomeComponent.tsx`: 미사용 또는 테스트용 컴포넌트

## 컴포넌트 구조 특징
1. 각 섹션별로 독립적인 컴포넌트로 분리되어 있음
2. 재사용 가능한 아이템 컴포넌트들이 각 섹션 내에서 활용됨
3. 반응형 이미지 처리를 위해 Next.js의 Image 컴포넌트 사용
4. 폼 처리를 위한 상태 관리 구현
