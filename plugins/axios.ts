import axios from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  // axios.defaults.baseURL = config.API_URL ;
  axios.defaults.baseURL = "https://app.the-speakers.com/api/v1" ;
})