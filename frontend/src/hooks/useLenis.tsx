import { useEffect, useRef } from "react";
import Lenis, { LenisOptions } from "lenis";

const useLenis = (
  options: LenisOptions = {},
  enabled: boolean = true
): Lenis | null => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    lenisRef.current = new Lenis(options);

    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [enabled, options]);

  return lenisRef.current;
};

export default useLenis;
