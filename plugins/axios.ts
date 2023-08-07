import axios from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  axios.defaults.baseURL = config.public.API_URL as string
})
