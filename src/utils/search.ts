export function debounce<T extends (...args: string[]) => void>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export const sanitizeInput = (input: string) => {
  return input.replace(/\s+/g, ' ').trimStart();
};
