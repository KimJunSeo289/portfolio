# 프론트엔드_김준서 Portfolio

스크롤 기반의 원페이지 포트폴리오 웹사이트입니다. Linear Frontend와 유사한 환경으로 구성되었습니다.

## 🚀 기술 스택

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand
- **Build Tool**: Vite
- **Code Quality**: ESLint, Prettier

## 🎨 특징

- **스크롤 기반 원페이지**: 클릭 없이 스크롤로 모든 섹션 탐색
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **부드러운 애니메이션**: Framer Motion으로 구현된 인터랙티브 요소
- **다크 테마**: 개발자 친화적인 다크 모드
- **성능 최적화**: Vite와 React 19의 최신 기능 활용

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── ui/             # 기본 UI 컴포넌트
│   │   ├── Navbar.tsx      # 스크롤 기반 네비게이션
│   │   └── Footer.tsx      # 푸터
│   ├── sections/           # 페이지 섹션들
│   │   ├── Hero.tsx        # 메인 히어로 섹션
│   │   ├── About.tsx       # 소개 섹션
│   │   ├── Skills.tsx      # 기술 스택 섹션
│   │   ├── Projects.tsx    # 프로젝트 섹션
│   │   └── Contact.tsx     # 연락처 섹션
│   ├── hooks/              # 커스텀 훅
│   ├── store/              # 상태 관리
│   ├── types/              # TypeScript 타입 정의
│   ├── utils/              # 유틸리티 함수
│   ├── assets/             # 정적 파일
│   ├── App.tsx             # 메인 앱 컴포넌트
│   ├── main.tsx           # 엔트리 포인트
│   └── index.css          # 글로벌 스타일
├── public/                 # 공개 정적 파일
├── .vscode/               # VSCode 설정
└── 설정 파일들...
```

## 🛠️ 개발 환경 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

서버는 `http://localhost:3000`에서 실행됩니다.

### 3. 빌드

```bash
npm run build
```

### 4. 프리뷰

```bash
npm run preview
```

## 📝 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행 (포트 3000)
- `npm run build` - 프로덕션 빌드
- `npm run lint` - ESLint 실행 및 자동 수정
- `npm run format` - Prettier로 코드 포맷팅
- `npm run preview` - 빌드된 앱 프리뷰
- `npm run type-check` - TypeScript 타입 체크

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Blue (#0ea5e9)
- **Accent**: Purple (#8b5cf6)
- **Background**: Dark (#0a0a0a)
- **Foreground**: Light (#fafafa)

### 폰트
- **Sans**: Inter
- **Mono**: JetBrains Mono
- **Display**: Poppins

## 📱 섹션 구성

### 1. Hero Section
- 메인 인트로 및 프로필
- 소셜 링크
- CTA 버튼

### 2. About Section
- 개인 소개
- 개발 철학
- 핵심 가치

### 3. Skills Section
- 기술 스택 (Frontend, Backend, Tools)
- 스킬 레벨 시각화
- 경력 통계

### 4. Projects Section
- 주요 프로젝트 쇼케이스
- 카테고리별 필터링
- 프로젝트 상세 정보

### 5. Contact Section
- 연락처 정보
- 메시지 폼
- 소셜 링크

## 🔧 커스터마이징

### Tailwind 설정
`tailwind.config.js`에서 컬러, 폰트, 애니메이션 등을 수정할 수 있습니다.

### 컴포넌트 스타일
모든 컴포넌트는 Tailwind CSS 클래스를 사용하여 스타일링되어 있습니다.

### 스크롤 네비게이션
`Navbar.tsx`에서 섹션별 스크롤 감지 및 활성 상태 관리를 담당합니다.

## ⚡ 성능 최적화

- Vite의 빠른 HMR (Hot Module Replacement)
- 컴포넌트 지연 로딩
- 이미지 최적화
- CSS 번들 최적화
- 스크롤 기반 애니메이션 최적화

## 🌟 주요 기능

- **스무스 스크롤**: CSS와 JavaScript를 활용한 부드러운 섹션 이동
- **스크롤 스파이**: 현재 보고 있는 섹션 하이라이트
- **반응형 네비게이션**: 모바일과 데스크톱 모두 지원
- **인터랙티브 애니메이션**: 스크롤 위치에 따른 요소 애니메이션
- **다이나믹 콘텐츠**: 프로젝트 필터링 및 동적 표시

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📞 연락처

- **이메일**: junseo.kim@example.com
- **GitHub**: [github.com/junseokim](https://github.com)
- **LinkedIn**: [linkedin.com/in/junseokim](https://linkedin.com)

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 있습니다.

---

**프론트엔드_김준서** - 사용자 경험을 중시하는 프론트엔드 개발자 🚀
