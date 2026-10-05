# FinBridge Frontend

2026 금융 AI Challenge 팀 `start`의 FinBridge 웹 프론트엔드입니다.
지원사업 검색·상세 조회, 일반/집중 모드 AI 채팅, 창업 리스크·소득 안정성 계산과
CSV/XLSX 매출장표 분석을 backend API에 연결합니다.

## 기술 구성

React 19 · TypeScript · Vite 8 · Tailwind CSS v4 · react-markdown

## 로컬 실행

Node.js 22.12 이상과 pnpm을 준비하고 저장소 루트에서 실행합니다.
Node.js 20을 사용하는 경우 20.19 이상이 필요합니다.

```powershell
pnpm install --frozen-lockfile
$env:VITE_API_BASE_URL = "http://127.0.0.1:8000"
pnpm dev
```

기본 개발 주소는 `http://localhost:8443`입니다. backend도 별도로 실행해야 하며,
backend의 `FINBRIDGE_CORS_ORIGINS`에 프론트엔드 Origin을 허용해야 합니다.
`VITE_API_BASE_URL`은 `.env.local`에서도 설정할 수 있습니다. 미설정 시 기존
Railway 주소를 사용하지만 해당 주소의 현재 운영 여부를 보장하지 않습니다.

```powershell
pnpm exec tsc --noEmit
pnpm build
pnpm preview
```

Vercel 배포 시 Build Command는 `pnpm build`, Output Directory는 `dist`입니다.
`VITE_API_BASE_URL`은 빌드 시 반영되므로 변경 후 재배포해야 합니다.
`VITE_` 변수는 브라우저에 노출됩니다. OpenAI/기업마당 API Key 등 비밀값을 넣지 않습니다.

## 데이터와 구현 범위

- 지원사업은 backend가 선택한 Snapshot을 사용합니다. 프론트엔드에 공고 원문 데이터셋을 포함하지 않습니다.
- `source=DEMO`는 직접 작성한 합성 예제이며 실제 공고나 신청 가능한 사업이 아닙니다. 카드·상세·찜한 혜택·채팅에 구분해 표시합니다.
- `source=BIZINFO`는 기업마당 수집 데이터입니다. 최신 신청 기간과 최종 자격은 원문에서 확인해야 합니다.
- API 오류 시 오류/재시도 상태를 표시합니다. 서버 오류를 가짜 공고 응답으로 대체하지 않습니다.
- 프로필·찜 목록·대화는 React 메모리 상태이며 새로고침하면 초기화됩니다. 회원 인증과 영속 저장 기능은 구현 범위에 포함되지 않습니다.
- 집중모드 입력과 채팅은 backend로 전송되며 AI 설명을 사용하는 경우 서버 설정에 따라 외부 모델 API로 전달될 수 있습니다. 실제 개인정보나 민감 금융정보 대신 예제 입력으로 확인하세요.
- 계산 결과는 입력값에 따른 참고 지표이며 선정·대출 승인·신용평가를 보장하지 않습니다.

## 주요 디렉토리

| 경로 | 역할 |
| --- | --- |
| `src/api/` | backend 요청과 응답 타입 |
| `src/pages/` | 검색·채팅·프로필·계산 화면 |
| `src/components/` | 카드·내비게이션·상태 안내 |
| `src/data/` | API 데이터 변환과 출처 표시 |
| `src/index.css` | 전역 스타일과 폰트 |

## 외부 자산

Pretendard v1.3.9를 jsDelivr CDN에서 불러옵니다. 출처와 SIL Open Font License 1.1은
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) 및 [라이선스 원문](public/licenses/Pretendard-OFL.txt)을 참고하세요.
폰트 라이선스는 이 프로젝트 코드 전체에 대한 라이선스가 아닙니다.
