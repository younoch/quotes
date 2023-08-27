// store/auth.ts

import { defineStore } from "pinia";

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    userProfile: {},
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      const { data, pending }: any = await useFetch(
        useRuntimeConfig().public.API_URL + "/UserLogin",
        {
          method: "post",
          body: {
            username,
            password,
          },
        }
      );
      this.loading = pending;

      if (data.value) {
        const token = useCookie("token");
        token.value = data?.value?.token;
        this.authenticated = true;
        this.userProfile = data.value?.data;
      }
    },
    logUserOut() {
      const token = useCookie("token");
      this.authenticated = false;
      token.value = null;
    },
    async setProfile() {
      const token = useCookie("token");
      if (token.value) {
        const { data, pending }: any = await useFetch(
          useRuntimeConfig().public.API_URL + "/SelectProfile",
          {
            method: "get",
            headers: {
              "token-key": token.value,
            },
          }
        );
        this.userProfile = data.value.data[0]
      }
    },
  },
});
