import {
  StartSection,
  DonationSection,
  DetailsSection,
} from "@/components/sections";

/** Home page sections, used both by the navigation drawer and the page itself (anchor scrolling). */
export const SECTIONS: readonly {
  id: string;
  title: string;
  component:
    | typeof StartSection
    | typeof DonationSection
    | typeof DetailsSection;
}[] = [
  { id: "inicio", title: "Início", component: StartSection },
  { id: "doacao", title: "Contribuição", component: DonationSection },
  { id: "detalhes", title: "Mais detalhes", component: DetailsSection },
] as const;
