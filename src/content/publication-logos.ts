import type { LocalizedText } from "@/types/locale";

export interface PublicationLogo {
  key: "latindex";
  name: string;
  src: string;
  alt: LocalizedText;
  width: number;
  height: number;
  displayWidth: number;
  displayHeight: number;
}

export const publicationLogos = [
  {
    key: "latindex",
    name: "Latindex Catalogo 2.0",
    src: "/partners/latindex-catalogo2-logo.png",
    alt: {
      es: "Logotipo de Latindex Catalogo 2.0",
      en: "Latindex Catalog 2.0 logo",
    },
    width: 1200,
    height: 613,
    displayWidth: 150,
    displayHeight: 50,
  },
] as const satisfies readonly PublicationLogo[];
