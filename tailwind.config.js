/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#2563EB",
          ".btn": {
            "font-weight": "400",
            "border-radius": ".25rem",
            "font-size": "1rem",
            "padding-left": "1rem",
            "padding-right": "1rem",
            height: "2.625rem",
            "min-height": "2.625rem",
          },
          ".input": {
            "border-radius": ".25rem",
            height: "2.625rem",
            "min-height": "2.625rem",
          },
          ".btn-primary": {
            color: "#fff",
          },
        },
      },
    ],
  },
};
