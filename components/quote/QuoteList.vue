<template>
    <section class="project pb-2 pb-md-5 project--completed2">

            <div class="project__wrapper">
                <div class="row g-2 g-md-3">
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

                
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination v-if="pagination" />
                <div v-else class="text-center mt-3 mt-md-5 aos-init" data-aos="fade-up" data-aos-duration="800">
                    <nuxt-link to="/project" class="default-btn"><span>View More</span></nuxt-link>
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