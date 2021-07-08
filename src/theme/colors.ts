import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#31db9a",
  primaryBright: "#31db9a",
  primaryDark: "#31db9a",
  secondary: "#31db9a",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#1F2833",
  backgroundDisabled: "#E9EAEB",
  contrast: "#07090b",
  invertedContrast: "#FFFFFF",
  input: "#31db9a",
  tertiary: "#EFF4F5",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#31db9a",
  borderColor: "#E9EAEB",
  card: "#07090b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#31db9a",
  background: "#1F2833",
  backgroundDisabled: "#E9EAEB",
  contrast: "#07090b",
  invertedContrast: "#FFFFFF",
  input: "#31db9a",
  primaryDark: "#136B49",
  tertiary: "#EFF4F5",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#31db9a",
  borderColor: "#E9EAEB",
  card: "#07090b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
