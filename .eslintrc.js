module.exports = {
  root: true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "import",
    "react-hooks"
  ],
  "rules": {
    "no-console": 0,
    "no-unused-vars": 1,
    "semi": 2,
    "no-unexpected-multiline": 0,
    "no-empty": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/display-name": 1
  }
};