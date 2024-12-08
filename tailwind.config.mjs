/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Dark theme primary colors
        "primary-a0": "#056674",
        "primary-a10": "#327682",
        "primary-a20": "#4f8691",
        "primary-a30": "#6897a0",
        "primary-a40": "#81a7af",
        "primary-a50": "#9ab9bf",

        // Dark theme surface colors
        "surface-a0": "#101010",
        "surface-a10": "#262626",
        "surface-a20": "#3d3d3d",
        "surface-a30": "#565656",
        "surface-a40": "#707070",
        "surface-a50": "#8a8a8a",

        // Dark theme mixed surface colors
        "surface-mixed-a0": "#14191a",
        "surface-mixed-a10": "#292e2f",
        "surface-mixed-a20": "#404445",
        "surface-mixed-a30": "#585c5d",
        "surface-mixed-a40": "#727576",
        "surface-mixed-a50": "#8c8f90",
      },
    },
  },
  plugins: [],
};
