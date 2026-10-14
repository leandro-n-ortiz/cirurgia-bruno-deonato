import { Box, Typography } from "@mui/material";

import { SectionBox } from "@common";

interface StartSectionProps {
  title?: string;
  backgroundColor?: string;
}

export function StartSection({ backgroundColor }: StartSectionProps) {
  return (
    <SectionBox id="inicio" backgroundColor={backgroundColor}>
      {/* "Wrappable", centered children */}
      <Box
        sx={{
          flexGrow: 1, // grows horizontally to fill up the entire section
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" component="p" sx={{ textAlign: "center" }}>
          Um olhar de esperança: Vamos pra cima, juntos pela recuperação da
          minha visão!
        </Typography>
      </Box>
    </SectionBox>
  );
}
