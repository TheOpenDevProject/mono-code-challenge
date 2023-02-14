module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["*.js", "*.jsx"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
  rules: {
    "no-console": ["warn", { allow: ["error", "clear", "info"] }],
    "react-hooks/exhaustive-deps": "off",
  },
};
