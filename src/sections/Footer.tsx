import { site } from "../content";
import { LogoMark } from "../components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-ink py-7 text-sm text-mist">
      <div className="container-page flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-6 w-6 shrink-0" />
          <span>{site.footerLine}</span>
        </div>
        <span>{site.legal}</span>
      </div>
    </footer>
  );
}
