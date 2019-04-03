module.exports = {
  env: {
    browser: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 5
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": "warn"
  }
};
