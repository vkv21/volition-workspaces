import { useState } from "react";
import { nav } from "../content";
import { Button } from "../components/ui/Button";
import { Icon } from "../components/ui/Icon";
import { Logo } from "../components/ui/Logo";

const navLink = "block py-3 text-[15px] font-medium text-ivory focus-ring md:py-2";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-20 bg-midnight">
      <div className="container-page flex items-center justify-between py-4 sm:py-5">
        <a
          href="#top"
          aria-label="Volition Workspaces, home"
          className="focus-ring"
          onClick={close}
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className={navLink}>
              {l.label}
            </a>
          ))}
          <Button href="#contact">Book a tour</Button>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ivory focus-ring md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="container-page flex flex-col pb-5 md:hidden"
        >
          {nav.map((l) => (
            <a key={l.href} href={l.href} className={navLink} onClick={close}>
              {l.label}
            </a>
          ))}
          <Button href="#contact" className="mt-2" onClick={close}>
            Book a tour
          </Button>
        </nav>
      )}
    </header>
  );
}
