<template>
    <section class="roadmap padding-bottom" id="roadmap">
        <div class="container">
            <div class="section-header section-header--middle">
                <div class="section-header__content">
                    <div class="section-header__titlebar">
                        <p class="section-header__subtitle"> Roadmap</p>
                        <h2 class="section__header__title">How All Started</h2>
                    </div>
                </div>
            </div>
            <div class="roadmap__wrapper">
                <SwiperSlide class="roadmap__slider pb-5" :dataList="list" :breakpoints="breakpoints"
                    pevIdentifier=".roadmap__slider-prev" nextIdentifier=".roadmap__slider-next" :hidePaignation="true">
                    <template #project="{ item }">
                        <div class="roadmap__item" data-aos="fade-up" data-aos-duration="1000">
                            <div class="roadmap__item-inner roadmap__item-inner--vertical-line">
                                <div class="roadmap__item-year">
                                    <h6>{{ item.date }}</h6>
                                    <img src="/images/roadmap/arrow-icon.png" alt="Arrow Icon">
                                </div>
                                <div class="roadmap__item-content">
                                    <div class="roadmap__item-icon">{{ item.sl }}</div>
                                    <div class="roadmap__item-text">
                                        <h4>{{ item.title }}</h4>
                                        <p>Lorem Ipsum available, but
                                            the majority have</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-slot:pagination>
                        <div class="project__slider-pagination mt-2 text-center"></div>
                    </template>
                </SwiperSlide>
                <client-only>
                    <div class="roadmap__slider-prev"><i class="fas fa-angle-left"></i></div>
                    <div class="roadmap__slider-next"><i class="fas fa-angle-right"></i></div>
                </client-only>

            </div>
        </div>
    </section>
</template>

<script>
import SwiperSlide from '@/components/reusable/slots/SwiperSlide.vue'
export default {
    props: ['roadmapTitles'],
    components: {
        SwiperSlide
    },
    data() {
        return {
            list: [
                {
                    sl: 1,
                    time: 'Jan 2023',
                    title: 'Concept'
                },
                {
                    sl: 2,
                    time: 'Feb 2023',
                    title: 'Research'
                },
                {
                    sl: 3,
                    time: 'March 2023',
                    title: 'Token Sale'
                },
                {
                    sl: 4,
                    time: 'April 2023',
                    title: 'Pre Sale'
                },
                {
                    sl: 5,
                    time: 'June 2023',
                    title: 'Metaverse'
                },
                {
                    sl: 6,
                    time: 'July 2023',
                    title: 'DeFi Launch'
                },
            ],
            breakpoints: {
                // when window width is >= 320px
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 25
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
            }
        }
    },
}
</script>

<style>

</style>