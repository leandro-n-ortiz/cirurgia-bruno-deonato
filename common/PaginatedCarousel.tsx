"use client";

import { TouchEvent, useMemo, useRef, useState } from "react";

import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { NextImageBox, NextImageBoxProps } from "./NextImageBox";

export type PaginatedCarouselImage = Pick<NextImageBoxProps, "src" | "alt">;

type PaginatedCarouselProps = {
  images: PaginatedCarouselImage[];
};

/**
 * Carousel that paginates a list of portrait images, showing 3 images per page on large screens,
 * 2 on smaller screens and 1 on mobile-sized screens, with arrow and dot navigation between pages.
 */
export function PaginatedCarousel({ images }: PaginatedCarouselProps) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isXsUp = useMediaQuery(theme.breakpoints.up("xs"));
  const imagesPerPage = isMdUp ? 3 : isSmUp ? 2 : isXsUp ? 1 : 3; // fallback to 3 when media queries are not available yet (e.g. during SSR)

  const pages = useMemo(() => {
    const chunks: PaginatedCarouselImage[][] = [];
    for (let i = 0; i < images.length; i += imagesPerPage) {
      chunks.push(images.slice(i, i + imagesPerPage));
    }
    return chunks;
  }, [images, imagesPerPage]);

  const [pageIndex, setPageIndex] = useState(0);
  // clamp in case `imagesPerPage` changed (screen resize) and reduced the number of pages
  const currentPageIndex = Math.min(pageIndex, pages.length - 1);

  const SWIPE_THRESHOLD = 50; // minimum horizontal distance (px) to consider it a swipe
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (event: TouchEvent) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartXRef.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (deltaX > SWIPE_THRESHOLD && currentPageIndex > 0) {
      setPageIndex(currentPageIndex - 1);
    } else if (
      deltaX < -SWIPE_THRESHOLD &&
      currentPageIndex < pages.length - 1
    ) {
      setPageIndex(currentPageIndex + 1);
    }
  };

  if (pages.length === 0) return null;

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton
          aria-label="Página anterior"
          disabled={currentPageIndex === 0}
          onClick={() => setPageIndex(currentPageIndex - 1)}
        >
          <ArrowBackIcon />
        </IconButton>

        <Box
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            touchAction: "pan-y pinch-zoom", // allow vertical scroll and pinch-zoom while still capturing horizontal swipes
          }}
        >
          {pages[currentPageIndex].map((image, index) => (
            <NextImageBox
              key={index}
              {...image}
              sx={{ flexBasis: `calc(100% / ${imagesPerPage})` }}
            />
          ))}
        </Box>

        <IconButton
          aria-label="Próxima página"
          disabled={currentPageIndex === pages.length - 1}
          onClick={() => setPageIndex(currentPageIndex + 1)}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      {pages.length > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
          {pages.map((_, index) => (
            <Box
              key={index}
              component="button"
              aria-label={`Ir para a página ${index + 1}`}
              onClick={() => setPageIndex(index)}
              sx={{
                width: 10,
                height: 10,
                padding: 0,
                border: "none",
                borderRadius: "50%",
                backgroundColor:
                  index === currentPageIndex ? "text.primary" : "text.disabled",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
