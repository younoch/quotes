import axios from 'axios'
const getPostRoutes = async () => {
    const response = await axios.get(
      process.env.API_URL + '/get-quotes?page=1&limit=400'
    );
    const routes = response?.data?.data.map((quote: any) => {
        return {
            _path: `/quote/${quote.slug}`,
            modifiedAt: new Date(),
        }
    })
    if(routes) {
      return routes
    }
  };
export default defineEventHandler(async (e) => {
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
    const postRoutes = await getPostRoutes()
    const allRoute = [... postRoutes, ...posts]
    return allRoute.map((p) => {
      return {
        loc: p._path,
        lastmod: p.modifiedAt,
      };
    });
  });
  