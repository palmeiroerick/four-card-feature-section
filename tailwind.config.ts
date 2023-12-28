import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary */
      red: "#ea5353",
      cyan: "#45d3d3",
      orange: "#fcaf4a",
      blue: "#549ef2",

      /* Neutral */
      veryDarkBlue: "#4c4e61",
      grayishBlue: "#a3a5ae",
      veryLightGray: "#fafafa",
    },
    fontWeight: {
      extralight: "200",
      normal: "400",
      semibold: "600",
    },
  },
  plugins: [],
};

export default config;
