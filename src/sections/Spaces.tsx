import { plans, site } from "../content";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Section, SectionHeader } from "../components/ui/Section";

export function Spaces() {
  return (
    <Section id="spaces" tone="mist">
      <SectionHeader eyebrow="OFFICES AND DESKS" title="Pick the space and the term." />
      <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">
        {plans.map((p) => {
          const solid = p.variant === "solid";
          return (
            <Card key={p.id} variant={p.variant} className="gap-4 sm:gap-[18px] sm:p-9">
              <h3 className={`font-display text-3xl font-semibold sm:text-4xl ${solid ? "" : "text-midnight"}`}>
                {p.name}
              </h3>
              <p className={`text-base leading-normal sm:text-[17px] ${solid ? "text-mist" : ""}`}>
                {p.description}
              </p>
              <ul className="body-base flex flex-col gap-1 leading-relaxed">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className={`font-display text-3xl font-semibold ${solid ? "text-coral" : "text-midnight"}`}>
                {p.price}
                {p.priceSuffix && (
                  <span className="ml-1 font-sans text-base font-medium">{p.priceSuffix}</span>
                )}
              </p>
              <Button href="#contact" variant={solid ? "primary" : "dark"} className="self-start">
                {p.cta}
              </Button>
            </Card>
          );
        })}
      </div>
      <p className="body-base mt-8 text-sm">{site.terms}</p>
    </Section>
  );
}
