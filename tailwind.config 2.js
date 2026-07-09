/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        honey: {
          50: "#FBF6EA",
          100: "#F5EEDC",
          200: "#EAD9AF",
          300: "#DCBD74",
          400: "#CC9A42",
          500: "#C8862E",
          600: "#A96B1E",
          700: "#8A5518",
          800: "#5E3A10",
          900: "#2E1D08",
        },
        forest: {
          50: "#EEF2ED",
          100: "#D7E0D3",
          300: "#7C9A80",
          500: "#3F6B4A",
          600: "#2F4A3C",
          700: "#223629",
          800: "#1B2B20",
          900: "#16241A",
        },
        clay: {
          500: "#A13D22",
          600: "#8A331C",
        },
        ink: "#241C14",
      },
      fontFamily: {
        display: ["'Libre Caslon Display'", "serif"],
        body: ["'Work Sans'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      backgroundImage: {
        honeycomb:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 0L56 16v32L28 64 0 48V16z' fill='none' stroke='%23C8862E' stroke-opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
