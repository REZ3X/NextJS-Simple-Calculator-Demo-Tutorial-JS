/**
 * Tailwind CSS configuration file.
 * 
 * @type {import('tailwindcss').Config}
 * 
 * @property {string} darkMode - Enables dark mode with the 'class' strategy.
 * @property {string[]} content - Specifies the paths to all of the template files in the project.
 * @property {object} theme - Extends the default theme.
 * @property {object} theme.extend - Custom theme extensions.
 * @property {object} theme.extend.colors - Custom color palette.
 * @property {object} theme.extend.colors.light - Light mode color scheme.
 * @property {string} theme.extend.colors.light.background - Background color for light mode.
 * @property {string} theme.extend.colors.light.foreground - Foreground color for light mode.
 * @property {object} theme.extend.colors.dark - Dark mode color scheme.
 * @property {string} theme.extend.colors.dark.background - Background color for dark mode.
 * @property {string} theme.extend.colors.dark.foreground - Foreground color for dark mode.
 * @property {Array} plugins - Array of plugins to be used with Tailwind CSS.
 */
export default {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          foreground: "#171717",
        },
        dark: {
          background: "#0a0a0a",
          foreground: "#ededed",
        },
      },
    },
  },
  plugins: [],
};