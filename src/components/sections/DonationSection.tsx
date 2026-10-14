import { Box, Typography } from "@mui/material";

import { SectionBox, CopyButton } from "@common";

interface DonationSectionProps {
  title?: string;
  backgroundColor?: string;
}

const PIX_KEY = "f746d9d8-8497-4a9b-8da5-d1e53cd461f9";

export function DonationSection({
  title,
  backgroundColor,
}: DonationSectionProps) {
  return (
    <SectionBox id="doacao" title={title} backgroundColor={backgroundColor}>
      {/* "Wrappable", centered children */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 2,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography>As doações podem ser feitas por PIX.</Typography>
          <Typography>Toda ajuda é muito bem-vinda. Obrigado!</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: 1,
          }}
        >
          <Typography>Chave PIX: {PIX_KEY}</Typography>
          <CopyButton textToCopy={PIX_KEY} />
        </Box>
      </Box>
    </SectionBox>
  );
}
