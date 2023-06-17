<template>
    <swiper :modules="modules" :space-between="50" :navigation="navigationOption" :breakpoints="breakpoints"
        :pagination="paginationOption" :autoplay="autoplay" :speed=1200 :direction="direction">

        <swiper-slide v-for="(item, index) in dataList" :key="index">
            <slot name="project" :item="item"></slot>
        </swiper-slide>
        <slot name="pagination"></slot>
    </swiper>
</template>

<script>
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
export default {
    props: {
        dataList: {
            type: Array,
            required: true
        },
        breakpoints: {
            type: Object,
            default: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        },
        pevIdentifier: {
            type: String,
            default: "#swiper-back"
        },
        nextIdentifier: {
            type: String,
            default: "#swiper-forward"
        },
        direction: {
            type: String,
            default: "horizontal"
        },
        hidePaignation: {
            type: Boolean,
            default: false
        },
    },
    components: {
        Swiper, SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation,
                Pagination,
                A11y,
                Autoplay
            ],
        };
    },
    data() {
        return {
            navigationOption: { nextEl: this.nextIdentifier, prevEl: this.pevIdentifier },
            paginationOption: this.hidePaignation ? false : { clickable: true },
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
        }
    },

}
</script>