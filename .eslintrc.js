module.exports = {
  env: {
      browser: true, // Browser global variables like `window` etc.
      commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
      es6: true, // Enable all ECMAScript 6 features except for modules.
      jest: true, // Jest global variables like `it` etc.
      node: true, // Defines things like process.env when generating through node
      es2021: true,
  },
  extends: [],
  overrides: [
    {
      files: ["**/*.test.js", "**/*.spec.js"],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module" // Allows for the use of imports
  },
  plugins: ["react"],
  root: true, // For configuration cascading.
  rules: {
    "semi": "off",
    "react/react-in-jsx-scope": "off",
    "space-before-function-paren": "off",
    "react/jsx-indent": [2, 2],
    "react/prop-types": "off",
    "jsx-quotes": [2, "prefer-double"],
    "quotes": [2, "double"],
    "quote-props": [2, "consistent"],
    "multiline-ternary": "off",
    "react/no-unescaped-entities": "off",
    "comma-dangle": "off",
  },
  settings: {
      react: {
          version: "detect" // Detect react version
      }
  }
};