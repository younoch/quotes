//server/api/_sitemap-urls.ts
export default cachedEventHandler(
    async (e) => {
      const posts = await Promise.all([
        {
          _path: '/quote/category/love',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/category/life',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/category/birthday',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/category/motivational',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/category/funny',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/category/inspirational',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/category/family',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/category/movie',
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
  