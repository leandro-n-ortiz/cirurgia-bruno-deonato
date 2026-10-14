import { ReactNode } from "react";

import { Box, Typography } from "@mui/material";

interface SectionBoxProps {
  id: string;
  title?: string;
  textColor?: string;
  backgroundColor?: string;
  children: ReactNode;
}

/**
 * Full-height anchorable section wrapper, used by each home page section.
 * Children are rendered in column layout and wrap to the next line if they exceed the width of the section.
 */
export function SectionBox({
  id,
  title,
  backgroundColor,
  textColor,
  children,
}: SectionBoxProps) {
  return (
    <Box
      id={id}
      sx={{
        scrollMarginTop: 64, // matches the default MuiToolbar height
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        padding: 4,
        backgroundColor,
        color: textColor,
      }}
    >
      {title && (
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      )}
      <Box
        sx={{
          width: "100%",
          flexGrow: "1", // grows vertically to fill up the entire section
          // becomes a row container for the section's children
          display: "flex",
          justifyContent: "center", // always center the children horizontally in the screen (to look good in any screen size)
          flexWrap: "wrap", // wraps to the next line when the row is filled
          gap: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
