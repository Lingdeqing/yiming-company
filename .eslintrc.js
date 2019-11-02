module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/prop-types": 0,
    "no-return-assign": 0,
    "no-new": 0
  }
}
