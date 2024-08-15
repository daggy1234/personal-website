import type { DeepPartial, Theme } from "@chakra-ui/react";

const fonts: DeepPartial<Theme["fonts"]> = {
  heading: "PPNeueMontreal, sans-serif",
  body: "PPNeueMontreal, sans-serif",
};

const fontWeights: DeepPartial<Theme["fontWeights"]> = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export { fonts, fontWeights };
