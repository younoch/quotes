export default defineNuxtRouteMiddleware((to) => {
    const token = useCookie('token');
    const router = useRouter();
  
    if (token.value && to?.name === 'login') {
      return navigateTo('/');
    } 
    if (!token.value && to?.name !== 'login') {
      abortNavigation();
      return router.push('/account/login');
    }
  });