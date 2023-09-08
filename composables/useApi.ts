import axios from 'axios'


export function useApi() {

  async function get(url: string, params: any = {}) {
    return await axios.get(url, { params })
  }

  async function post(url: string, payload: any, params: any = {}) {
    return await axios.post(url, payload, params);
  }

  async function put(url: string, payload: any, params: any = {}) {
    return await axios.put(url, payload, params);
  }

  async function Delete(url: string) {
    return await axios.delete(url)

  }

  async function patch(url: string, data: any) {
    return await axios.patch(url, data);
  }

  return { get, post, put, Delete, patch };
}
