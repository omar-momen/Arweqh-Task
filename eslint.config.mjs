// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  //  fill it with some custom rules
  {
    rules: {
      "no-unused-vars": "error",
    },
  }
);
