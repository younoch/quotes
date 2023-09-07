//server/api/_sitemap-urls.ts
export default cachedEventHandler(
    async (e) => {
      const posts = await Promise.all([
        {
          _path: '/quote/love',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/life',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/birthday',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/motivational',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/funny',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/inspirational',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/family',
          modifiedAt: new Date(),
        },
        {
          _path: '/quote/movie',
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
  