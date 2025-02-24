// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  colorMode: {
    preference: "light",
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxt/fonts",
    "@nuxt/test-utils/module",
    "@vueuse/nuxt",
    "@nuxt/eslint",
  ],

  css: ["@/assets/css/main.postcss"],

  postcss: {
    plugins: {},
  },

  image: {
    quality: 80,
    format: ["avif", "webp"],
  },

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    locales: [
      { code: "en", iso: "en-US", name: "English(US)", file: "en.json" },
      { code: "ar", iso: "ar-EG", name: "Arabic(EG)", file: "ar.json" },
    ],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },

  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },

  runtimeConfig: {
    public: {
      apiBase: "",
    },
  },

  app: {
    pageTransition: { name: "fadeInBlur", mode: "out-in" },
  },

  components: [{ path: "~/components", pathPrefix: false }],
  compatibilityDate: "2025-02-22",
});