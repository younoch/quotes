// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  ssr: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      htmlAttrs: {
        lang: "zxx",
      },
      link: [
        {
          rel: "shortcut icon",
          type: "image/png",
          href: "/images/favicon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicon.png",
        },
      ],
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
  modules: ["@pinia/nuxt", "@nuxt/content", "@nuxtjs/robots", "@nuxt/devtools", "nuxt-simple-sitemap"],
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    "@nuxt/typescript-build",
    "@nuxtjs/google-analytics"
  ],
  googleAnalytics: {
    id: 'G-B515496QYL'
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
