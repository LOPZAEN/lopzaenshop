import { useEffect, useState } from 'react';

export function useUrgency() {
  const [time, setTime] = useState(600); // 10 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `🔥 Oferta termina en ${minutes}:${seconds.toString().padStart(2, '0')}`;
}
