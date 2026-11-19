import type { ReactNode } from "react";

const tones = {
  ivory: "bg-ivory text-ink",
  mist: "bg-mist text-ink",
  midnight: "bg-midnight text-ivory",
} as const;

export type Tone = keyof typeof tones;

interface SectionProps {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}

export function Section({ id, tone = "ivory", className = "", children }: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} section-y ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

interface HeaderProps {
  eyebrow: string;
  title: string;
  tone?: Tone;
  children?: ReactNode;
}

/** Eyebrow label + section heading (+ optional lead paragraph). */
export function SectionHeader({ eyebrow, title, tone = "ivory", children }: HeaderProps) {
  const dark = tone === "midnight";
  return (
    <div className="flex max-w-2xl flex-col gap-3.5">
      <p className={`eyebrow ${dark ? "text-coral" : "text-midnight"}`}>{eyebrow}</p>
      <h2 className={`heading-section ${dark ? "text-ivory" : "text-midnight"}`}>{title}</h2>
      {children}
    </div>
  );
}
