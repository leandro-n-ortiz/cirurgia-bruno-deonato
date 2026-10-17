import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

/**
 *  Wrapper for Mui's Link.
 *  Opens the link in a new tab with security attributes.
 */
export function ExternalLink({ children, sx, ...rest }: MuiLinkProps) {
  return (
    <MuiLink
      {...rest}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "inline-block", // to allow having "width"
        width: "fit-content",
        ...sx, // let styles be overridden
      }}
    >
      {children}
    </MuiLink>
  );
}
