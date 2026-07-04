import type { CSSProperties } from "react";
import type { PixelArt as PixelArtData } from "@pixel-keep/core";

interface PixelArtProps {
  art: PixelArtData;
  pixelSize?: number;
  fit?: number | string;
  className?: string;
}

export function PixelArt({
  art,
  pixelSize = 16,
  fit,
  className = "",
}: PixelArtProps) {
  const width = art.width * pixelSize;
  const height = art.height * pixelSize;

  const fitSize = typeof fit === "number" ? `${fit}px` : fit;

  const scale =
    typeof fit === "number" ? Math.min(fit / width, fit / height) : 1;

  return (
    <div
      style={{
        width: fitSize ?? `${width}px`,
        height: fitSize ?? `${height}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className={`pixel-art ${className}`}
        style={
          {
            "--pixel-size": `${pixelSize}px`,
            "--pixel-width": art.width,
            "--pixel-height": art.height,
            transform: `scale(${scale})`,
            transformOrigin: "center",
          } as CSSProperties
        }
        role="img"
        aria-label={art.name}
      >
        {art.pixels.map((pixel, index) => {
          const color = pixel === -1 ? "transparent" : art.palette[pixel];

          return (
            <span
              key={index}
              className="pixel-art__pixel"
              style={{
                backgroundColor: color,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
