//server/api/_sitemap-urls.ts
export default cachedEventHandler(
    async (e) => {
      const posts = await Promise.all([
        {
          _path: '/quotes/category/love',
          modifiedAt: new Date(),
        },
        {
          _path: '/quotes/category/life',
          modifiedAt: new Date(),
        },
        {
          _path: '/quotes/category/birthday',
          modifiedAt: new Date(),
        },
        {
          _path: '/quotes/category/motivational',
          modifiedAt: new Date(),
        },
        {
          _path: '/quotes/category/funny',
          modifiedAt: new Date(),
        },
        {
          _path: '/quotes/category/inspirational',
          modifiedAt: new Date(),
        },
        {
          _path: '/quotes/category/family',
          modifiedAt: new Date(),
        },
        {
          _path: '/quotes/category/movie',
          modifiedAt: new Date(),
        },
      ]);
      return posts.map((p) => {
        return {
          loc: p._path,
          lastmod: p.modifiedAt,
        };
      });
    },
    {
      name: 'sitemap-dynamic-url',
      maxAge: Number(useRuntimeConfig().public.SITEMAPCACHETIME),
    }
  );
  