"use client";

import { createTheme } from "@mui/material/styles";

import { SITE_PRIMARY_COLOR } from "@/constants/site";

const theme = createTheme({
  palette: {
    primary: {
      main: SITE_PRIMARY_COLOR,
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

export default theme;
