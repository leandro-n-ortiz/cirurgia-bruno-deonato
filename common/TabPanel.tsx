import { Box, SxProps } from "@mui/material";

type TabPanelProps = {
  /** Value that represents this tabpanel */
  value: string;
  /** The value of the active tab (the one whose content will be displayed) */
  selectedTabValue?: string;
  /** The tabpanel content */
  children: React.ReactNode;
  /** Tabpanel Box's sx override */
  sx?: SxProps;
};

/**
 *  It's the panel to display the content of each correspondent tab.
 *  Its "frame" is always rendered (due to a11y needs, but hidden) and its content (children) is conditionally render (to avoid rendering all tabpanel contents at once).
 */
export function TabPanel({
  value,
  selectedTabValue,
  children,
  sx,
}: TabPanelProps) {
  return (
    <div
      id={`${value}-tabpanel`}
      aria-labelledby={`${value}-tab`}
      role="tabpanel"
      hidden={selectedTabValue !== value}
    >
      {selectedTabValue === value && (
        <Box sx={{ padding: 2, ...sx }}>{children}</Box>
      )}
    </div>
  );
}
