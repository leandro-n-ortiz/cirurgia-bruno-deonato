import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

/**
 *  Wrapper for Mui's Link.
 *  Opens the link in a new tab with security attributes.
 */
export function ExternalLink({ children, ...rest }: MuiLinkProps) {
  return (
    <MuiLink {...rest} target="_blank" rel="noopener noreferrer">
      {children}
    </MuiLink>
  );
}
