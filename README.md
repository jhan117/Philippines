# Philippines Insight

대구대학교 파란사다리 사업 필리핀 연수 2조의 현지 조사 기록, 문화·역사·경제·환경 아티클, 현지인 인터뷰를 담은 웹 아카이브입니다.

---

## Tech Stack

- **Core**: React 19, TypeScript, Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Deployment**: Vercel

---

## Project Structure

```text
src/
├── pages/               # 홈(HomePage), 동적 서브페이지(SubPage)
├── components/
│   ├── layout/          # Header, Footer, Dropdown, FloatingActions
│   ├── home/            # 히어로 슬라이드, 소개, 카테고리 그리드
│   ├── member/          # 조원 소개 카드
│   └── blog/            # 본문 렌더러, 인터뷰 뷰, 카드 리스트
└── data/
    ├── siteData.ts      # 네비게이션, 멤버, 카테고리 메타데이터
    ├── pageConfigs.ts   # 서브페이지 경로 매핑
    └── configs/         # 주제별 본문·인터뷰 데이터
```

---

## Getting Started

```bash
npm install
npm run dev      # 로컬 개발 서버 실행
npm run build    # 타입 검사(tsc) 및 프로덕션 빌드
npm run preview  # 빌드 결과물 미리보기
```

---

## Development History

- **2024.07 ~ 2024.08 (1차 개발)**
  - Next.js 기반 아카이브 사이트 초기 구축 및 GitHub Pages 배포
  - 메인 슬라이드, 조원 소개, 주제별 아티클 및 현지인 인터뷰 페이지 구현
- **2026.07 (2차 리팩토링)**
  - 전체 코드베이스 TypeScript 전환 및 데이터 구조화(`src/data/configs/`)
  - Tailwind CSS 도입, 매거진 스타일 개편, 모바일 햄버거·아코디언 메뉴 구현
- **2026.11 (3차 최적화)**
  - Next.js → **Vite + React Router** 마이그레이션 (보안 취약점 및 불필요 서버 런타임 제거)
  - 이미지 80장 WebP 일괄 최적화 (`88.89 MB → 10.91 MB`)
  - 불필요 패키지(`sharp`, FontAwesome, Prettier, `react-type-animation`) 제거 및 UI/UX 버그 수정
