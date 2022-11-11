import vuetify from "vite-plugin-vuetify";

const ONE_DAY = 60 * 60 * 24 * 1000;
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      isDebug: process.env.NODE_ENV == "development",
      baseURL:
        process.env.NODE_ENV == "production"
          ? process.env.BASE_URL
          : "http://localhost:3000/v1/",
    },
  },
  css: ["vuetify/styles"], // vuetify ships precompiled css, no need to import sass
  vite: {
    // @ts-ignore
    // curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
    ssr: {
      noExternal: ["vuetify"], // add the vuetify vite plugin
    },
  },
  modules: [
    // @ts-ignore
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) => {
        config.plugins.push(vuetify());
      });
    },
  ],
});
