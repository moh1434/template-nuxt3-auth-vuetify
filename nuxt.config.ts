import vuetify from "vite-plugin-vuetify";

const ONE_DAY = 60 * 60 * 24 * 1000;
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      isDebug: process.env.NODE_ENV == "development",
      EXTERNAL_API_URL: process.env.EXTERNAL_API_URL ?? "set BASE_URL in .env please",
    },
  },
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    // @ts-ignore
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any ) => config.plugins.push(
        vuetify()
      ))
    },
  ],
  devtools: { enabled: true },
});
