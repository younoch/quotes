
// store/auth.ts
import { defineStore } from 'pinia'
import { useCookies } from '@nuxtjs/cookies'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // Initialize state from cookie or local storage
    user: null,
    token: useCookies().get('token') || null
  }),
  getters: {
    // Check if the user is authenticated
    isAuthenticated() : any{
      return !!this.token
    }
  },
  actions: {
    // Login function that sends the credentials to the API and receives a token
    async login(credentials) {
      try {
        const response = await $fetch('/api/login', {
          method: 'post',
          body: credentials
        })
        const { token, user } = response.data
        // Store the token and user in the state
        this.token = token
        this.user = user
        // Set the token as a cookie or local storage
        useCookies().set('token', token)
        // Optionally, set the Authorization header for future requests
        $fetch.setToken(token, 'Bearer')
      } catch (error) {
        // Handle errors
      }
    },
    // Logout function that clears the token and user from the state and cookie or local storage
    logout() {
      this.token = null
      this.user = null
      useCookies().remove('token')
      $fetch.setToken(false)
    },
    // Middleware function that checks the validity of the token and redirects to login if invalid
    async checkAuth() {
      if (this.token) {
        try {
          // Verify the token with the API or decode it locally
          const response = await $fetch('/api/verify', {
            method: 'post',
            body: { token: this.token }
          })
          const { valid, user } = response.data
          if (valid) {
            // Update the user in the state
            this.user = user
          } else {
            // Redirect to login if invalid
            this.logout()
            return '/login'
          }
        } catch (error) {
          // Handle errors
        }
      } else {
        // Redirect to login if no token
        return '/login'
      }
    }
  }
})
