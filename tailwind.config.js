const Values = require("values.js");
const SHADES = 10;

const colors = {
  primary: "#38384e",
};

for (const key in colors) {
  if (colors.hasOwnProperty(key)) {
    const base = colors[key];
    colors[key] = { base };

    for (let i = 1; i < SHADES; i++) {
      const color = new Values(base);

      colors[key][`l${i}`] = color.tint(i * 10).hexString();
    }

    for (let i = 1; i < SHADES; i++) {
      const color = new Values(base);
      colors[key][`d${i}`] = color.shade(i * 10).hexString();
    }
  }
}

module.exports = {
  theme: {
    fontFamily: {
      sans: ["Merriweather Sans", "sans-serif"],
    },
    extend: {
      colors: colors,
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./public/**/*.html",
      "./src/**/*.vue",
      "@mdi/font/css/materialdesignicons.css",
      "vue-typed-jsdist/vue-typed-js.css",
    ],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },
};
