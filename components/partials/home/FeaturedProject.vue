<template>
    <section class="project project--featured padding-top padding-bottom">
        <div class="container">
            <div class="project__wrapper">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="section-header section-header--left">
                            <div class="section-header__content">
                                <div class="section-header__titlebar">
                                    <p class="section-header__subtitle"> Trending</p>
                                    <h2 class="section__header__title">Most Popular IDO Projects</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur <br> adipisicing elit. Cum, quod?</p>

                                    <div class="project__slider2-nav">
                                        <div id="swiper-back" class="project__slider2-prev">
                                            <i class="fa-solid fa-arrow-left"></i>
                                        </div>
                                        <div id="swiper-forward" class="project__slider2-next">
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <SwiperSlide :dataList="projectList" :breakpoints="breakpoints">
                            <template #project="{ item }">
                                <ProjectCard :projectDetails="item" />
                            </template>
                            <template v-slot:pagination>
                                <div class="project__slider-pagination mt-5 py-2 text-center"></div>
                            </template>
                        </SwiperSlide>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectCard from '@/components/reusable/cards/ProjectCard.vue'
import SwiperSlide from '@/components/reusable/slots/SwiperSlide.vue'
export default {
    props: ['projectList'],
    components: {
        ProjectCard, SwiperSlide
    },
    data() {
        return {
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        }
    },
}
</script>