import { Box, Typography } from "@mui/material";

import { SectionBox, CopyButton, NextImageBox } from "@common";

import qrCode from "@public/qrcode-pix.png";

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
          textAlign: "center",
        }}
      >
        <Typography>
          As contribuições podem ser feitas diretamente por PIX.
        </Typography>

        <Box>
          <Typography>Chave PIX (Aleatória):</Typography>
          <Typography variant="body2">{PIX_KEY}</Typography>
          <CopyButton
            label="Copiar"
            textToCopy={PIX_KEY}
            fullWidth
            variant="contained"
            sx={{ mt: 1 }}
          />
        </Box>

        <NextImageBox
          src={qrCode}
          alt="QrCode do PIX"
          sx={{ width: "150px" }}
        />
      </Box>
    </SectionBox>
  );
}
