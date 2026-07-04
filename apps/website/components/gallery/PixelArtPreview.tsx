"use client";

import { PixelArt } from "pixel-keep";
import { useEffect, useRef, useState } from "react";
import type { PixelArtData } from "pixel-keep";

interface PixelArtPreviewProps {
  art: PixelArtData;
}

export function PixelArtPreview({ art }: PixelArtPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState(160);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      setFit(entry.contentRect.width);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex aspect-square w-full items-center justify-center"
    >
      <PixelArt art={art} pixelSize={4} fit={fit} />
    </div>
  );
}
