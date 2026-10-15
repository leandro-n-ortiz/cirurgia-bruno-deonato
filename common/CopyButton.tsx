"use client";

import { useState } from "react";

import {
  Button,
  ButtonProps,
  Fade,
  IconButton,
  IconButtonProps,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import { ContentCopy as ContentCopyIcon } from "@mui/icons-material";

type CopyButtonBaseProps = {
  /** The text to be copied to the clipboard when the button is clicked */
  textToCopy: string;
  /** How long the "Copied!" popover stays visible, in milliseconds */
  popoverDurationMs?: number;
};

type CopyButtonWithLabelProps = CopyButtonBaseProps &
  Omit<ButtonProps, "onClick" | "endIcon" | "children"> & {
    /** Text displayed in the button, before the copy icon */
    label: string;
  };

type CopyIconButtonProps = CopyButtonBaseProps &
  Omit<IconButtonProps, "onClick" | "children"> & {
    label?: undefined;
  };

type CopyButtonProps = CopyButtonWithLabelProps | CopyIconButtonProps;

// The union can't be narrowed after destructuring, so the rest props are cast per branch
type ButtonRestProps = Omit<
  CopyButtonWithLabelProps,
  keyof CopyButtonBaseProps | "label"
>;
type IconButtonRestProps = Omit<
  CopyIconButtonProps,
  keyof CopyButtonBaseProps | "label"
>;

/** Button (label + trailing copy icon) that copies `textToCopy` to the clipboard and shows a "Copied!" popover for a few seconds. */
export function CopyButton({
  textToCopy,
  popoverDurationMs = 2000,
  label,
  ...rest
}: CopyButtonProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  async function copyToClipboard(text: string) {
    // navigator.clipboard is unavailable on insecure (non-HTTPS) contexts and some mobile browsers
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    // currentTarget is only valid synchronously, so it must be captured before the await
    const button = event.currentTarget;

    // copy to clipboard
    await copyToClipboard(textToCopy);

    // show the popover for a few seconds
    setAnchorEl(button);
    setTimeout(() => setAnchorEl(null), popoverDurationMs);
  }

  return (
    <>
      {label ? (
        <Button
          onClick={handleClick}
          endIcon={<ContentCopyIcon />}
          {...(rest as ButtonRestProps)}
        >
          {label}
        </Button>
      ) : (
        <IconButton
          onClick={handleClick}
          aria-label="Copiar"
          {...(rest as IconButtonRestProps)}
        >
          <ContentCopyIcon />
        </IconButton>
      )}
      {/* Popper (not Popover) so it doesn't trap focus or aria-hide the background */}
      <Popper
        open={!!anchorEl}
        anchorEl={anchorEl}
        placement="top"
        transition
        sx={{ pointerEvents: "none", zIndex: (theme) => theme.zIndex.tooltip }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={200}>
            <Paper sx={{ px: 1.5, py: 0.5 }}>
              <Typography fontSize="small">Copiado!</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}
