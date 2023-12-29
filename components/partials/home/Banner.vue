<template>
        <section class="banner py-md-5" id="home" style="background-image: url(/images/banner/bg.png);">
        <div class="container">
            <div class="banner__wrapper">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="banner__content" data-aos="fade-right" data-aos-duration="1000">
                            <h1 class="text-uppercase">Tips, Tricks, and Resources</h1>
                            <p>Discover quotes, thinking, and expertise from writers on your interest.</p>
                            <nuxt-link to="/account/signup" class="default-btn"><span>Be a writer</span></nuxt-link>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner__thumb" data-aos="fade-up" data-aos-duration="1000">
                            <nuxt-img src="/images/banner/banner-thumb/01.png" alt="banner Image"/>

                            <div class="shape-2">
                                <nuxt-img src="/images/banner/banner-thumb/shape3.png" alt="Banner Shape" />
                            </div>
                            <div class="shape-3">
                                <nuxt-img src="/images/banner/banner-thumb/shape1.png" alt="Banner Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>