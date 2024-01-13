<template>
    <div class="login-section padding-bottom">
        <div class=" container">
            <div class="account-wrapper">
                <div class="account-title">
                    <h2>Sign Up</h2>
                    <p>Enter your all information to create a new account</p>
                </div>

                <form @submit.prevent="signupUser" class="account-form">
                    <div class="form-group">
                        <input v-model="signupForm.FirstName" type="text" placeholder="First Name" name="Fname">
                    </div>
                    <div class="form-group">
                        <input v-model="signupForm.LastName" type="text" placeholder="Last Name" name="Lname">
                    </div>
                    <div class="form-group">
                        <input v-model="signupForm.EmailAddress" type="email" placeholder="Email" name="email">
                    </div>
                    <div class="form-group">
                        <input v-model="signupForm.username" type="text" placeholder="username" name="email">
                    </div>
                    <div class="form-group">
                        <input  type="password" placeholder="Password" name="password">
                    </div>
                    <div class="form-group">
                        <input v-model="signupForm.password" type="password" placeholder="Confirm Password" name="password">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="d-block default-btn"><span>Create Account</span></button>
                    </div>
                </form>
                <div class="account-bottom">
                    <span class="d-block cate pt-10">Have any Account? <nuxt-link to="/account/login">
                            Login</nuxt-link></span>
                    <div class="or"><span>or</span></div>
                    <h5 class="subtitle">Register With Social Media</h5>
                    <ul class="social justify-content-center">
                        <li class="social__item">
                            <a href="https://twitter.com/home" class="social__link"><nuxt-icon name="brands/twitter"/></a>
                        </li>
                        <li class="social__item">
                            <a href="https://www.linkedin.com/" class="social__link"><nuxt-icon name="brands/discord-line"/></a>
                        </li>
                        <li class="social__item">
                            <a href="https://www.linkedin.com/" class="social__link"><nuxt-icon name="brands/linkedin-fill"/></a>
                        </li>
                        <li class="social__item">
                            <a href="https://www.facebook.com/" class="social__link"><nuxt-icon name="brands/facebook"/></a>
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

const { authenticateUser } = useAuthStore(); 

const router = useRouter();
const { post } = useApi();

const { authenticated } = storeToRefs(useAuthStore());
interface ISignupForm {
    FirstName: string;
    LastName: string;
    EmailAddress: string;
    username: string;
    password: string;
}

let signupForm = ref<ISignupForm>({
FirstName: '',
LastName: '',
EmailAddress: '',
username: '',
password: '',
})

const signupUser = async () => {
    post("/create-profile", signupForm.value)
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
  await authenticateUser(signupForm.value);
  if (authenticated) {
    router.push('/');
  }
};
</script>