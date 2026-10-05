export function isDemoSource(source: string | null | undefined): boolean {
  return source === "DEMO";
}

export function sourceLabel(source: string | null | undefined): string {
  if (isDemoSource(source)) return "데모 예제";
  if (source === "BIZINFO") return "기업마당 데이터";
  return source || "출처 확인 필요";
}

export const DEMO_NOTICE = "직접 작성한 데모 예제입니다. 실제 지원사업이나 신청 가능한 공고가 아닙니다.";
