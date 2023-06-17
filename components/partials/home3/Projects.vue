<template>
    <section class="project project--completed2 uplifted">
        <div class="container">
            <div class="project__wrapper aos-init" data-aos="fade-up" data-aos-duration="800">
                <Swiper class="project--completed2-slider" :modules="modules" :autoplay="autoplay"
                    :breakpoints="breakpoints" :speed="1200" direction="vertical" grabCursor="true" :loop="true">
                    <SwiperSlide v-for="(item, index) in completedProject" :key="index">
                        <div class="project__item2 position-relative">
                            <div class="project__item2-inner">

                                <!-- project name -->
                                <div class="project__item2-name">
                                    <div class="project__item2-thumb"><img :src="item.authImg" alt="Project Image">
                                    </div>
                                    <div class="project__item2-content">
                                        <h4>
                                            <nuxt-link to="/project/project-details" class="stretched-link">Cyber
                                                battlefield</nuxt-link>
                                        </h4>

                                        <p>PRICE (GAC) = 0.59 BUSD</p>
                                    </div>
                                </div>

                                <!-- projct chain -->
                                <div class="project__item2-chain">
                                    <img :src="item.logo" alt="chain icon">
                                </div>

                                <!-- project launching time -->
                                <div class="project__item2-time">
                                    <p>2 Days Ago</p>
                                </div>

                                <!-- project raised ammount -->
                                <div class="project__item-amount">
                                    <p>Raised Ammount</p>
                                    <h6><span class="color--theme-color">5000</span> / <span>15000
                                            BUSD</span>
                                    </h6>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 25%"
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="text-center mt-5">
                <nuxt-link to="/project" class="default-btn"><span>View Projects</span></nuxt-link>
            </div>
        </div>
    </section>
</template>


<script>
import { A11y, Autoplay, FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
export default {
    props: ['completedProject'],
    components: {
        Swiper, SwiperSlide,
    },
    setup() {
        return {
            modules: [A11y, Autoplay, Navigation, FreeMode],
        };
    },
    data() {
        return {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
            },
        }
    },
}
</script>

<style scoped>
.project--completed2-slider {
    height: 350px;
}
</style>