// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  ssr: true,
  app: {
    head: {
      charset: "utf-8",
      meta: [
        {
          name: "google-site-verification",
          content: "VZeznQM4NYGPR7oy00PAQNw6EsbHsayjrVlFtTBtfbI",
        },
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      ],
      viewport: "width=device-width, initial-scale=1.0",
      htmlAttrs: {
        lang: "zxx",
      },
    },
    // baseURL: "/demos/vue/The Speakers/",
  },

  css: ["~/assets/scss/style.scss"], // add
  // vite: {
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  // },
  typescript: {
    strict: true,
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/content",
    "@nuxt/devtools",
    "nuxt-gtag",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
  ],
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    "@nuxt/typescript-build",
  ],
  gtag: {
    id: "G-B515496QYL",
    config: {
      page_title: "The Speakers",
    },
  },

  runtimeConfig: {
    public: {
      API_URL: "https://app.the-speakers.com/api/v1",
    },
  },

  plugins: [
    { src: "@/plugins/all.min.js", mode: "client" },
    { src: "@/plugins/aos.js", mode: "client" },
    { src: "@/plugins/axios.ts", mode: "client" },
  ],
  generate: { fallback: false },
  extend(config, ctx) {
    config.resolve.symlinks = false;
  },
  routes: ["/"],
  nuxt: {
    host: "0.0.0.0",
    port: "3000", // optional
  },
  devtools: {
    enabled: true,
  },
});
