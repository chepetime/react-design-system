// .stylelintrc.js
const {
  propertyOrdering,
  selectorOrdering,
} = require("stylelint-semantic-groups");

module.exports = {
  extends: "stylelint-config-standard-scss",
  rules: {
    "string-quotes": "single",
    "color-hex-case": "upper",
    "selector-class-pattern": "[A-Za-z]+",
    "keyframes-name-pattern": "[A-Za-z]+",
    "selector-pseudo-element-no-unknown": null,
    "selector-pseudo-class-no-unknown": null,
    "media-feature-name-no-unknown": null,
    "number-max-precision": null,
  },
  plugins: ["stylelint-order"],
  rules: {
    "order/order": selectorOrdering, // to fine-tune configuration use selectorOrderFactory
    "order/properties-order": propertyOrdering,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "input-placeholder"],
      },
    ],
    "selector-class-pattern": null,
  },
};
