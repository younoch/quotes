<template>
    <div class="login-section padding-top padding-bottom">
        <div class=" container">
            <div class="account-wrapper">
                <div class="account-title">
                    <h2>Sign Up</h2>
                    <p>Enter your all information to create a new account</p>
                </div>

                <form class="account-form">
                    <div class="form-group">
                        <input type="text" placeholder="First Name" name="Fname">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Last Name" name="Lname">
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Email" name="email">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" name="password">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Confirm Password" name="password">
                    </div>
                    <div class="form-group">
                        <button class="d-block default-btn"><span>Create Account</span></button>
                    </div>
                </form>
                <div class="account-bottom">
                    <span class="d-block cate pt-10">Have any Account? <nuxt-link to="/account/login">
                            Login</nuxt-link></span>
                    <div class="or"><span>or</span></div>
                    <h5 class="subtitle">Register With Social Media</h5>
                    <ul class="social justify-content-center">
                        <li class="social__item">
                            <a href="#" class="social__link"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="social__item">
                            <a href="#" class="social__link"><i class="fab fa-discord"></i></a>
                        </li>
                        <li class="social__item">
                            <a href="#" class="social__link"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li class="social__item">
                            <a href="#" class="social__link"><i class="fab fa-facebook-f"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>