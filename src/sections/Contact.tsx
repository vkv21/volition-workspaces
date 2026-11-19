import { useState, type FormEvent } from "react";
import { site } from "../content";
import { Button } from "../components/ui/Button";
import { FormField } from "../components/ui/FormField";
import { Section, SectionHeader } from "../components/ui/Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend is specified yet; wire this to your endpoint when one exists.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <Section id="contact" tone="midnight">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-5">
          <SectionHeader eyebrow="BOOK A TOUR" title="See the space first." tone="midnight" />
          <p className="body-lead max-w-[460px] text-mist">
            Tell us how many seats you need and for how long. We'll get back to you to fix a time.
          </p>
          <address className="flex flex-col gap-1.5 pt-3 text-base not-italic leading-normal">
            {site.contact.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>

        <form className="flex w-full max-w-[520px] flex-col gap-[18px]" onSubmit={onSubmit}>
          <FormField
            id="vw-name"
            label="Your name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
          <FormField
            id="vw-contact"
            label="Phone or email"
            name="contact"
            type="text"
            autoComplete="email"
            required
          />
          <FormField id="vw-need" label="What do you need?" name="need" type="text" />
          <Button type="submit" size="lg" className="h-[52px]">
            Book a tour
          </Button>
          <p role="status" className="min-h-[1.5rem] text-sm text-mist">
            {sent ? "Thanks. We'll be in touch to fix a time." : ""}
          </p>
        </form>
      </div>
    </Section>
  );
}
