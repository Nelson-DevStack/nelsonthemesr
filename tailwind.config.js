/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    fontFamily: {
      'main': ['Atkinson', 'ui-sans-serif', 'system-ui'],
      'fira': ['Fira Code', 'monospace']
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

