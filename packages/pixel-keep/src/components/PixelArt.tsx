import type { PixelArt as PixelArtData } from "@pixel-keep/core";

interface PixelArtProps {
  art: PixelArtData;
  pixelSize?: number;
  className?: string;
}

export function PixelArt({
  art,
  pixelSize = 16,
  className = "",
}: PixelArtProps) {
  return (
    <div
      className={`pixel-art ${className}`}
      style={
        {
          "--pixel-size": `${pixelSize}px`,
          "--pixel-width": art.width,
          "--pixel-height": art.height,
        } as React.CSSProperties
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
  );
}
