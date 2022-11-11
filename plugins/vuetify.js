// plugins/vuetify.js
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { ar } from "vuetify/locale";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    defaults: {
      nuxt: true,
    },
    locale: {
      defaultLocale: "ar",
      // fallbackLocale: "en",
      messages: { ar },
    },
    icons: {
      defaultSet: "mdi", // This is already the default value - only for display purposes
      aliases,
      sets: {
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
