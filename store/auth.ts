// store/auth.ts

import { defineStore } from 'pinia';

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch(useRuntimeConfig().public.API_URL + '/UserLogin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          username, password,
        },
      });
      this.loading = pending;
      
      if (data.value) {
        
        const token = useCookie('token'); 
        token.value = data?.value?.token;
        this.authenticated = true; 
      }
    },
    logUserOut() {
      const token = useCookie('token'); 
      this.authenticated = false; 
      token.value = null; 
    },
  },
});