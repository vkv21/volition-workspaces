import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex min-h-[44px] items-center justify-center rounded-control font-sans font-semibold transition-colors focus-ring";

const variants = {
  primary: "bg-coral text-ink hover:brightness-95",
  dark: "bg-midnight text-ivory hover:bg-ink",
  ghost: "font-medium text-ivory hover:underline",
} as const;

const sizes = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base sm:text-[17px]",
} as const;

interface Common {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
}

type AnchorProps = Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;
type NativeProps = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/** Renders an <a> when given `href`, otherwise a <button>. */
export function Button(props: AnchorProps | NativeProps) {
  const { variant = "primary", size = "md", className = "", children, ...rest } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
