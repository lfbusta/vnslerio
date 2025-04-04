import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        test: "var(--test)",
      },
    },
  },
  plugins: [],
} satisfies Config;
