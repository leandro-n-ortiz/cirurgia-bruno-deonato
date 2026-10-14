import type { MetadataRoute } from "next";

import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_PRIMARY_COLOR,
} from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Cirurgia Bruno Deonato",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: SITE_PRIMARY_COLOR,
    icons: [],
  };
}
