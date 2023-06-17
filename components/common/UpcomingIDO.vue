<template>
    <section class="project padding-top padding-bottom">
        <div class="container">
            <div class="section-header section-header--left">
                <div class="section-header__content">
                    <div class="section-header__titlebar">
                        <p class="section-header__subtitle"> IDO Project</p>
                        <h2 class="section__header__title">Upcoming IDO</h2>
                    </div>
                    <nuxt-link :to="redirectUrl" class="default-btn">{{ allButtonTitle }}</nuxt-link>
                </div>
            </div>
            <div class="project__wrapper">
                <div class="swiper project__slider py-2">
                    <SwiperSlide :dataList="projectList">
                        <template #project="{ item }">
                            <ProjectCard :projectDetails="item" :dark="dark" />
                        </template>
                        <template v-slot:pagination>
                            <div class="project__slider-pagination mt-5 py-2 text-center"></div>
                        </template>
                    </SwiperSlide>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectCard from '@/components/reusable/cards/ProjectCard.vue'
import SwiperSlide from '@/components/reusable/slots/SwiperSlide.vue'
export default {
    props: ['projectList', 'dark', 'allButtonTitle', 'redirectUrl'],
    components: {
        ProjectCard, SwiperSlide
    },
}
</script>