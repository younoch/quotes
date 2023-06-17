<template>
    <section class="project padding-bottom project--completed2">
        <div class="container">
            <ReusableHeader subtitle="Previous" title="Completed Project" />
            <div class="project__wrapper">
                <div class="row g-4">
                    <div v-for="(item, index) in completedProjectList" :key="index" class="col-12">
                        <div class="project__item2 position-relative aos-init" data-aos="fade-up"
                            data-aos-duration="800">
                            <div class="project__item2-inner">

                                <!-- project name -->
                                <div class="project__item2-name">
                                    <div class="project__item2-thumb"><img :src="item.authImg" alt="Project Image">
                                    </div>
                                    <div class="project__item2-content">
                                        <h4><nuxt-link to="/project/project-details" class="stretched-link">Cyber
                                                battlefield</nuxt-link>
                                        </h4>
                                        <p>PRICE (GAC) = {{ item.price }} BUSD</p>
                                    </div>
                                </div>

                                <!-- projct chain -->
                                <div class="project__item2-chain">
                                    <img :src="item.logo" alt="chain icon">
                                </div>

                                <!-- project launching time -->
                                <div class="project__item2-time">
                                    <p>{{ item.days }} Ago</p>
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
                    </div>
                </div>
                <Pagination v-if="pagination" />
                <div v-else class="text-center mt-5 aos-init" data-aos="fade-up" data-aos-duration="800">
                    <nuxt-link to="/project" class="default-btn"><span>View More</span></nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Pagination from '@/components/reusable/buttuns/Pagination.vue'
export default {
    props: ['completedProjectList', 'pagination'],
    components: { Pagination }
}
</script>

<style>

</style>