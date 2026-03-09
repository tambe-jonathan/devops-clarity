import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollSkeletonProps {
  children: ReactNode;
  className?: string;
  skeletonClassName?: string;
  lines?: number;
}

export function ScrollSkeleton({ 
  children, 
  className = "",
  skeletonClassName = "",
  lines = 3 
}: ScrollSkeletonProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <div ref={ref} className={className}>
      {!isVisible ? (
        <div className={`space-y-4 ${skeletonClassName}`}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className="scroll-skeleton rounded-xl"
              style={{ 
                height: i === 0 ? '2rem' : '1rem',
                width: i === 0 ? '60%' : i === lines - 1 ? '40%' : '80%',
                animationDelay: `${i * 150}ms`
              }}
            />
          ))}
        </div>
      ) : (
        <div className="animate-fade-in-up">
          {children}
        </div>
      )}
    </div>
  );
}