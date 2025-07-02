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
      fontSize: {
        h1b: [
          "32px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        h1m: [
          "32px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
        h2b: [
          "28px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        h2m: [
          "28px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
        h3b: [
          "24px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        h3m: [
          "24px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
        h4b: [
          "20px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        h4m: [
          "20px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
        h5b: [
          "18px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        h5m: [
          "18px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
        h5r: [
          "18px",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],
        body1sb: [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],
        body1m: [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
        body1r: [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],
        body2sb: [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],
        body2m: [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
        body2r: [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],
        caption1m: [
          "13px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
        caption1r: [
          "13px",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],
        caption2m: [
          "11px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
        caption2r: [
          "11px",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],
      },
      boxShadow: {
        shadow2: "2px 2px 10px 0px rgba(0, 0, 0, 0.05)",
        shadow4:
          "2px 2px 20px 0px rgba(0, 0, 0, 0.06), 2px 2px 10px 0px rgba(0, 0, 0, 0.04)",
        shadow8:
          "2px 4px 12px 0px rgba(0, 0, 0, 0.10), 0px 0px 4px 0px rgba(0, 0, 0, 0.10)",
        shadow16:
          "0px 4px 12px 0px rgba(0, 0, 0, 0.10), 4px 8px 28px 0px rgba(0, 0, 0, 0.04)",
        primaryShadow: "0px 0px 0px 3px rgba(99, 102, 241, 0.40)",
        secondaryShadow: "0px 0px 0px 3px rgba(45, 212, 191, 0.40)",
        tertiaryShadow: "0px 0px 0px 3px rgba(64, 64, 64, 0.10)",
        dangerShadow: "0px 0px 0px 3px rgba(244, 63, 94, 0.40)",
      },
    },
  },
};

export default config;
