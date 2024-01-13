// store/auth.ts

import { defineStore } from "pinia";
const { useToast } = useToster()

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
  getters: {
    getUserProfile: (state) => state.userProfile,
  },
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
        useToast('success', "login successfully");
        const token = useCookie("token");
        token.value = data?.value?.token;
        this.authenticated = true;
        this.userProfile = data.value?.data;
      } else {
        useToast('error','username required');
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
        this.userProfile = data.value?.data[0]
      }
    },
  },
});
