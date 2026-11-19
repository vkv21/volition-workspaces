import type { IconName } from "./components/ui/Icon";

// All copy lives here. Items in [BRACKETS] are placeholders from the design
// that still need real values.
export const site = {
  name: "Volition",
  descriptor: "WORKSPACES",
  tagline: "Your space. Your terms.",
  eyebrow: "MANAGED OFFICES · COWORKING",
  legal: "© 2026 Volition Systems Private Limited",
  footerLine: "Volition Workspaces · Managed offices · Coworking",
  contact: ["[ADDRESS], [CITY]", "[PHONE]", "[EMAIL]"],
  terms: "[TAXES, DEPOSIT AND LOCK-IN TERMS]",
} as const;

export const nav = [
  { label: "Amenities", href: "#amenities" },
  { label: "Offices and desks", href: "#spaces" },
] as const;

export interface Amenity {
  icon: IconName;
  title: string;
  text: string;
}

export const amenities: Amenity[] = [
  { icon: "clean", title: "Clean workspaces", text: "Offices and desks kept clean for you." },
  { icon: "wifi", title: "High-speed Wi-Fi", text: "Fast internet for the whole team." },
  { icon: "ac", title: "Air conditioning", text: "Stay comfortable through the working day." },
  { icon: "dining", title: "Common dining area", text: "A shared place to eat and take a break." },
  { icon: "water", title: "Drinking water", text: "Safe drinking water on site." },
];

export interface Plan {
  id: string;
  name: string;
  variant: "solid" | "outline";
  description: string;
  features: string[];
  price: string;
  priceSuffix?: string;
  cta: string;
}

export const plans: Plan[] = [
  {
    id: "office",
    name: "Office",
    variant: "solid",
    description: "A private, managed office for your startup or small company.",
    features: ["3 month or 11 month terms", "All amenities included", "Sized for your team"],
    price: "[OFFICE PRICE]",
    cta: "Ask about offices",
  },
  {
    id: "hot-desk",
    name: "Hot desk",
    variant: "outline",
    description:
      "A seat for freelancers, or for teams that want to seat people outside their main office.",
    features: ["All amenities included", "Limited number of desks"],
    price: "₹4,000",
    priceSuffix: "per month",
    cta: "Ask about hot desks",
  },
];
