import { site } from "../content";
import { Button } from "../components/ui/Button";
import { LogoMark } from "../components/ui/Logo";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-midnight py-14 sm:py-20 lg:pb-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6 sm:gap-7">
          <p className="eyebrow text-coral">{site.eyebrow}</p>
          <h1 className="heading-display text-ivory">{site.tagline}</h1>
          <p className="body-lead max-w-[520px] text-mist">
            Fully managed offices for growing teams, on 3 or 11 month terms. A few hot desks for
            freelancers at ₹4,000 per month.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="#contact" size="lg">
              Book a tour
            </Button>
            <Button href="#spaces" variant="ghost" size="lg">
              See offices and desks
            </Button>
          </div>
        </div>
        <div className="flex justify-center" aria-hidden="true">
          <LogoMark strokeClass="stroke-midnight-soft" className="w-3/4 max-w-[420px] lg:w-full" />
        </div>
      </div>
    </section>
  );
}
