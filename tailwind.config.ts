import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        green: {
          light: "#55e5a4",
          dark: "#61C698",
        },
        gray: {
          10: "#f0f0f4",
          20: "#EEEEEE",
          30: "#E3E3E3",
          50: "#A9A9A9",
          80: "#686565",
          90: "#77808B",
          100: "#8C8C8C",
        },
        dark: {
          90: "#26313F",
          100: "#151C25",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
