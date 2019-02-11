module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": ['jsx-a11y'],
  "rules": {
    "no-underscore-dangle": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "import/extensions": "off",
  },
  "globals": { "fetch": false },
};
