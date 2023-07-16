// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      htmlAttrs: {
        lang: "zxx",
      },
      title: "Torkgo Web 3 Metaverse IDO Launchpad Vue.js (Nuxt.js) Template",
      titleTemplate: `%s | Torkgo Web 3 Metaverse IDO Launchpad Vue.js (Nuxt.js) Template`,
      meta: [
        {
          name: "description",
          hid: "description",
          content:
            "Torkgo Web 3 Metaverse IDO Launchpad Vue.js (Nuxt.js) Template by TheTork. It is suitable for any kind of IDO,IGO,INO and Metaverse Launchpad.",
        },
        {
          name: "keywords",
          content:
            "torkgo, web3, ico ino, nft, blockchain,launchpad,ido launchpad, nft launchpad, crypto launchpad, nuxt js, vue js, bootstrap 5",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/images/og.png",
        },
        {
          name: "application-name",
          content:
            "Torkgo Web 3 Metaverse IDO Launchpad Vue.js (Nuxt.js) Template",
        },
      ],
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
    // baseURL: "/demos/vue/torkgo/",
  },

  css: ["~/assets/scss/style.scss", "~/assets/css/all.min.css"], // add
  // vite: {
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  // },
  typescript: {
    strict: true
  },
  modules: ["@pinia/nuxt", "@nuxt/content"],
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/axios", "@nuxt/typescript-build"],

  runtimeConfig : {
    public: {
      API_URL : process.env.API_URL
    }
  },

  plugins: [
    { src: "@/plugins/purecounter.js", mode: "client" },
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
});
