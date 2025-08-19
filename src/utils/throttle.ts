export const throttle = <T extends (...args: any[]) => void>(func: T, limit: number): T => {
  let lastCall = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return ((...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        lastCall = Date.now();
        timeout = null;
        func(...args);
      }, limit - (now - lastCall));
    }
  }) as T;
};
