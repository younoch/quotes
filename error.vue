<template>
    <div>

        <Header class="sticky-top" />
        <section class="page-header bg--cover" style="background-image: url(/images/header/bg.jpg);">
            <div class="container">
                <div class="page-header__content text-center">
                    <h2 class="text-capitalize">404</h2>
                    <nav style="--bs-breadcrumb-divider: '-';" aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">404</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        <Error />
        <ApplyToLanuch />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'

useHead({
  title: "Error"
})

</script>