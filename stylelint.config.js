/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-recess-order",
  ],
  rules: {
    "declaration-no-important": true,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: [
          "deep",
          "v-deep",
          "global",
        ],
      },
    ],
  },
  ignore: [
    "node_modules/**",
    "dist/**",
  ],
}
