import Image, { ImageProps } from "next/image";

import { Box, BoxProps } from "@mui/material";

export type NextImageBoxProps = BoxProps &
  Pick<ImageProps, "src"> & {
    /** The alternative text for the image (when the image is just decorative, use alt="") */
    alt: string;
    /** The original `width` of the image (needed to calculate the ratio when the import is not static) */
    originalWidth?: number;
    /** The original `height` of the image (needed to calculate the ratio when the import is not static) */
    originalHeight?: number;
  };

/** It's a Box wrapper for the Next's Image component, so the image can receive style through `sx` prop.
 *  The image is pre-configured to always have width=100% (trying to fit the parent) e height=auto (to keep the image rate).
 *  So, the `sx` can be used to pass the real desired width or flexBasis (can also be 100%).
 *  When using static import, the component doesn't need to receive the original width/height and automatically generates the blur.
 */
export function NextImageBox({
  src,
  alt,
  originalWidth,
  originalHeight,
  ...rest
}: NextImageBoxProps) {
  const isStaticImport = typeof src === "object";

  return (
    <Box {...rest}>
      <Image
        src={src}
        alt={alt}
        width={!isStaticImport ? originalWidth : undefined}
        height={!isStaticImport ? originalHeight : undefined}
        style={{
          width: "100%",
          height: "auto",
          display: "block", // to avoid a small empty space in the bottom of the image
        }}
        placeholder={isStaticImport ? "blur" : undefined} // use the built-in blur (when using static import)
      />
    </Box>
  );
}
