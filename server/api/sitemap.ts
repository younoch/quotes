import axios from 'axios'
// const getPostRoutes = async () => {
//     const response = await axios.get(
//       process.env.API_URL + '/get-quotes?page=1&limit=400'
//     );
//     const routes = response?.data?.data.map((quote: any) => {
//         return {
//             _path: `/quote/${quote.slug}`,
//             modifiedAt: new Date(),
//         }
//     })
//     if(routes) {
//       return routes
//     }
//   };
export default defineEventHandler(async (e) => {
    const staticRoutes = await Promise.all([
      {
        _path: '/quotes/love',
        modifiedAt: new Date(),
      },
      {
        _path: '/quotes/life',
        modifiedAt: new Date(),
      },
      {
        _path: '/quotes/birthday',
        modifiedAt: new Date(),
      },
      {
        _path: '/quotes/motivational',
        modifiedAt: new Date(),
      },
      {
        _path: '/quotes/funny',
        modifiedAt: new Date(),
      },
      {
        _path: '/quotes/inspirational',
        modifiedAt: new Date(),
      },
      {
        _path: '/quotes/family',
        modifiedAt: new Date(),
      },
      {
        _path: '/quotes/movie',
        modifiedAt: new Date(),
      },
    ]);
    // const postRoutes = await getPostRoutes()
    const allRoute = [ ...staticRoutes]
    // const allRoute = [... postRoutes, ...staticRoutes]
    return allRoute.map((p) => {
      return {
        loc: p._path,
        lastmod: p.modifiedAt,
      };
    });
  });
  