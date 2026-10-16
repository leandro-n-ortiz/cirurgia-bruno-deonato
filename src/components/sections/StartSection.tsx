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
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h6" component="p" sx={{ textAlign: "center" }}>
          Um olhar de esperança: Vamos pra cima, juntos pela recuperação da
          minha visão!
        </Typography>

        <iframe
          height="560"
          width="315"
          src="https://www.youtube.com/embed/T7yijUHbVQQ?si=HopH8wRYWkyL-xLy"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Box>
    </SectionBox>
  );
}
