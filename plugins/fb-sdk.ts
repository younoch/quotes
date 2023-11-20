// plugins/fb-sdk.ts
import { NuxtApp } from '#app'
declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any; 
  }
}


export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const $fb = useAsyncData(async () => {
    // Load the Facebook SDK script
    nuxtApp.head.script.push({
      src: '//connect.facebook.net/en_US/sdk.js',
      async: true,
      defer: true
    })

    // Initialize the SDK with your app ID and other options
    window.fbAsyncInit = () => {
      FB.init({
        appId: 'your-app-id',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v9.0'
      })
      // Assign FB to a global variable
      window.FB = FB
    }

    // Return FB or undefined
    return window.FB
  })

  // Return an object with a provide property that contains $fb
  return {
    provide: {
      $fb
    }
  }
})
