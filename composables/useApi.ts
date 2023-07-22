import axios from 'axios'


export function useApi() {
  // const nuxtApp = useNuxtApp();
  // const api = nuxtApp.$api;

  async function get(url: string, params: any = {}) {
    return await axios.get(url, { params })
    // return await api.get(url, { params });
  }

  // async function post(url: string, payload: any, params: any = {}) {
  //   return await api.post(url, payload, params);
  // }

  // async function put(url: string, payload: any, params: any = {}) {
  //   return await api.put(url, payload, params);
  // }

  // async function delete(url: string) {
  //   return await api.delete(url)

  // }

  // async function patch(url: string, data: any) {
  //   return await api.patch(url, data);
  // }

  return { get };
}
