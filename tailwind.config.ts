import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        grayscale: {
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#DEDEDE",
          400: "#BFBFBF",
          500: "#A0A0A0",
          600: "#777777",
          700: "#444444",
          800: "#222222",
          900: "#1C1C1C",
        },
        primary: {
          100: "#E6F8F1",
          200: "#6BD8AC",
          300: "#2BC788",
          400: "#00BC70",
          500: "#00844E",
        },
        secondary: {
          100: "#EDF1FF",
          200: "#98AEFF",
          300: "#6B8BFF",
          400: "#4D73FF",
          500: "#3651B3",
        },
        navy: {
          100: "#E9EAEC",
          200: "#7E8392",
          300: "#474E63",
          400: "#212A43",
          500: "#171D2F",
        },
        purple: {
          100: "#F3ECFD",
          200: "#BC90F4",
          300: "#9F60EF",
          400: "#8B40EC",
          500: "#612DA5",
        },
        warning: {
          100: "#FFF5E9",
          200: "#FCC77D",
          300: "#FBAE44",
          400: "#FA9E1E",
          500: "#AF6F15",
        },
        error: {
          100: "#FFECEB",
          200: "#F6938C",
          300: "#F3645A",
          400: "#F04438",
          500: "#A83027",
        },
      },
    },
  },
};

export default config;
