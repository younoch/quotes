<template>
    <div class="login-section  padding-bottom">
        <div class=" container">
            <div class="account-wrapper">
                <div class="account-title">
                    <h2>Login</h2>
                    <p>Enter your email address and password to get access your account</p>
                </div>

                <form class="account-form">
                    <div class="form-group">
                        <input type="text" v-model="loginForm.username" placeholder="User Name" name="username">
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="loginForm.password" placeholder="Password" name="password">
                    </div>
                    <div class="form-group">
                        <div class="d-flex justify-content-between flex-wrap pt-sm-2">
                            <div class="checkgroup">
                                <input type="checkbox" name="remember" id="remember">
                                <label for="remember">Remember Me</label>
                            </div>
                            <nuxt-link to="/account/reset-password">Forget Password?</nuxt-link>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="default-btn" @click.prevent="login"><span>Login Now</span></button>
                    </div>
                </form>
                <div class="account-bottom">
                    <span class="d-block cate pt-10">Don’t Have any Account? <nuxt-link to="/account/signup"> Sign
                            Up</nuxt-link></span>
                    <div class="or"><span>or</span></div>
                    <h5 class="subtitle">Login With Social Media</h5>
                    <ul class="social justify-content-center">
                        <li class="social__item">
                            <a href="https://twitter.com/home" class="social__link"><nuxt-icon name="brands/twitter"/></a>
                        </li>
                        <li class="social__item">
                            <button class="btn social__link" @click="loginWithGmail"><nuxt-icon name="brands/google"/></button>
                        </li>
                        <li class="social__item">
                            <a href="https://www.linkedin.com/" class="social__link"><nuxt-icon name="brands/linkedin-fill"/></a>
                        </li>
                        <li class="social__item">
                            <button class="btn social__link" @click="loginWithFacebook"><nuxt-icon name="brands/facebook"/></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
import $fb  from "@/plugins/fb-sdk";
const { get } = useApi();

const { authenticateUser } = useAuthStore(); 

const router = useRouter();


const { authenticated } = storeToRefs(useAuthStore());
interface LoginForm {
  username: string;
  password: string;
}

let loginForm = ref<LoginForm>({
  username: '',
  password: ''
})

const fbReady = ref<boolean>(false)

const login = async () => {
  await authenticateUser(loginForm.value);
  if (authenticated) {
    router.push('/');
  }
};

async function loginWithGmail(): Promise<void> {
  get("/login-with-gmail")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});

}

/* const loginWithFacebook = async () => {
      try {
        const response = await $fb.login({
          scope: 'email',
        })
        if (response.authResponse) {
          const profile = await $fb.api('/me', {
            fields: 'id,name,email,picture',
          })
          const data = {
            fb_token: response.authResponse.accessToken,
            ...profile,
          }
          const result = await this.$axios.$post('/api/login', data)
          auth.setUser(result.user)
          auth.setToken(result.token)
        } else {
          console.log('User cancelled login or did not fully authorize.')
        }
      } catch (error) {
        console.error(error)
      }
    } */

onMounted( () => {
    nextTick( () => {
        fbReady.value = true
    })
})
</script>