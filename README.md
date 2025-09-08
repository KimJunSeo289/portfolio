# Portfolio

Linear Frontend와 유사한 환경으로 구성된 모던 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Code Quality**: ESLint, Prettier

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── ui/             # 기본 UI 컴포넌트
│   │   ├── Layout.tsx      # 레이아웃 컴포넌트
│   │   ├── Navbar.tsx      # 네비게이션
│   │   └── Footer.tsx      # 푸터
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
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
npm preview
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

## 🔧 커스터마이징

### Tailwind 설정
`tailwind.config.js`에서 컬러, 폰트, 애니메이션 등을 수정할 수 있습니다.

### 컴포넌트 스타일
모든 컴포넌트는 Tailwind CSS 클래스를 사용하여 스타일링되어 있습니다.

## 📱 반응형 디자인

모든 페이지와 컴포넌트는 모바일 우선으로 설계되었으며, 다양한 화면 크기에서 최적화되어 있습니다.

## ⚡ 성능 최적화

- Vite의 빠른 HMR (Hot Module Replacement)
- 코드 스플리팅
- 이미지 최적화
- CSS 번들 최적화

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 있습니다.
