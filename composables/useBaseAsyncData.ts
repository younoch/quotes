export const useBaseAsyncData = (key: string, handler: (baseUrl: string, nuxtApp: any) => Promise<any>, options: any) => {
    const baseUrl = 'https://api.example.com/'
    const newHandler = (nuxtApp: any) => handler(baseUrl, nuxtApp)
  
    return useAsyncData(key, newHandler, options)
  }