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

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !cancelled) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => { cancelled = true; observer.disconnect(); };
  }, []);

  const fromTransform =
    direction === "left"  ? "translateX(-32px)" :
    direction === "right" ? "translateX(32px)" :
    "translateY(32px)";

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

const StaggerCtx = createContext<{ visible: boolean; delay: number }>({ visible: false, delay: 0.1 });

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerChildren({ children, className = "" }: StaggerProps) {
  const staggerDelay = 0.1;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !cancelled) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => { cancelled = true; observer.disconnect(); };
  }, []);

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
  index?: number;
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
