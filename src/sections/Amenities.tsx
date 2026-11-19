import { amenities } from "../content";
import { Card } from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import { Section, SectionHeader } from "../components/ui/Section";

export function Amenities() {
  return (
    <Section id="amenities">
      <SectionHeader eyebrow="AMENITIES" title="The basics, done properly." />
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-5">
        {amenities.map((a) => (
          <li key={a.title} className="flex">
            <Card className="w-full">
              <Icon name={a.icon} className="h-9 w-9 text-midnight" />
              <h3 className="heading-card text-midnight">{a.title}</h3>
              <p className="body-base">{a.text}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
