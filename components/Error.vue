<template>
    <div class="error padding-top padding-bottom">
        <div class="container">
            <div class="error__wrapper text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="error__content">
                            <nuxt-img src="/images/error/404.png" alt="404 Image"/>
                            <h2><span class="color--theme-color">Opps !</span> You're Lost in the Space</h2>
                            <p>The page you're looking for is not found or unreachable . please try again or go back to
                                home </p>
                            <nuxt-link to="/" class="default-btn"><span>Back to home</span></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>