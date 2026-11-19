import type { ReactNode } from "react";

const variants = {
  outline: "border border-ink bg-ivory-card text-ink",
  solid: "bg-midnight text-ivory",
} as const;

interface CardProps {
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
}

export function Card({ variant = "outline", className = "", children }: CardProps) {
  return (
    <div className={`flex flex-col gap-4 rounded-card p-6 sm:p-7 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
