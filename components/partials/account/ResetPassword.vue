<template>
    <div class="login-section padding-bottom">
        <div class=" container">
            <div class="account-wrapper">
                <div class="account-title">
                    <h2>Reset Password</h2>
                    <p>We’ll send you an email with a link to reset the Password to your account</p>
                </div>

                <form class="account-form">
                    <div class="form-group">
                        <input type="email" placeholder="Enter Your Email" name="email">
                    </div>
                    <div class="form-group">
                        <button class="default-btn"><span>Send Reset Code</span></button>
                    </div>
                </form>
                <div class="account-bottom">
                    <span class="d-block cate pt-10">Remember your password ? <nuxt-link
                            to="/account/login">
                            Login</nuxt-link></span>
                </div>
            </div>
        </div>
    </div>
</template>