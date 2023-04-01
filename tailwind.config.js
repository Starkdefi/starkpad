const config = require("@starkdefi/starkdefi-components-lib/tailwind.config");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ...config.theme.extend.fontFamily,
        "MBF-Space-regular": ["MBF Space", "sans-serif"],
      },
      colors: {
        ...config.theme.extend.colors,
        "cta-gray": "#F2F2F2",
      },
      screens: {
        ...config.theme.extend.screens,
      },
    },
  },
  plugins: [],
};
