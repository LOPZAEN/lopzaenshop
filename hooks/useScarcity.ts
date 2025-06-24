import { useMemo } from 'react';

export function useScarcity(stock: number) {
  return useMemo(() => {
    if (stock <= 5) return `⚠️ ¡Solo quedan ${stock} unidades!`;
    return null;
  }, [stock]);
}
