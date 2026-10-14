import { Stack } from "@mui/material";

import { SECTIONS } from "../constants/sections";

export default async function Home() {
  return (
    <Stack>
      {/* Home page structure (for now, it's the only page) */}
      {SECTIONS.map((section) => {
        const Component = section.component;

        return <Component key={section.id} title={section.title} />;
      })}
    </Stack>
  );
}
