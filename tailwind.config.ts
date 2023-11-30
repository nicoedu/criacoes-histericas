import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darkTheme: {
          primary: "#b200ff",
          secondary: "#009bff",
          accent: "#00caf4",
          neutral: "#14121c",
          "base-100": "#0d293d",
          info: "#00ffff",
          success: "#00e088",
          warning: "#f97500",
          error: "#ed3d55",
          body: {
            "background-color": "#1B262D",
          },
        },
      },
    ],
  },
};
export default config
