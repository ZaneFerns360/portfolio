/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {
      fontFamily: {
        ls: "league-spartan, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
