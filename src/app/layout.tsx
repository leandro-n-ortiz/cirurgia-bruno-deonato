import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";

import { AppRouterCacheProvider as MuiCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { CssBaseline, Container, ThemeProvider } from "@mui/material";

import theme from "../theme";
import { TopBar } from "../components/TopBar";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_PRIMARY_COLOR,
} from "@/constants/site";
import { SECTIONS } from "@/constants/sections";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: SITE_LOCALE,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: SITE_PRIMARY_COLOR, // theme.palette.primary.main (can't import "use client" theme here)
};

/** JSON-LD structured data describing the fundraising campaign, for rich search results. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

/** JSON-LD describing the home page's anchor sections, so search engines can surface in-page jump links. */
const siteNavigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SECTIONS.map((section, index) => ({
    "@type": "SiteNavigationElement",
    position: index + 1,
    name: section.title,
    url: `${SITE_URL}/#${section.id}`,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <body>
        {/* Structured data for search engines (schema.org WebSite + section navigation) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteNavigationJsonLd),
          }}
        />
        <MuiCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* App base container (including the top bar) */}
            <Container maxWidth="lg" disableGutters>
              <TopBar />
              {children}
            </Container>
          </ThemeProvider>
        </MuiCacheProvider>
      </body>
    </html>
  );
}
