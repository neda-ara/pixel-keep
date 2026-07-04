import type { CSSProperties } from "react";
import type { PixelArt as PixelArtData } from "@pixel-keep/core";

interface PixelArtProps {
  art: PixelArtData;
  pixelSize?: number;
  fit?: number;
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

  const scale = fit === undefined ? 1 : Math.min(fit / width, fit / height);

  return (
    <div
      style={{
        width: fit ?? width,
        height: fit ?? height,
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
