import { createPixelArt } from "@pixel-keep/core";

const palette = ["#FFD54F", "#EC407A", "#43A047"] as const;

export const Flower = createPixelArt({
  id: "flower",
  name: "Flower",
  category: "flowers",
  width: 2,
  height: 2,
  palette,
  bitmap: ["01", "2."],
  tags: ["cute", "plant", "flower"],
});
