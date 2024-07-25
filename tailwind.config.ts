import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "check-black": "url('/assets/icons/check-black.svg')",
        "check-white": "url('/assets/icons/check-white.svg')",
      },
      fontWeight: {
        extraBold: "700",
        bold: "600",
        medium: "500",
        light: "400",
      },
      colors: {
        primary: "#19191A",
        secondary: "#549AEF",
        tertiary: "#07CF57",
        contents: "#F7944C",
        warning: "#F62424",
        disable: "#DFE2E5",
        gray: "#A3A3A3",
        gray2: "#F2F2F2",
        gray3: "#CBCBCB",
        white: "#FFFFFF",
        kakao: "#FEE500",
      },
      boxShadow: {
        custom: "0 0 20px 0 rgba(0, 0, 0, 0.2)", // 10% 투명도
      },
    },
    screens: {
      sm: { max: "600px" },
    },
  },

  plugins: [],
};
export default config;
