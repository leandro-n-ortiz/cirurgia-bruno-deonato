/** Canonical site URL, used to build absolute URLs for metadata, sitemap, robots, etc. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://cirurgia-bruno-deonato.vercel.app";

export const SITE_NAME = "Cirurgia Bruno Deonato";

export const SITE_DESCRIPTION =
  "Um olhar de esperança: Vamos pra cima, juntos pela recuperação da minha visão!";

export const SITE_KEYWORDS = [
  "Cirurgia Bruno Deonato",
  "Ajuda cirurgia",
  "Doação PIX",
] as const;

export const SITE_LOCALE = "pt_BR";

export const SITE_PRIMARY_COLOR = "#09346e";
