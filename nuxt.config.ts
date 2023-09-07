// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  ssr: true,
  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: process.env.SEARCH_CONSOLE,
        },
      ],
      viewport: "width=device-width, initial-scale=1.0",
      htmlAttrs: {
        lang: "zxx",
      },
    },
    // baseURL: "/demos/vue/The Speakers/",
  },

  css: ["~/assets/scss/style.scss"],
  typescript: {
    strict: true,
  },
  serverMiddleware: [
    '~/server/middlewere/header.ts'
  ],
  modules: [
    "@pinia/nuxt",
    "@nuxt/content",
    'nuxt-icons',
    "@nuxt/devtools",
    "nuxt-gtag",
    "nuxt-simple-sitemap",
    "@nuxt/image"
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
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  site: {
    url: process.env.SITEMAP,
  },
  sitemap: {
    cacheTtl: Number(process.env.SITEMAPCACHETIME) || 0
  },
  routeRules: {
    '/account/**': { index: false },
    '/contact-us': { index: false },
  },

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      SITEMAPCACHETIME: process.env.SITEMAPCACHETIME
    },
  },

  plugins: [
    { src: "@/plugins/aos.js", mode: "client" },
    { src: "@/plugins/axios.ts", mode: "client" },
  ],
  render: {
    static: {
      setHeaders: (
        resp: {
          req: { originalUrl: string };
          setHeader: (arg0: string, arg1: string) => void;
        },
        path: any
      ) => {
        if (
          resp.req.originalUrl === "/.well-known/apple-app-site-association"
        ) {
          resp.setHeader("Content-Type", "application/json");
        }
      },
    },
  },
  generate: { fallback: false },
  extend(config: { resolve: { symlinks: boolean } }, ctx: any) {
    config.resolve.symlinks = false;
  },
  routes: ["/"],
  nuxt: {
    host: "0.0.0.0",
    port: "3000",
  },
  devtools: {
    enabled: true,
  },
});
