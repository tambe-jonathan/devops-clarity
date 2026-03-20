import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollSkeletonProps {
  children: ReactNode;
  className?: string;
}

export function ScrollSkeleton({ children, className = "" }: ScrollSkeletonProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
