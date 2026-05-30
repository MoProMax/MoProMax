"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
} from "react";

/* ── FadeIn ─────────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fromTransform =
    direction === "up"    ? "translateY(32px)" :
    direction === "left"  ? "translateX(-32px)" :
    direction === "right" ? "translateX(32px)" : "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible ? "none" : fromTransform,
        transition: `transform 0.65s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── StaggerChildren + StaggerItem ─────────────────────── */
const StaggerCtx = createContext<{ visible: boolean; delay: number }>({ visible: false, delay: 0.1 });

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerChildren({ children, className = "", staggerDelay = 0.1 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Inject the map index into each StaggerItem so it can stagger correctly */
  const enriched = Children.map(children, (child, i) =>
    isValidElement(child) ? cloneElement(child as React.ReactElement<{ index?: number }>, { index: i }) : child
  );

  return (
    <StaggerCtx.Provider value={{ visible, delay: staggerDelay }}>
      <div ref={ref} className={className}>{enriched}</div>
    </StaggerCtx.Provider>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  index?: number; /* injected by StaggerChildren */
}

export function StaggerItem({ children, className = "", index = 0 }: StaggerItemProps) {
  const { visible, delay } = useContext(StaggerCtx);
  const d = `${(index * delay).toFixed(2)}s`;

  return (
    <div
      className={className}
      style={{
        transform: visible ? "none" : "translateY(28px)",
        transition: `transform 0.6s cubic-bezier(0.21,0.47,0.32,0.98) ${d}`,
      }}
    >
      {children}
    </div>
  );
}
