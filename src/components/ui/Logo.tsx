import { site } from "../../content";

type Tone = "light" | "dark";

interface MarkProps {
  /** `light` = ivory V (for midnight grounds), `dark` = midnight V. */
  tone?: Tone;
  /** Override the V colour (e.g. the hero watermark). */
  strokeClass?: string;
  className?: string;
  label?: string;
}

/** The V holding a coral dot. */
export function LogoMark({
  tone = "light",
  strokeClass,
  className = "h-10 w-10",
  label,
}: MarkProps) {
  const stroke = strokeClass ?? (tone === "light" ? "stroke-ivory" : "stroke-midnight");
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <path
        d="M10 14 L32 52 L54 14"
        fill="none"
        strokeWidth="9"
        strokeLinejoin="miter"
        className={stroke}
      />
      <circle cx="32" cy="16" r="6.5" className="fill-coral" />
    </svg>
  );
}

interface LogoProps {
  tone?: Tone;
  /** Mark size in Tailwind classes. */
  markClassName?: string;
  wordClassName?: string;
}

/** Horizontal lockup: mark, wordmark, spaced descriptor. */
export function Logo({
  tone = "light",
  markClassName = "h-10 w-10",
  wordClassName = "text-2xl",
}: LogoProps) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark tone={tone} className={markClassName} />
      <span className="flex flex-col gap-[3px]">
        <span
          className={`font-display font-semibold leading-none tracking-display ${wordClassName} ${
            tone === "light" ? "text-ivory" : "text-midnight"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`text-[9px] font-semibold tracking-wordmark ${
            tone === "light" ? "text-coral" : "text-midnight"
          }`}
        >
          {site.descriptor}
        </span>
      </span>
    </span>
  );
}
