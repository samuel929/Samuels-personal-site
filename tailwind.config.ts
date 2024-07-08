import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography'
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config;
