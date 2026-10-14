import { Tab as MuiTab, TabProps as MuiTabProps } from "@mui/material";

/**
 *  Wrapper for Mui's Tab.
 *  Handles a11y internally.
 */
export function Tab({ value, ...rest }: MuiTabProps) {
  return (
    <MuiTab
      id={`${value}-tab`}
      aria-controls={`${value}-tabpanel`}
      value={value}
      {...rest}
    />
  );
}
