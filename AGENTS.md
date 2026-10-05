# FinBridge Frontend

React 19 + TypeScript + Vite 8 + Tailwind CSS v4 프로젝트입니다.

- 기존 UI 구조와 스타일을 유지하며 필요한 수정만 합니다.
- API 응답의 `source=DEMO`는 직접 작성한 예제로 표시하고 실제 공고로 표현하지 않습니다.
- 지원 자격 판정과 금융 계산은 backend 응답을 사용합니다.
- `VITE_` 환경변수는 브라우저에 노출됩니다. API Key나 토큰을 넣지 않습니다.
- 개발 서버는 `pnpm dev`로 실행합니다. 기본 포트는 8443이며 `PORT`로 변경할 수 있습니다.
- 변경 후 `pnpm exec tsc --noEmit`과 `pnpm build`로 확인합니다.
- `src/api/`는 API 계약, `src/data/`는 화면 변환, `src/pages/`는 페이지, `src/components/`는 공통 UI입니다.
- `src/index.css`는 전역 CSS와 Pretendard 폰트 설정입니다.
- `vite.config.ts`에 원래 Figma Make 미리보기 구성이 남아 있습니다. 기능 변경 없이 임의 제거하지 않습니다.
