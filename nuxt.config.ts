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
          content:  process.env.SEARCH_CONSOLE
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
    id: process.env.G_TAG,
    config: {
      page_title: "The Speakers",
    },
  },

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL
    },
  },

  plugins: [
    { src: "@/plugins/all.min.js", mode: "client" },
    { src: "@/plugins/aos.js", mode: "client" },
    { src: "@/plugins/axios.ts", mode: "client" },
  ],
  render: {
    static: {
      setHeaders: (resp: { req: { originalUrl: string; }; setHeader: (arg0: string, arg1: string) => void; }, path: any) => {
        if (resp.req.originalUrl === '/.well-known/apple-app-site-association') {
          resp.setHeader('Content-Type', 'application/json')
        }
      },
    },
  },
  generate: { fallback: false },
  extend(config: { resolve: { symlinks: boolean; }; }, ctx: any) {
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
