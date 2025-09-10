// clsx 대신 간단한 커스텀 함수 사용
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// 실제 사용되지 않는 함수들 제거
// sleep, formatDate, debounce 제거
