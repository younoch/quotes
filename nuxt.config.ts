import axios from "axios";
const getPostRoutes = async () => {
  const response = await axios.get(
    process.env.API_URL + "/get-quotes?page=1&limit=400"
  );
  const routes = response?.data?.data.map(
    (quote: any) => `/quote/${quote.slug}`
  );
  if (routes) {
    return routes;
  }
};
export default defineNuxtConfig({
  target: "server",
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
        lang: "en",
      },
    },
    // baseURL: "/demos/vue/The Speakers/",
  },

  css: ["~/assets/scss/style.scss"],
  typescript: {
    strict: true,
  },
  serverMiddleware: [
    "~/server/middlewere/header.ts"
  ],
  server: {
    host: process.env.SITEMAP,
    port: 443,
    protocol: 'https'
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/content",
    "nuxt-icons",
    "@nuxt/devtools",
    "nuxt-gtag",
    "@nuxt/image",
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
  routeRules: {
    "/account/**": { index: false },
    "/contact-us": { index: false },
    "/chat": { index: false },
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      SITEMAP: process.env.SITEMAP,
    },
  },

  plugins: [
    { src: "@/plugins/aos.js", mode: "client" },
    { src: "@/plugins/axios.ts", mode: "client" },
    // { src: "@/plugins/quill.ts", mode: "client" },
    { src: "@/plugins/fb-sdk.ts", mode: "client" },
  ],
  build: {
    transpile: ["fb-sdk"],
  },
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

  hooks: {
    async "nitro:config"(nitroConfig) {
      const slugs = await getPostRoutes();
      nitroConfig.prerender.routes.push(...slugs);
    },
  },
  nitro: {
    devProxy: {
      "/api/": {
        target: process.env.SITEMAP,
        changeOrigin: true,
      },
    },
    prerender: {
      crawlLinks: true,
      // routes: ["/", "sitemap.xml"],
      ignore: ["/account/**"],
    },
  },
  generate: { fallback: "404.html" },
  extend(config: { resolve: { symlinks: boolean } }, ctx: any) {
    config.resolve.symlinks = false;
  },
  site: {
    url: process.env.SITEMAP,
  },
  sitemap: {
    sources: ["/api/sitemap"],
  },
  routes: ["/"],
  nuxt: {
    host: "0.0.0.0",
    port: "3000",
  },
  devtools: {
    enabled: true,
  },
  trailingSlash: false,
});